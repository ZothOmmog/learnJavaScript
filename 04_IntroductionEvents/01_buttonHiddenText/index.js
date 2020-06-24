import './index.scss';

const button = document.querySelector('.button');
const text = document.querySelector('.text');

button.onclick = () => {
    text.hidden = !text.hidden;
    button.textContent = !text.hidden ? 'Нажмите, чтобы спрятать текст' : 'Нажмите, чтобы oтобразить текст';
};