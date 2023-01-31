import { Header } from "./components/header.js";
import { Banner } from "./components/banner.js";
import { ProfileImage } from "./components/profileImage.js";
import { Profile } from "./components/profile.js";
import { ProfileSection } from "./components/profileSection.js";
import { profile } from "./data/data.js";
import { Cards } from "./components/cards.js";

const header=new Header();
header.mount(document.getElementById("root"));

const banner=new Banner();
banner.mount(document.getElementById("root"));

const profileImg=new ProfileImage()
profileImg.mount(document.getElementById("root"));

const profileComponent=new Profile();
profileComponent.mount(document.getElementById("root"));

for(let i=0;i<profile.section.length;i++){
    const section=new ProfileSection();
    section.mount(document.querySelector(".profileContainer"),profile.section[i]);
}

const educationCards=new Cards();
educationCards.mount(document.getElementById("root"))



