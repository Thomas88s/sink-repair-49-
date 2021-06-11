import { getRequests, deleteRequest, getPlumbers } from "./dataAccess.js"
import { saveCompletion } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Requests = () => {
    const requests = getRequests()
    const plumbers = getPlumbers()
    let html = "<ul>"
     
    const listItems = requests.map(request => {
        return `
    <li class="request">
        ${request.description}        &nbsp;&nbsp;&nbsp;       
        <select class="plumbers" id="plumbers">
        <option value="">Choose</option>
            ${
                plumbers.map(
                    plumber => {
                        return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
                    }
                ).join("")
            }
            </select>
        <button class="button"
                  id="request--${request.id}">
            Delete
         </button>



    </li>`
    })
             
    html += listItems.join("")
    html += "</ul>"
    return html
}

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")  
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
          
            const completion = { 
                request: requestId,
                plumber: plumberId,
                date_created: new Date() 
            }
            
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
                saveCompletion(completion)
        }
    }
)


