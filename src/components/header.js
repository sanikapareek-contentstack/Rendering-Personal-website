import data from '../../data/header.json' assert {type :'json'};
import Component from './Mount.js';
class Header extends Component{
    
    render(){
        const headerContainer=document.createElement("div");
        const headerLink=document.createElement("a");
        const headerImage=document.createElement("img");
        const headerNav=document.createElement("nav");
        const headerUnorderList=document.createElement("ul");
        const headerProfileLink=document.createElement("a");
        const headerProfile=document.createElement("li");
        const headerEducationLink=document.createElement("a");
        const headerEducation=document.createElement("li");
        const headerAchievementLink=document.createElement("a");
        const headerAchievement=document.createElement("li");
        const headerProjectLink=document.createElement("a");
        const headerProject=document.createElement("li");

        headerContainer.classList.add("headerContainer");
        headerLink.classList.add("header-logo");
        headerNav.classList.add("header-nav");

        const headerNavArr=[
            {
                title:headerProfile,
                href:headerProfileLink
            },
            {
                title:headerEducation,
                href:headerEducationLink
            },
            {
                title:headerAchievement,
                href:headerAchievementLink},
            {
                title:headerProject,
                href:headerProjectLink
            }
        ];

        headerContainer.appendChild(headerLink);
        headerLink.appendChild(headerImage);
        headerContainer.appendChild(headerNav);
        headerNav.appendChild(headerUnorderList);

        for(let i=0;i<headerNavArr.length;i++){
            headerUnorderList.appendChild(headerNavArr[i].href);
            (headerNavArr[i].href).appendChild(headerNavArr[i].title);
        }
        
        headerLink.href=data['logo-href'];
        headerImage.src=data['logo'];
        
        for(let i=0;i<headerNavArr.length;i++){
            (headerNavArr[i].title).innerText=data.nav[i].title;
            (headerNavArr[i].href).href=data.nav[i].href;
        }

        return headerContainer;
    
    }

    
}
export {Header}