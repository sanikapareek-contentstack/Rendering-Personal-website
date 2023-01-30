import { Header } from "./components/header.js";
import { Banner } from "./components/banner.js";
import { ProfileImage } from "./components/profileImage.js";

const header=new Header();
header.mount(document.getElementById("root"));

const banner=new Banner();
banner.mount(document.getElementById("root"));

const profileImg=new ProfileImage()
profileImg.mount(document.getElementById("root"));
