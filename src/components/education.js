import { education } from "../data/data.js";
import Component from "./Mount.js";
class Education extends Component{

    render(){
        const educationContainer=document.createElement("div");
        const educationHeading=document.createElement("h1");
        const educationCards=document.createElement("div");

        educationContainer.classList.add("educationContainer");
        educationContainer.id="education";
        educationCards.classList.add("educationCards");
        
        educationHeading.innerText=education.educationHeading;

        educationContainer.appendChild(educationHeading);
        educationContainer.appendChild(educationCards);

        return educationContainer;
    }
}

export{Education};
    