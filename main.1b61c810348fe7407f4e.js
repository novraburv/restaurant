"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["main"],{

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/styles/contact.css":
/*!********************************!*\
  !*** ./src/styles/contact.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/styles/contact.css?");

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/styles/home.css?");

/***/ }),

/***/ "./src/styles/menu.css":
/*!*****************************!*\
  !*** ./src/styles/menu.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/styles/menu.css?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant/./src/styles/styles.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _scripts_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/render */ \"./src/scripts/render.js\");\n\n\n\n\n(function load() {\n\tconst app = document.querySelector('#app');\n\tconst r = (0,_scripts_render__WEBPACK_IMPORTED_MODULE_2__.render)();\n\n\tapp.append(...r);\n\n\treturn;\n})();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeContact)\n/* harmony export */ });\n/* harmony import */ var _styles_contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/contact.css */ \"./src/styles/contact.css\");\n/* harmony import */ var _images_jana_kunde_qr_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/jana-kunde-qr.png */ \"./src/images/jana-kunde-qr.png\");\n\n\n;\n\n\nfunction makeContact() {\n\tconst contact = {\n\t\tname: 'Jana Kunde',\n\t\taddress: '83412 Wintheiser Plaza Toledo, OH 43697',\n\t\tphone: '665-341-4125'\n\t}\n\n\tconst contactContainer = document.createElement('div');\n\tcontactContainer.classList.add('contact-container');\n\n\tconst qr = document.createElement('img');\n\tqr.setAttribute('src', _images_jana_kunde_qr_png__WEBPACK_IMPORTED_MODULE_1__);\n\tqr.setAttribute('alt', 'Representative Jana Kunde QR code');\n\n\tconst name = document.createElement('h2');\n\tname.textContent = contact.name;\n\n\tconst address = document.createElement('p');\n\taddress.textContent = contact.address;\n\n\tconst phone = document.createElement('p');\n\tphone.textContent = contact.phone;\n\n\tcontactContainer.append(qr, name, address, phone);\n\n\treturn contactContainer;\n}\n\n//# sourceURL=webpack://restaurant/./src/scripts/contact.js?");

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeHome)\n/* harmony export */ });\n/* harmony import */ var _images_hamburger_5630646_1920_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/hamburger-5630646_1920.jpg */ \"./src/images/hamburger-5630646_1920.jpg\");\n/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/home.css */ \"./src/styles/home.css\");\n\n\n;\n\n\nfunction makeHome() {\n        const heroContainer = document.createElement('div');\n        heroContainer.classList.add('hero-container');\n\n        // put copy text here\n        const heroTextContainer = document.createElement('div');\n        heroTextContainer.classList.add('hero-text-container');\n\n        const h1 = document.createElement('h1');\n        h1.textContent = 'Lorem ipsum dolor sit amet.';\n\n        const para = document.createElement('p');\n        para.textContent = \"I don't know what it means, but the burger here is the best one around the block.\";\n\n        const button = document.createElement('button');\n        button.textContent = 'Order Now';\n        button.classList.add('hero-cta');\n\n        heroTextContainer.append(h1, para, button);\n\n        // put hero image here\n        const heroImageContainer = document.createElement('div');\n        heroImageContainer.classList.add('hero-image-container');\n\n        const image = document.createElement('img');\n        image.setAttribute('src', _images_hamburger_5630646_1920_jpg__WEBPACK_IMPORTED_MODULE_0__);\n        image.classList.add('hero-image');\n\n        heroImageContainer.append(image);\n\n        heroContainer.append(heroTextContainer, heroImageContainer);\n\n        return heroContainer;\n}\n\n//# sourceURL=webpack://restaurant/./src/scripts/home.js?");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeMenu)\n/* harmony export */ });\n/* harmony import */ var _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/burger.jpg */ \"./src/images/burger.jpg\");\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/pizza.jpg */ \"./src/images/pizza.jpg\");\n/* harmony import */ var _images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/sandwich.jpg */ \"./src/images/sandwich.jpg\");\n/* harmony import */ var _images_friedchicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/friedchicken.jpg */ \"./src/images/friedchicken.jpg\");\n/* harmony import */ var _images_salad_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/salad.jpg */ \"./src/images/salad.jpg\");\n/* harmony import */ var _images_meatball_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/meatball.jpg */ \"./src/images/meatball.jpg\");\n/* harmony import */ var _styles_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/menu.css */ \"./src/styles/menu.css\");\n\n\n;\n\n\n\n\n\n\n\n\nfunction makeMenu() {\n\tconst menu = [];\n\tmenu.push(new Food('burger', 25, _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__));\n\tmenu.push(new Food('pizza', 15, _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__));\n\tmenu.push(new Food('sandwich', 22, _images_sandwich_jpg__WEBPACK_IMPORTED_MODULE_2__));\n\tmenu.push(new Food('fried chicken', 18, _images_friedchicken_jpg__WEBPACK_IMPORTED_MODULE_3__));\n\tmenu.push(new Food('salad', 12, _images_salad_jpg__WEBPACK_IMPORTED_MODULE_4__));\n\tmenu.push(new Food('meatball', 21, _images_meatball_jpg__WEBPACK_IMPORTED_MODULE_5__));\n\n\tconst foodsContainer = document.createElement('div');\n\tfoodsContainer.classList.add('foods-container');\n\n\tmenu.forEach(food => {\n\t\tconst card = document.createElement('div');\n\t\tcard.classList.add('card');\n\n\t\t// put image into its wrapper\n\t\tconst imageWrapper = document.createElement('div');\n\t\timageWrapper.classList.add('card-image-wrapper');\n\n\t\tconst image = document.createElement('img');\n\t\timage.classList.add('card-image');\n\t\timage.setAttribute('src', food.image);\n\t\timage.setAttribute('alt', `image of ${food.name}`);\n\n\t\timageWrapper.append(image);\n\n\t\t// put menu details into textWrapper\n\t\tconst textWrapper = document.createElement('div');\n\t\ttextWrapper.classList.add('card-text-wrapper');\n\n\t\tconst name = document.createElement('div');\n\t\tname.classList.add('card-name');\n\t\tname.textContent = String(food.name).toUpperCase();\n\n\t\tconst price = document.createElement('div');\n\t\tprice.classList.add('card-price');\n\t\tprice.textContent = `$ ${food.price}`;\n\n\t\ttextWrapper.append(name, price);\n\n\t\tcard.append(imageWrapper, textWrapper);\n\t\tfoodsContainer.append(card);\n\t})\n\n\treturn foodsContainer;\n}\n\nclass Food {\n\tconstructor(name, price, image) {\n\t\tthis.name = name;\n\t\tthis.price = price;\n\t\tthis.image = image;\n\t}\n}\n\n//# sourceURL=webpack://restaurant/./src/scripts/menu.js?");

/***/ }),

/***/ "./src/scripts/render.js":
/*!*******************************!*\
  !*** ./src/scripts/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/scripts/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/scripts/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/scripts/contact.js\");\n\n\n;\n\n\n\nfunction render() {\n\n    // create header\n    const header = document.createElement('header');\n    const nav = document.createElement('nav');\n    nav.classList.add('nav');\n    const ul = document.createElement('ul');\n    ul.classList.add('nav-list');\n\n    const tabs = ['home', 'menu', 'contact'];\n    tabs.forEach(tab => {\n        const li = document.createElement('li');\n        const a = document.createElement('a');\n        a.setAttribute('href', '#');\n        a.setAttribute('data-tab-name', tab);\n        a.classList.add('nav-link');\n        a.textContent = tab;\n        a.addEventListener('click', selectRender)\n\n        li.append(a);\n        ul.append(li);\n    });\n\n    nav.append(ul);\n    header.append(nav);\n\n    // create main section\n    const main = document.createElement('main');\n    const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    main.append(home);\n\n    // create footer\n    const footer = document.createElement('footer');\n    const year = new Date().getFullYear();\n    footer.textContent = `Company ${year}. All rights reserved.`;\n\n    return [header, main, footer];\n}\n\nfunction selectRender(e) {\n    const main = document.querySelector('main');\n    main.innerHTML = '';\n\n    if (e.target.dataset.tabName === 'home') {\n        const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        main.append(home);\n    }\n    if (e.target.dataset.tabName === 'menu') {\n        const menu = (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        main.append(menu);\n    }\n    if (e.target.dataset.tabName === 'contact') {\n        const contact = (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        main.append(contact);\n    }\n}\n\n//# sourceURL=webpack://restaurant/./src/scripts/render.js?");

/***/ }),

/***/ "./src/images/burger.jpg":
/*!*******************************!*\
  !*** ./src/images/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e536ef6d7d8dd6c02a81.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/burger.jpg?");

/***/ }),

/***/ "./src/images/friedchicken.jpg":
/*!*************************************!*\
  !*** ./src/images/friedchicken.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"52ab25f836bbfe4f8846.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/friedchicken.jpg?");

/***/ }),

/***/ "./src/images/hamburger-5630646_1920.jpg":
/*!***********************************************!*\
  !*** ./src/images/hamburger-5630646_1920.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"368016da916bda590909.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/hamburger-5630646_1920.jpg?");

/***/ }),

/***/ "./src/images/jana-kunde-qr.png":
/*!**************************************!*\
  !*** ./src/images/jana-kunde-qr.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3f51393360592777c6d3.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/jana-kunde-qr.png?");

/***/ }),

/***/ "./src/images/meatball.jpg":
/*!*********************************!*\
  !*** ./src/images/meatball.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4b4b719a895cb656602.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/meatball.jpg?");

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"34216005ee6510d62b31.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/pizza.jpg?");

/***/ }),

/***/ "./src/images/salad.jpg":
/*!******************************!*\
  !*** ./src/images/salad.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9243060de840fb749035.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/salad.jpg?");

/***/ }),

/***/ "./src/images/sandwich.jpg":
/*!*********************************!*\
  !*** ./src/images/sandwich.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e183529847042085b856.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/sandwich.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);