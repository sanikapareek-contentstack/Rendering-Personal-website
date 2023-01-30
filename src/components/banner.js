import data from '../../data/banner.json' assert {type :'json'};
import Component from './Mount.js';


class Banner extends Component{
    render(){
        const bannerContainer=document.createElement("div");
        const bannerHeading=document.createElement("h1");
        const bannerDescription=document.createElement("h2");

        bannerContainer.classList.add("bannerContainer");
        bannerContainer.style.backgroundImage=`url(${data.bannerBackgroundImg})`;

        bannerContainer.appendChild(bannerHeading);
        bannerContainer.appendChild(bannerDescription);

        bannerHeading.innerText=data.name;
        bannerDescription.innerText=data.position;

        return bannerContainer;
        
    }
}

export {Banner};