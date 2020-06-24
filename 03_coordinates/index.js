

const createMessage = ({ text, elem }) => {
    const message = document.createElement('div');

    message.textContent = text || 'Вы не ввели текст для сообщения';
    message.className = 'message';

    const elemRect = elem.getBoundingClientRect();
    const x = elemRect.left;
    const y = elemRect.bottom;

    message.style.top = y + pageYOffset + 'px';
    message.style.left = x + pageXOffset + 'px';

    elem.after(message);

    message.style.left = parseInt(message.style.left) - message.offsetWidth + 'px';

    return () => {
        message.style.transition = '0.5s';
        message.style.opacity = 0;

        setTimeout(() => {
            message.remove();
        }, 500);
    };
};

const button = document.querySelector('.button');

button.onclick = () => {
    const removeMessage = createMessage({
        text: 'Вы нажали на кнопку!',
        elem: button,
    });

    setTimeout(removeMessage, 500);
};

//Определение координат углов

const field = document.querySelector('.field');
const fieldRect = field.getBoundingClientRect();

const leftOutherCoord = {
    x: fieldRect.left,
    y: fieldRect.top,
};

const leftInnerCoord = {
    x: fieldRect.left + field.clientLeft,
    y: fieldRect.top + field.clientTop,
};

const rightOutherCoord = {
    x: fieldRect.right,
    y: fieldRect.bottom,
};

const rightInnerCoord = {
    x: fieldRect.left + field.clientLeft + field.clientWidth,
    y: fieldRect.top + field.clientTop + field.clientHeight,
};

console.log(`
    leftOutherCoord
    x:${leftOutherCoord.x}
    y:${leftOutherCoord.y}
    leftInnerCoord
    x:${leftInnerCoord.x}
    y:${leftInnerCoord.y}
    rightOutherCoord
    x:${rightOutherCoord.x}
    y:${rightOutherCoord.y}
    rightInnerCoord
    x:${rightInnerCoord.x}
    y:${rightInnerCoord.y}
`);

document.onclick = function (e) {
    // показывает координаты точки клика
    console.log(e.clientX + ':' + e.clientY);
};

/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top-in/top-out/right-in/right-out/bottom-in/bottom-out
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
    const anchorRect = anchor.getBoundingClientRect();
    elem.style.position = 'absolute';
    // anchor.after(elem);
    
    switch(position) {
        case 'top-in':
            elem.style.top = pageYOffset + anchorRect.top - elem.offsetHeight + 'px';
            elem.style.left = pageXOffset + anchorRect.left + 'px';
            break;
        case 'top-out':
            elem.style.top = pageYOffset + anchorRect.top + 'px';
            elem.style.left = pageXOffset + anchorRect.left + 'px';
            break;
        case 'right-in':
            elem.style.top = pageYOffset + anchorRect.top + 'px';
            elem.style.left = pageXOffset + anchorRect.right - elem.offsetWidth + 'px';
            break;
        case 'right-out':
            elem.style.top = pageYOffset + anchorRect.top + 'px';
            elem.style.left = pageXOffset + anchorRect.right + 'px';
            break;
        case 'bottom-in':
            elem.style.top = pageYOffset + anchorRect.bottom + 'px';
            elem.style.left = pageXOffset + anchorRect.left + 'px';
            break;
        case 'bottom-out':
            elem.style.top = pageYOffset + anchorRect.bottom - elem.offsetHeight + 'px';
            elem.style.left = pageXOffset + anchorRect.left + 'px';
            break;
    }
}

function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, 'top-out', 'note above out');
showNote(blockquote, 'top-in', 'note above in');
showNote(blockquote, 'right-out', 'note at the right out');
showNote(blockquote, 'right-in', 'note right in');
showNote(blockquote, 'bottom-out', 'note below out');
showNote(blockquote, 'bottom-in', 'note below in');
