import Component from "./Mount.js";

class Cards extends Component{
    render(data,cardFor){

        const cardContainer=document.createElement("div");
        const cardHeader=document.createElement("div");
        const cardHeading=document.createElement("h2");
        const cardPara=document.createElement("p");

        
        switch(cardFor.toLowerCase()){
            case "education":{
                cardContainer.classList.add(`${cardFor.toLowerCase()}Card`);
                cardHeader.classList.add(`${cardFor.toLowerCase()}CardHeader`);
                cardHeading.innerText=data.educationHeading;
                cardPara.innerHTML=
                    `<strong>${data.institutionHeading}</strong>: ${data.institutionName}<br><br>
                    <strong>${data.streamHeading}</strong>: ${data.streamType}<br><br>
                    <strong>${data.marksType}</strong>: ${data.marks}<br><br>
                    <strong>${data.yearHeading}</strong>: ${data.year}<br><br>
                    `;
                
            }
            break;
            case "project":{
                cardContainer.classList.add(`${cardFor.toLowerCase()}Card`);
                cardHeader.classList.add(`${cardFor.toLowerCase()}CardHeader`);
                cardHeading.innerText=data.projectName;
                cardPara.innerHTML=`<strong>${data.skillHeading}</strong>: `;
                for(let i=0;i<data.skills.length;i++){
                    if((data.skills.length)-i-1===0){
                        cardPara.innerHTML=cardPara.innerHTML+`${data.skills[i]} <br><br>`;
                    }else{
                        cardPara.innerHTML=cardPara.innerHTML+`${data.skills[i]}, `
                    }
                    
                }   
                cardPara.innerHTML=cardPara.innerHTML+data.description;
                
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