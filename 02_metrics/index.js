const example = document.querySelector('.example');
const metrics = document.createElement('div');

metrics.className = 'metrics';

const metricsData = {
    Geometry: [
        'offsetWidth', 'offsetHeight', 'clientLeft',
        'clientTop', 'clientWidth', 'clientHeight', 'scrollHeight'
    ],
    Scroll: [ 'scrollLeft', 'scrollTop' ],
    OffsetParent: [ 'offsetParent', 'offsetLeft',  'offsetTop' ]
}

for(let keyMetricsGroup in metricsData) {
    const metricsGroup = document.createElement('div');
    const metricGroupTitle = document.createElement('h3');
    
    metricsGroup.className = 'metrics-group';
    metricGroupTitle.textContent = keyMetricsGroup;
    metricGroupTitle.className = 'metrics-group__title';

    metricsGroup.append(metricGroupTitle);
    
    metricsData[keyMetricsGroup].forEach(keyMetric => {
        const metric = document.createElement('div');
        const metricTitle = document.createElement('span');
        const metricData = document.createElement('span');

        metricTitle.textContent = keyMetric;
        metricTitle.className = 'metric-title';
        metricData.dataset.metricName = keyMetric;

        metric.append(metricTitle, metricData);
        metricsGroup.append(metric);
    });

    metrics.append(metricsGroup);
}

example.after(metrics);

//ScrollBottom

const scrollBottom = document.createElement('div');
const scrollBottomTitle = document.createElement('span');
const scrollBottomData = document.createElement('span');

scrollBottomTitle.textContent = 'scrollBottom:';
scrollBottomData.textContent = example.scrollHeight - example.scrollTop - example.offsetHeight;

scrollBottom.append(scrollBottomTitle, scrollBottomData);

example.after(scrollBottom);

//scrollBar

const scrollBar = document.createElement('div');
const scrollBarTitle = document.createElement('span');
const scrollBarData = document.createElement('span');

scrollBarTitle.textContent = 'scrollBar:';
scrollBarData.textContent = example.offsetWidth - example.clientWidth - parseInt(getComputedStyle(example).borderRightWidth) - parseInt(getComputedStyle(example).borderLeftWidth);

scrollBar.append(scrollBarTitle, scrollBarData);

example.after(scrollBar);

setInterval(() => {
    for(elem of metrics.querySelectorAll('[data-metric-name]')) {
        const metricData = String(example[elem.dataset.metricName]) || 'параметра нет';
        
        if(elem.textContent !== metricData) {
            elem.textContent = example[elem.dataset.metricName];
        }
    }

    scrollBottomData.textContent = example.scrollHeight - example.scrollTop - example.clientHeight;
}, 10);

//Центрирование мячика

const ball = document.querySelector('.ball');
const field = document.querySelector('.field');

ball.style.top = (field.clientHeight / 2) - (ball.offsetHeight / 2) + 'px';
ball.style.left = (field.clientWidth / 2) - (ball.offsetWidth / 2) + 'px';