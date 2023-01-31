import Component from "./Mount.js";

class ProfileSection extends Component{
    render(data){
        const profileSectionContainer=document.createElement("div");
        const profileSectionHeading=document.createElement("h1");
        const profileSectionPara=document.createElement("p");

        profileSectionContainer.classList.add(data.heading.replace(" ","").toLowerCase())
        profileSectionHeading.innerText=data.heading;

        if(typeof data.paragraph === 'object'){
            for(let i=0;i<data.paragraph.length;i++){
                profileSectionPara.innerHTML=profileSectionPara.innerHTML+`<strong>${data.paragraph[i].title}</strong>: `;
                for(let j=0;j<data.paragraph[i].value.length;j++){
                    if(typeof data.paragraph[i].value[j]==='object'){
                        const logo=document.createElement("i");
                        const logo_link=document.createElement("a");
                        logo.className=data.paragraph[i].value[j].logo_class;
                        logo_link.href=data.paragraph[i].value[j].logoLink;
                        logo_link.target="_blank";
                        logo_link.appendChild(logo);
                        profileSectionPara.appendChild(logo_link); 

                    }else{
                        if((data.paragraph[i].value.length)-j-1===0){
                            profileSectionPara.innerHTML=profileSectionPara.innerHTML+`${data.paragraph[i].value[j]}<br><br> `
                        }else{
                        profileSectionPara.innerHTML=profileSectionPara.innerHTML+`${data.paragraph[i].value[j]}, `;
                        }
                    }
                    
                }
            }
            
        }else{
            profileSectionPara.innerText=data.paragraph;
        }
       
        profileSectionContainer.appendChild(profileSectionHeading);
        profileSectionContainer.appendChild(profileSectionPara);

        return profileSectionContainer;
    }

}

export{ProfileSection};