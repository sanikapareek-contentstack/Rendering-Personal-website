import data from "../../data/profilePhoto.json" assert {type :'json'};
import Component from "./Mount.js";

class ProfileImage extends Component{
    render(){
        const profileImageContainer=document.createElement("div");
        const profileImage=document.createElement("img");

        profileImageContainer.classList.add("profileImageContainer");

        profileImage.src=data.profileImage;

        profileImageContainer.appendChild(profileImage);

        return profileImageContainer;
    }
}
export {ProfileImage};