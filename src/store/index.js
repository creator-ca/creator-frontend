// src/store/index.js

import { proxy } from "valtio";

const state = proxy({
  intro: true, // Checking whether we are currently on the home page or not
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  isBackLogoTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
  backLogoDecal: "./threejs.png",
  rotation: 0, // To handle the rotation of the shirt
});

export default state;
