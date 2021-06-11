import { getRequests, deleteRequest, getPlumbers } from "./dataAccess.js"

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
        ${request.description}              
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




