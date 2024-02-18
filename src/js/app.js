//  ?-- menu --
const menuToggeler = document.querySelector(".meun__toggeler");
const headerMenu = document.querySelector(".header__menu");
const menuLink = document.querySelector(".menu__link");

menuToggeler.addEventListener("click", (e) => {
	menuLink.classList.toggle("menu__link-active");
	headerMenu.classList.toggle("header__menu-active");
});

const menuBtnImage1 = document.querySelector(".menu-btn-img-1");
const menuBtnImage2 = document.querySelector(".menu-btn-img-2");

menuToggeler.addEventListener("click", (e) => {
	menuBtnImage1.classList.toggle("menu-btn-img-open");
	menuBtnImage2.classList.toggle("menu-btn-img-close");
});
//  ?-- menu --

//  ?-- logged --
const loggedToggeler = document.querySelector(".header__logged");
const headerLogged = document.querySelector(".header__logged");
const loggedLink = document.querySelector(".logged__link");
loggedToggeler.addEventListener("click", (e) => {
	loggedLink.classList.toggle("logged__link-active");
	headerLogged.classList.toggle("header__logged-active");
});
//  ?-- logged --

// ?-- FAQ Box --
const faqBoxItem1 = document.querySelector(".FAQ-box__item-1");
const faqBoxItem2 = document.querySelector(".FAQ-box__item-2");
const faqBoxItem3 = document.querySelector(".FAQ-box__item-3");
const faqBoxItem4 = document.querySelector(".FAQ-box__item-4");
const faqBoxItem5 = document.querySelector(".FAQ-box__item-5");
const faqBoxItem6 = document.querySelector(".FAQ-box__item-6");
const faqBoxItem7 = document.querySelector(".FAQ-box__item-7");

const faqSubset1 = document.querySelector(".FAQ-box__subset-1");
const faqSubset2 = document.querySelector(".FAQ-box__subset-2");
const faqSubset3 = document.querySelector(".FAQ-box__subset-3");
const faqSubset4 = document.querySelector(".FAQ-box__subset-4");
const faqSubset5 = document.querySelector(".FAQ-box__subset-5");
const faqSubset6 = document.querySelector(".FAQ-box__subset-6");
const faqSubset7 = document.querySelector(".FAQ-box__subset-7");

faqBoxItem1.addEventListener("click", (e) => {
	faqBoxItem1.classList.toggle("FAQ-box__item-1-open");
	faqSubset1.classList.toggle("FAQ-box__subset-1-open");
});
faqBoxItem2.addEventListener("click", (e) => {
	faqBoxItem2.classList.toggle("FAQ-box__item-2-open");
	faqSubset2.classList.toggle("FAQ-box__subset-2-open");
});
faqBoxItem3.addEventListener("click", (e) => {
	faqBoxItem3.classList.toggle("FAQ-box__item-3-open");
	faqSubset3.classList.toggle("FAQ-box__subset-3-open");
});
faqBoxItem4.addEventListener("click", (e) => {
	faqBoxItem4.classList.toggle("FAQ-box__item-4-open");
	faqSubset4.classList.toggle("FAQ-box__subset-4-open");
});
faqBoxItem5.addEventListener("click", (e) => {
	faqBoxItem5.classList.toggle("FAQ-box__item-5-open");
	faqSubset5.classList.toggle("FAQ-box__subset-5-open");
});
faqBoxItem6.addEventListener("click", (e) => {
	faqBoxItem6.classList.toggle("FAQ-box__item-6-open");
	faqSubset6.classList.toggle("FAQ-box__subset-6-open");
});
faqBoxItem7.addEventListener("click", (e) => {
	faqBoxItem7.classList.toggle("FAQ-box__item-7-open");
	faqSubset7.classList.toggle("FAQ-box__subset-7-open");
});
// ?-- FAQ Box --
