import initialLayout from "./layout";
import menuLayout from "./menu";
import contactLayout from "./contact";

const startDisplay = initialLayout();
const menuDisplay = menuLayout();
const contactDisplay = contactLayout();

startDisplay.render();

document.getElementById("menu").addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  mainContent.remove();
  menuDisplay.render();
});

document.getElementById("contact").addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  mainContent.remove();
  contactDisplay.render();
});

document.getElementById("logo").addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  mainContent.remove();
  startDisplay.reInitialize();
});
