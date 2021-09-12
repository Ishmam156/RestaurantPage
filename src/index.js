import initialLayout from "./layout";

const startLayout = initialLayout();

// startLayout.render();

document.getElementById("contact").addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  mainContent.remove();
});

document.getElementById("menu").addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  mainContent.remove();
});

document.getElementById("about").addEventListener("click", () => {
  const mainContent = document.getElementById("mainContent");
  mainContent.remove();
});

document.getElementById("logo").addEventListener("click", () => {
  startLayout.addImageContent();
});
