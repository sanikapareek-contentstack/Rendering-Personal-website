import { project } from "../data/data.js";
import Component from "./Mount.js";

class Project extends Component{

    render(){
        const projectContainer=document.createElement("div");
        const projectHeading=document.createElement("h1");
        const projectCards=document.createElement("div");

        projectContainer.classList.add("projectContainer");
        projectContainer.id="project";
        projectCards.classList.add("projectCards");
        
        projectHeading.innerText=project.projectHeading;

        projectContainer.appendChild(projectHeading);
        projectContainer.appendChild(projectCards);

        return projectContainer;
    }
}
export{Project};