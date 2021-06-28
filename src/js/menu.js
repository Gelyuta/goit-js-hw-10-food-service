import menu from '../menu.json';
import cardsTpl from '../templates/menu.hbs'


// Меню

const menuEl = document.querySelector('ul.js-menu');

const createMenuMarkup = cardsTpl(menu);

menuEl.insertAdjacentHTML('beforeend', createMenuMarkup);

