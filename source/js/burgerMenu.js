const burgerButton = document.querySelector('.navigation__button');
const navigationMenuLinks = document.querySelector('.menu-links__list');
const header = document.querySelector('.header');
const menulist = document.querySelector('.menu-links__list');

function initBurgerMenu () {
    header.classList.remove('nojs__header')
    burgerButton.classList.remove('nojs__burger-button');
    navigationMenuLinks.classList.remove('nojs__menu');
}

function doBurgerMenu () {
    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('navigation__button--close')
        burgerButton.classList.toggle('navigation__button--open')
        menulist.classList.toggle('menu-links__list--close')
        menulist.classList.toggle('menu-links__list--open')
    })
}
export default function burgerMenu () {
    initBurgerMenu();
    doBurgerMenu();
}