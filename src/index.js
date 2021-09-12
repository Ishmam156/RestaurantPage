import initialLayout from "./layout";
import menuLayout from "./menu";

const startDisplay = initialLayout();
const menuDisplay = menuLayout();

startDisplay.render();

document.getElementById("contact").addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  mainContent.remove();
});

document.getElementById("menu").addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  mainContent.remove();
  menuDisplay.render();
});

document.getElementById("logo").addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  mainContent.remove();
  startDisplay.reInitialize();
});
