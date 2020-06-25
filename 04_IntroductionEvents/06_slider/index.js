import './index.scss';

const addScrollInSlider = (slider, scrollItems) => {
    const sliderButtons = {};
    const sliderBody = slider.querySelector('.slider__body');
    const sliderList = slider.querySelector('.slider__list');
    const sliderItem = sliderList.querySelector('.slider__item');

    for(let button of slider.querySelectorAll('.slider__button')) {
        sliderButtons[button.dataset.route] = button;
    }

    
    document.addEventListener('DOMContentLoaded', () => {
        const maxScroll = sliderBody.scrollWidth - sliderBody.offsetWidth;
        let isTransition = false;
        
        const scrollLeft = () => {
            if(isTransition) return;
            
            const left = +getComputedStyle(sliderList).transform.split(', ')[4] || 0;
            if(left === 0) return;
            
            const newLeft = left + sliderItem.offsetWidth * scrollItems;

            sliderList.style.transform = `translateX(${Math.min(newLeft, 0)}px)`;
            isTransition = true;
        }
    
        const scrollRight = () => {
            if(isTransition) return;
            
            const left = +getComputedStyle(sliderList).transform.split(', ')[4] || 0;
            if(left === -maxScroll) return;
            
            const newLeft = left - sliderItem.offsetWidth * scrollItems;
            
            sliderList.style.transform = `translateX(${Math.max(newLeft, -maxScroll)}px)`;
            isTransition = true;
        }

        sliderButtons.left.addEventListener('click', scrollLeft);
        sliderButtons.right.addEventListener('click', scrollRight);

        sliderList.addEventListener('transitionend', () => {
            isTransition = false;
        });
    });
    
}

const slider = document.querySelector('.slider');
addScrollInSlider(slider, 3);