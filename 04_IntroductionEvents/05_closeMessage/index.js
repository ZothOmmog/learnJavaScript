import './index.scss';

for (let pane of document.querySelectorAll('.pane')) {
    const removeButton = document.createElement('button');
    removeButton.textContent = '[x]';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => pane.remove());

    pane.prepend(removeButton);
}
