import Banner from "./images/main_banner.png";

const initialLayout = () => {
  const mainContent = document.getElementById("content");

  const addNavBar = () => {
    mainContent.innerHTML = "";
    const nav = document.createElement("nav");
    const navLeft = document.createElement("div");
    navLeft.id = "navLeft";
    const logo = document.createElement("div");
    logo.textContent = "Chowdhury's Creations";
    logo.id = "logo";
    navLeft.appendChild(logo);
    nav.appendChild(logo);
    const navRight = document.createElement("div");
    navRight.id = "navRight";
    const links = ["Menu", "Contact"];
    links.forEach((item) => {
      let link = document.createElement("div");
      link.textContent = item;
      link.id = item.toLowerCase();
      navRight.appendChild(link);
    });
    nav.appendChild(navRight);
    mainContent.appendChild(nav);
  };

  const addImageContent = () => {
    const content = document.createElement("div");
    content.id = "mainContent";

    const imageBanner = document.createElement("div");
    imageBanner.id = "imageBanner";
    const foodImage = new Image();
    foodImage.src = Banner;

    imageBanner.appendChild(foodImage);
    content.appendChild(imageBanner);

    mainContent.appendChild(content);
  };

  const descriptionContent = () => {
    const content = document.getElementById("mainContent");

    const description = document.createElement("div");
    description.id = "description";

    const title = document.createElement("h1");
    title.textContent = "Chowdhurys' Creations!";
    description.appendChild(title);

    const details = document.createElement("p");
    details.textContent =
      "It was a success from the start but quickly became something even bigger... a game changer. We saw what was happening and got excited. Let’s keep going. So we discovered quinoa and expanded the menu to serve a full selection of high-protein salads, wraps, and bowls customizable for all diets. Every body loved it. The all-day power of protein grew in popularity. We all started eating, feeling and moving better. It’s all good.";
    description.appendChild(details);
    content.appendChild(description);
  };

  const reInitialize = () => {
    addImageContent();
    descriptionContent();
  };

  const render = () => {
    addNavBar();
    addImageContent();
    descriptionContent();
  };

  return {
    render,
    addImageContent,
    reInitialize,
  };
};

export default initialLayout;
