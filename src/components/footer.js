import { footer } from "../data/data.js";
import Component from "./Mount.js";


class Footer extends Component{
    render(){
        const footerContainer=document.createElement("div");
        const footerPara=document.createElement("p");

        footerContainer.classList.add("footerContainer");
        
        footerPara.innerText=footer.footer;
        footerContainer.appendChild(footerPara);

        return footerContainer;
    }
}

export{Footer};