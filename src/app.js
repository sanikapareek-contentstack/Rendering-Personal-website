import { Header } from "./components/header.js";
import { Banner } from "./components/banner.js";

const header=new Header();
header.mount(document.getElementById("root"));

const banner=new Banner();
banner.mount(document.getElementById("root"));