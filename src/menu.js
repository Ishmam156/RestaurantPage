import initialLayout from "./layout";
import Burger from "./images/burger.jpeg";
import Pizza from "./images/pizza.jpeg";
import Roll from "./images/roll.jpeg";

const menuLayout = () => {
  const render = () => {
    const restartLayout = initialLayout();
    restartLayout.addImageContent();

    const content = document.getElementById("mainContent");

    const menuTitle = document.createElement("h2");
    menuTitle.id = "menuTitle";
    menuTitle.textContent = "Menu";
    content.appendChild(menuTitle);

    const menuDisplay = document.createElement("div");
    menuDisplay.id = "menuDisplay";

    const menuItems = [
      {
        name: "Burger",
        image: Burger,
        price: "$9.99",
        description: "Double beef patty burger with seaseme buns!",
      },
      {
        name: "Pizza",
        image: Pizza,
        price: "$14.99",
        description: "All types of meat and 4 cheeses in one pizza!",
      },
      {
        name: "Roll",
        image: Roll,
        price: "$4.99",
        description: "Your classic roll containing cottage cheese!",
      },
    ];

    menuItems.forEach((item) => {
      const singleItem = document.createElement("div");
      singleItem.classList.add("single-item");
      const name = document.createElement("h3");
      name.textContent = item.name;

      const foodImage = new Image();
      foodImage.src = item.image;

      const price = document.createElement("h5");
      price.textContent = item.price;

      const description = document.createElement("p");
      description.textContent = item.description;

      singleItem.appendChild(name);
      singleItem.appendChild(foodImage);
      singleItem.appendChild(price);
      singleItem.appendChild(description);

      menuDisplay.appendChild(singleItem);
    });

    content.appendChild(menuDisplay);
  };

  return {
    render,
  };
};

export default menuLayout;
