import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests } from "./dataAccess.js"


fetchRequests()

const mainContainer = document.querySelector("#container")

export const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
        )
    }
    
    render()
    
  