import './index.scss';

const menuTitle = document.querySelector('.menu__title');

menuTitle.addEventListener('click', (e) => {
    const menu = e.currentTarget.parentElement;
    menu.classList.toggle('menu_drop');
});