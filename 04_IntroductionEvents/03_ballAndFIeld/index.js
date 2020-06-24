import './index.scss';

const ball = document.querySelector('.ball');
const field = document.querySelector('.field');

field.onclick = (e) => {
    const fieldCoords = field.getBoundingClientRect();

    const minLeft = 0;
    const maxLeft = field.clientWidth - ball.clientWidth;
    const minTop = 0 + field.scrollTop;
    const maxTop = field.clientHeight - ball.clientHeight + field.scrollTop;

    const left = e.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2;
    const top = e.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 + field.scrollTop;

    ball.style.left = Math.min(Math.max(left, minLeft), maxLeft) + 'px';
    ball.style.top = Math.min(Math.max(top, minTop), maxTop) + 'px';

};