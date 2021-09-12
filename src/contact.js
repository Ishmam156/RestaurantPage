import initialLayout from "./layout";

const contactLayout = () => {
  const render = () => {
    const restartLayout = initialLayout();
    restartLayout.addImageContent();

    const content = document.getElementById("mainContent");

    const contactTitle = document.createElement("h2");
    contactTitle.id = "menuTitle";
    contactTitle.textContent = "Contact Us";
    content.appendChild(contactTitle);

    const contactDisplay = document.createElement("div");
    contactDisplay.id = "menuDisplay";

    const contactItems = [
      {
        name: "Aazreen Chowdhury",
        phone: "+880 17131448855",
        description: "Founder & CEO",
      },
      {
        name: "Ishmam Chowdhury",
        phone: "+880 17131447755",
        description: "CTO",
      },
    ];

    contactItems.forEach((item) => {
      const singleItem = document.createElement("div");
      singleItem.classList.add("single-item");
      const name = document.createElement("h3");
      name.textContent = item.name;

      const phone = document.createElement("h5");
      phone.textContent = item.phone;

      const description = document.createElement("p");
      description.textContent = item.description;

      singleItem.appendChild(name);
      singleItem.appendChild(phone);
      singleItem.appendChild(description);

      contactDisplay.appendChild(singleItem);
    });

    content.appendChild(contactDisplay);
  };

  return {
    render,
  };
};

export default contactLayout;
