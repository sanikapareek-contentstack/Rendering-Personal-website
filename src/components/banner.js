import { banner } from '../data/data.js';
import Component from './Mount.js';


class Banner extends Component{
    render(){
        const bannerContainer=document.createElement("div");
        const bannerHeading=document.createElement("h1");
        const bannerDescription=document.createElement("h2");

        bannerContainer.classList.add("bannerContainer");
        bannerContainer.style.backgroundImage=`url(${banner.bannerBackgroundImg})`;

        bannerContainer.appendChild(bannerHeading);
        bannerContainer.appendChild(bannerDescription);

        bannerHeading.innerText=banner.name;
        bannerDescription.innerText=banner.position;

        return bannerContainer;
        
    }
}

export {Banner};