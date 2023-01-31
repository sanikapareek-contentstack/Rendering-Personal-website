import { Header } from "./components/header.js";
import { Banner } from "./components/banner.js";
import { ProfileImage } from "./components/profileImage.js";
import { Profile } from "./components/profile.js";
import { ProfileSection } from "./components/profileSection.js";
import { profile, project,education} from "./data/data.js";
import { Education } from "./components/education.js";
import { Cards } from "./components/cards.js";
import { Project } from "./components/projects.js";
import { Achievement } from "./components/achievements.js";
import { Footer } from "./components/footer.js";

const headerComponent=new Header();
headerComponent.mount(document.getElementById("root"));

const bannerComponent=new Banner();
bannerComponent.mount(document.getElementById("root"));

const profileImgComponent=new ProfileImage()
profileImgComponent.mount(document.getElementById("root"));

const profileComponent=new Profile();
profileComponent.mount(document.getElementById("root"));

for(let i=0;i<profile.section.length;i++){
    const section=new ProfileSection();
    section.mount(document.querySelector(".profileContainer"),profile.section[i]);
}

const educationComponent=new Education();
educationComponent.mount(document.getElementById("root"))

for(let i=0;i<education.educationInfo.length;i++){
    const educationCard=new Cards();
    educationCard.mount(document.querySelector(".educationCards"),education.educationInfo[i],"education");
}
const achievementComponent=new Achievement();
achievementComponent.mount(document.getElementById("root"));

const projectComponent=new Project();
projectComponent.mount(document.getElementById("root"));

for(let i=0;i<project.projects.length;i++){
    const projectCard=new Cards();
    projectCard.mount(document.querySelector(".projectCards"),project.projects[i],"project");
}

const footerComponent=new Footer();
footerComponent.mount(document.getElementById("root"));



