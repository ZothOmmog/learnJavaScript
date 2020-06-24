const hiddenNotification = (timeHidden, notification) => {
    notification.style.transition = timeHidden + 'ms';
    notification.style.opacity = 0;
};

const showNotification = ({ html, className, timeShow, timeHidden, ...outherStyle }) => {
    const notification = document.createElement('div');

    notification.textContent = html || 'Base notification message';
    notification.classList.add('notification');
    if (className) notification.classList.add(className);
    if (outherStyle)
        for (key in outherStyle) {
            notification.style[key] = outherStyle[key];
        }

    document.body.append(notification);

    setTimeout(() => {
        hiddenNotification(timeHidden, notification);

        setTimeout(() => {
            notification.remove();
        }, timeHidden);
    }, timeShow);
};

const timeShow = 2000;
const timeHidden = 500;

(async () => {
    const timeDelay = timeShow + timeHidden;

    while (true) {
        showNotification({
            top: '10px',
            right: '10px',
            timeShow: timeShow,
            timeHidden: timeHidden
        });

        await new Promise((resolve) => {
            setTimeout(() => resolve(), timeDelay);
        });

        showNotification({
            top: '10px',
            right: '10px',
            html: 'Базовый стиль',
            timeShow: timeShow,
            timeHidden: timeHidden
        });

        await new Promise((resolve) => {
            setTimeout(() => resolve(), timeDelay);
        });

        showNotification({
            top: '10px',
            right: '10px',
            html: 'Стиль преветственного сообщения',
            className: 'welcome',
            timeShow: timeShow,
            timeHidden: timeHidden
        });

        await new Promise((resolve) => {
            setTimeout(() => resolve(), timeDelay);
        });
    }
})();
