/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");


const contactLayout = () => {
  const render = () => {
    const restartLayout = (0,_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactLayout);


/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_main_banner_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/main_banner.png */ "./src/images/main_banner.png");


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
    foodImage.src = _images_main_banner_png__WEBPACK_IMPORTED_MODULE_0__;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLayout);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _images_burger_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/burger.jpeg */ "./src/images/burger.jpeg");
/* harmony import */ var _images_pizza_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pizza.jpeg */ "./src/images/pizza.jpeg");
/* harmony import */ var _images_roll_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/roll.jpeg */ "./src/images/roll.jpeg");





const menuLayout = () => {
  const render = () => {
    const restartLayout = (0,_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
        image: _images_burger_jpeg__WEBPACK_IMPORTED_MODULE_1__,
        price: "$9.99",
        description: "Double beef patty burger with seaseme buns!",
      },
      {
        name: "Pizza",
        image: _images_pizza_jpeg__WEBPACK_IMPORTED_MODULE_2__,
        price: "$14.99",
        description: "All types of meat and 4 cheeses in one pizza!",
      },
      {
        name: "Roll",
        image: _images_roll_jpeg__WEBPACK_IMPORTED_MODULE_3__,
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLayout);


/***/ }),

/***/ "./src/images/burger.jpeg":
/*!********************************!*\
  !*** ./src/images/burger.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cbcb74106b9be18ef59.jpeg";

/***/ }),

/***/ "./src/images/main_banner.png":
/*!************************************!*\
  !*** ./src/images/main_banner.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad431bb2a715ccfa93c6.png";

/***/ }),

/***/ "./src/images/pizza.jpeg":
/*!*******************************!*\
  !*** ./src/images/pizza.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c493ee47e3164cacea4.jpeg";

/***/ }),

/***/ "./src/images/roll.jpeg":
/*!******************************!*\
  !*** ./src/images/roll.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe7a44e7e4fc9e1fe464.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const startDisplay = (0,_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
const menuDisplay = (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
const contactDisplay = (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXRpYWxMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5cbmNvbnN0IGNvbnRhY3RMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCByZXN0YXJ0TGF5b3V0ID0gaW5pdGlhbExheW91dCgpO1xuICAgIHJlc3RhcnRMYXlvdXQuYWRkSW1hZ2VDb250ZW50KCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKTtcblxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb250YWN0VGl0bGUuaWQgPSBcIm1lbnVUaXRsZVwiO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcblxuICAgIGNvbnN0IGNvbnRhY3REaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0RGlzcGxheS5pZCA9IFwibWVudURpc3BsYXlcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RJdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJBYXpyZWVuIENob3dkaHVyeVwiLFxuICAgICAgICBwaG9uZTogXCIrODgwIDE3MTMxNDQ4ODU1XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZvdW5kZXIgJiBDRU9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiSXNobWFtIENob3dkaHVyeVwiLFxuICAgICAgICBwaG9uZTogXCIrODgwIDE3MTMxNDQ3NzU1XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNUT1wiLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgY29udGFjdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHNpbmdsZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2luZ2xlSXRlbS5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLWl0ZW1cIik7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgICBwaG9uZS50ZXh0Q29udGVudCA9IGl0ZW0ucGhvbmU7XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICBzaW5nbGVJdGVtLmFwcGVuZENoaWxkKHBob25lKTtcbiAgICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICBjb250YWN0RGlzcGxheS5hcHBlbmRDaGlsZChzaW5nbGVJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdERpc3BsYXkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdExheW91dDtcbiIsImltcG9ydCBCYW5uZXIgZnJvbSBcIi4vaW1hZ2VzL21haW5fYmFubmVyLnBuZ1wiO1xuXG5jb25zdCBpbml0aWFsTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICBjb25zdCBhZGROYXZCYXIgPSAoKSA9PiB7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGNvbnN0IG5hdkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdkxlZnQuaWQgPSBcIm5hdkxlZnRcIjtcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsb2dvLnRleHRDb250ZW50ID0gXCJDaG93ZGh1cnkncyBDcmVhdGlvbnNcIjtcbiAgICBsb2dvLmlkID0gXCJsb2dvXCI7XG4gICAgbmF2TGVmdC5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgY29uc3QgbmF2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdlJpZ2h0LmlkID0gXCJuYXZSaWdodFwiO1xuICAgIGNvbnN0IGxpbmtzID0gW1wiTWVudVwiLCBcIkNvbnRhY3RcIl07XG4gICAgbGlua3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGluay50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICBsaW5rLmlkID0gaXRlbS50b0xvd2VyQ2FzZSgpO1xuICAgICAgbmF2UmlnaHQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG5hdlJpZ2h0KTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChuYXYpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEltYWdlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmlkID0gXCJtYWluQ29udGVudFwiO1xuXG4gICAgY29uc3QgaW1hZ2VCYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltYWdlQmFubmVyLmlkID0gXCJpbWFnZUJhbm5lclwiO1xuICAgIGNvbnN0IGZvb2RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGZvb2RJbWFnZS5zcmMgPSBCYW5uZXI7XG5cbiAgICBpbWFnZUJhbm5lci5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VCYW5uZXIpO1xuXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIH07XG5cbiAgY29uc3QgZGVzY3JpcHRpb25Db250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc2NyaXB0aW9uLmlkID0gXCJkZXNjcmlwdGlvblwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNob3dkaHVyeXMnIENyZWF0aW9ucyFcIjtcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGV0YWlscy50ZXh0Q29udGVudCA9XG4gICAgICBcIkl0IHdhcyBhIHN1Y2Nlc3MgZnJvbSB0aGUgc3RhcnQgYnV0IHF1aWNrbHkgYmVjYW1lIHNvbWV0aGluZyBldmVuIGJpZ2dlci4uLiBhIGdhbWUgY2hhbmdlci4gV2Ugc2F3IHdoYXQgd2FzIGhhcHBlbmluZyBhbmQgZ290IGV4Y2l0ZWQuIExldOKAmXMga2VlcCBnb2luZy4gU28gd2UgZGlzY292ZXJlZCBxdWlub2EgYW5kIGV4cGFuZGVkIHRoZSBtZW51IHRvIHNlcnZlIGEgZnVsbCBzZWxlY3Rpb24gb2YgaGlnaC1wcm90ZWluIHNhbGFkcywgd3JhcHMsIGFuZCBib3dscyBjdXN0b21pemFibGUgZm9yIGFsbCBkaWV0cy4gRXZlcnkgYm9keSBsb3ZlZCBpdC4gVGhlIGFsbC1kYXkgcG93ZXIgb2YgcHJvdGVpbiBncmV3IGluIHBvcHVsYXJpdHkuIFdlIGFsbCBzdGFydGVkIGVhdGluZywgZmVlbGluZyBhbmQgbW92aW5nIGJldHRlci4gSXTigJlzIGFsbCBnb29kLlwiO1xuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIGNvbnN0IHJlSW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBhZGRJbWFnZUNvbnRlbnQoKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRlbnQoKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgYWRkTmF2QmFyKCk7XG4gICAgYWRkSW1hZ2VDb250ZW50KCk7XG4gICAgZGVzY3JpcHRpb25Db250ZW50KCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gICAgYWRkSW1hZ2VDb250ZW50LFxuICAgIHJlSW5pdGlhbGl6ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxMYXlvdXQ7XG4iLCJpbXBvcnQgaW5pdGlhbExheW91dCBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCBCdXJnZXIgZnJvbSBcIi4vaW1hZ2VzL2J1cmdlci5qcGVnXCI7XG5pbXBvcnQgUGl6emEgZnJvbSBcIi4vaW1hZ2VzL3BpenphLmpwZWdcIjtcbmltcG9ydCBSb2xsIGZyb20gXCIuL2ltYWdlcy9yb2xsLmpwZWdcIjtcblxuY29uc3QgbWVudUxheW91dCA9ICgpID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc3RhcnRMYXlvdXQgPSBpbml0aWFsTGF5b3V0KCk7XG4gICAgcmVzdGFydExheW91dC5hZGRJbWFnZUNvbnRlbnQoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG1lbnVUaXRsZS5pZCA9IFwibWVudVRpdGxlXCI7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuXG4gICAgY29uc3QgbWVudURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVEaXNwbGF5LmlkID0gXCJtZW51RGlzcGxheVwiO1xuXG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkJ1cmdlclwiLFxuICAgICAgICBpbWFnZTogQnVyZ2VyLFxuICAgICAgICBwcmljZTogXCIkOS45OVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEb3VibGUgYmVlZiBwYXR0eSBidXJnZXIgd2l0aCBzZWFzZW1lIGJ1bnMhXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBpenphXCIsXG4gICAgICAgIGltYWdlOiBQaXp6YSxcbiAgICAgICAgcHJpY2U6IFwiJDE0Ljk5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsbCB0eXBlcyBvZiBtZWF0IGFuZCA0IGNoZWVzZXMgaW4gb25lIHBpenphIVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJSb2xsXCIsXG4gICAgICAgIGltYWdlOiBSb2xsLFxuICAgICAgICBwcmljZTogXCIkNC45OVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJZb3VyIGNsYXNzaWMgcm9sbCBjb250YWluaW5nIGNvdHRhZ2UgY2hlZXNlIVwiLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHNpbmdsZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2luZ2xlSXRlbS5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLWl0ZW1cIik7XG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgICAgY29uc3QgZm9vZEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBmb29kSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcblxuICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG4gICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICBzaW5nbGVJdGVtLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG4gICAgICBzaW5nbGVJdGVtLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICAgIHNpbmdsZUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICBtZW51RGlzcGxheS5hcHBlbmRDaGlsZChzaW5nbGVJdGVtKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpc3BsYXkpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUxheW91dDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBpbml0aWFsTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IG1lbnVMYXlvdXQgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNvbnRhY3RMYXlvdXQgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBzdGFydERpc3BsYXkgPSBpbml0aWFsTGF5b3V0KCk7XG5jb25zdCBtZW51RGlzcGxheSA9IG1lbnVMYXlvdXQoKTtcbmNvbnN0IGNvbnRhY3REaXNwbGF5ID0gY29udGFjdExheW91dCgpO1xuXG5zdGFydERpc3BsYXkucmVuZGVyKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRlbnRcIik7XG4gIG1haW5Db250ZW50LnJlbW92ZSgpO1xuICBtZW51RGlzcGxheS5yZW5kZXIoKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250ZW50XCIpO1xuICBtYWluQ29udGVudC5yZW1vdmUoKTtcbiAgY29udGFjdERpc3BsYXkucmVuZGVyKCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGVudFwiKTtcbiAgbWFpbkNvbnRlbnQucmVtb3ZlKCk7XG4gIHN0YXJ0RGlzcGxheS5yZUluaXRpYWxpemUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9