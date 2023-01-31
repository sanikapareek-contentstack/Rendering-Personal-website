import { achievements } from "../data/data.js";
import Component from "./Mount.js";

class Achievement extends Component{
    render(){
        const achievementContainer=document.createElement("div");
        const achievementHeading=document.createElement("h1");
        const achievementList=document.createElement("ul");

        achievementContainer.classList.add("achievementContainer");
        achievementContainer.id="achievements";
        achievementHeading.classList.add("achievementHeading")
        achievementList.classList.add("achievementList");
        
        achievementHeading.innerText=achievements.achievementHeading;

        for(let i=0;i<achievements.achievements.length;i++){
            const achievement=document.createElement("li");
            achievement.innerText=achievements.achievements[i];
            achievementList.appendChild(achievement);
        }

        achievementContainer.appendChild(achievementHeading);
        achievementContainer.appendChild(achievementList);

        return achievementContainer;
    }
}

export{Achievement};