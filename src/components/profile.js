// import data from '../../data/profile.json' assert {type :'json'};
import { profile } from '../data/data.js';
import { ProfileSection } from './profileSection.js';
import Component from './Mount.js';
class Profile extends Component{
    render(){
        const profileContainer=document.createElement("div");
        const profileHeading=document.createElement("h1");
        const githubIcon=document.createElement("i");
        const githubLink=document.createElement("a");
        const linkdinIcon=document.createElement("i");
        const linkdinLink=document.createElement("a");

        profileContainer.id="profileContainer";
        profileHeading.innerText=profile.profileHeading;

        profileContainer.appendChild(profileHeading);
        // const aboutMe=new ProfileSection();
        // profileContainer.appendChild(aboutMe);

        return profileContainer;

    }
}

export {Profile};