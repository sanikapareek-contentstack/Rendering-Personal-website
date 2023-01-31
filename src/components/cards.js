import Component from "./Mount.js";

class Cards extends Component{
    render(data,cardFor){
        const cardContainer=document.createElement("div");
        const cardHeader=document.createElement("div");
        const cardHeading=document.createElement("h1");
        const cardPara=document.createElement("p");

        
        switch(cardFor.toLowerCase()){
            case "education":{
                cardContainer.classList.add(`${cardFor.toLowerCase()}Card`);
                cardHeader.classList.add(`${cardFor.toLowerCase()}CardHeader`);
                cardHeading.innerText=data.educationTnfo.educationHeading;
                cardPara.innerHTML=
                    `<strong>${data.educationInfo.institutionHeading}</strong>:${data.educationInfo.institutionHeading}<br>
                    <strong>${data.educationInfo.streamHeading}</strong>:${data.educationInfo.streamType}<br>
                    <strong>${data.educationInfo.marksType}</strong>:${data.educationInfo.marks}<br>
                    <strong>${data.educationInfo.yearHeading}</strong>:${data.educationInfo.year}<br>
                    `;
                
            }
            break;
            case "project":{
                cardContainer.classList.add(`${cardFor.toLowerCase()}Card`);
                cardHeader.classList.add(`${cardFor.toLowerCase()}CardHeader`);
                cardHeading.innerText=data.projects.projectName;
                cardPara.innerHTML=`<strong>${data.project.skillHeading}</strong>: `;
                for(let i=0;i<data.project.skills.length;i++){
                    if((data.project.skills)-i-1===0){
                        cardPara.innerHTML=cardPara.innerHTML+`${data.project.skills[i]} <br> `;
                    }else{
                        cardPara.innerHTML=cardPara.innerHTML+`${data.project.skills[i]}, `
                    }
                    
                }   
                
            }
            break;
            default: break;
        }
            
        cardContainer.appendChild(cardHeader);
        cardHeader.appendChild(cardHeading);
        cardContainer.appendChild(cardPara);

        return cardContainer;
        
    }
}

export {Cards};