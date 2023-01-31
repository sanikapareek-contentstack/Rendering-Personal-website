import { Header } from "./components/header.js";
import { Banner } from "./components/banner.js";
import { ProfileImage } from "./components/profileImage.js";
import { Profile } from "./components/profile.js";

const header=new Header();
header.mount(document.getElementById("root"));

const banner=new Banner();
banner.mount(document.getElementById("root"));

const profileImg=new ProfileImage()
profileImg.mount(document.getElementById("root"));

const profile=new Profile();
profile.mount(document.getElementById("root"));
