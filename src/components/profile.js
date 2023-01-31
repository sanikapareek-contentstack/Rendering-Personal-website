// import data from '../../data/profile.json' assert {type :'json'};
import { profile } from '../data/data.js';
import { ProfileSection } from './profileSection.js';
import Component from './Mount.js';
class Profile extends Component{
    render(){
        const profileContainer=document.createElement("div");
        const profileSection=document.createElement("div");
        const profileHeading=document.createElement("h1");
      

        profileContainer.id="profile";
        profileSection.classList.add("profileContainer");
        profileHeading.innerText=profile.profileHeading;

        profileContainer.appendChild(profileHeading);
        profileContainer.appendChild(profileSection);

        return profileContainer;

    }
}

export {Profile};