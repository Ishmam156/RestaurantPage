import Banner from "./main_banner.png";

const initialLayout = () => {
  const mainContent = document.getElementById("content");

  const addNavBar = () => {
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
    const links = ["Contact", "Menu", "About Us"];
    links.forEach((item) => {
      let link = document.createElement("div");
      link.textContent = item;
      navRight.appendChild(link);
    });
    nav.appendChild(navRight);
    mainContent.appendChild(nav);
  };

  const addImageContent = () => {
    const content = document.createElement("div");
    content.classList.add("mainContent");

    const imageBanner = document.createElement("div");
    imageBanner.id = "imageBanner";
    const foodImage = new Image();
    foodImage.src = Banner;

    imageBanner.appendChild(foodImage);
    content.appendChild(imageBanner);

    const description = document.createElement("div");
    description.id = "description";

    const title = document.createElement("h1");
    title.textContent = "Chowdhurys Creations!";
    description.appendChild(title);

    const details = document.createElement("p");
    details.textContent =
      "It was a success from the start but quickly became something even bigger... a game changer. We saw what was happening and got excited. Let’s keep going. So we discovered quinoa and expanded the menu to serve a full selection of high-protein salads, wraps, and bowls customizable for all diets. Every body loved it. The all-day power of protein grew in popularity. We all started eating, feeling and moving better. It’s all good.";
    description.appendChild(details);
    content.appendChild(description);

    mainContent.appendChild(content);
  };

  const render = () => {
    mainContent.innerHTML = "";
    addNavBar();
    addImageContent();
  };

  return {
    render,
  };
};

export default initialLayout;
