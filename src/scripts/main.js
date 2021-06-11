import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests, fetchPlumbers } from "./dataAccess.js"




const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchRequests()
    .then(fetchPlumbers)
    .then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
        )
    }
    
    render()
    
  