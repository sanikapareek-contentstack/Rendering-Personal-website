import data from '../../data/header.json' assert {type :'json'};
console.log(data);
class Header{
    

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

        headerContainer.appendChild(headerLink);
        headerLink.appendChild(headerImage);
        headerContainer.appendChild(headerNav);
        headerNav.appendChild(headerUnorderList);
        headerUnorderList.appendChild(headerProfileLink);
        headerProfileLink.appendChild(headerProfile);
        headerUnorderList.appendChild(headerEducationLink);
        headerEducationLink.appendChild(headerEducation);
        headerUnorderList.appendChild(headerAchievementLink);
        headerAchievementLink.appendChild(headerAchievement);
        headerUnorderList.appendChild(headerProjectLink);
        headerProjectLink.appendChild(headerProject);

        headerLink.href=data['logo-href'];
        headerImage.src=data['logo'];
        headerProfile.innerHTML=data.nav[0].title;
        headerProfileLink.href=data.nav[0].href;
        headerEducation.innerHTML=data.nav[1].title;
        headerEducationLink.href=data.nav[1].href;
        headerAchievement.innerHTML=data.nav[2].title;
        headerAchievementLink.href=data.nav[2].href;
        headerProject.innerHTML=data.nav[3].title;
        headerProjectLink.href=data.nav[3].href;

        return headerContainer;
    
    }

    mount(el){
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
    }

    
    
}
export {Header}