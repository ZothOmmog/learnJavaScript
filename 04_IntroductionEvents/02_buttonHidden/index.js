import './index.scss';

const button = document.querySelector('.buttonHidden');

button.onclick = () => {
    button.hidden = true;
};