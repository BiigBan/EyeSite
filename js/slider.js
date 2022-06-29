{/* <div class="slider">
<div class="slider-line">
    <div class="slider__body">
        <img src="img/slider/gradient-collage-metaverse-concepter.jpg" alt="">
    </div>
    <div class="slider__body">
        <img src="img/slider/gradient-collage-metaverse-concept.jpg" alt="">
    </div>
    <div class="slider__body">
        <img src="img/slider/medium-shot-woman-wearing-vr-glasses.jpg" alt="">
    </div>
</div>
</div>
<button class="slider-prev">Prev</button>
<button class="slider-next">Next</button> */}

const images = document.querySelectorAll('.slider .slider-line .slider__body img');
const sliderLine = document.querySelector('.slider-line');
const slider = document.querySelector('.slider');
const image = document.querySelector('.slider .slider-line .slider__body img');
let count = 0;
let width;
let lineWidth = 0;

// common width Slider
width = document.querySelector('.slider').offsetWidth;

// common style Slider-line
sliderLine.style.transform = 'translate(' + 0 + 'px)';

// width on all slides
images.forEach(el => {
    el.style.width = width + 'px';
})

// resize event
window.addEventListener('resize', (event) => {
    width = document.querySelector('.slider').offsetWidth;
    images.forEach(el => {
        el.style.width = width + 'px';
    })
    sliderLine.style.width = (images.length - 1) * width + 'px';
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
})
let prev = document.querySelector('.slider-prev');
let next = document.querySelector('.slider-next');
// button next
next.addEventListener('click', (e) => {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
})

//button prev
prev.addEventListener('click', (e) => {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
});

// active slides(circles)
const sliderCircleBody = document.createElement('div');
sliderCircleBody.classList.add('slider-circle__body');
let circle;
if (images.length > 0) {
    for (let i = 0; i < images.length; i++) {
        circle = document.createElement('div');
        circle.classList.add('slider-circle');
        sliderCircleBody.insertAdjacentElement('beforeend', circle);
        slider.after(sliderCircleBody);
    }
}
// default first active circle
sliderCircleBody.firstElementChild.classList.add('slider-circle_active');
// all function of circles 
document.querySelector('.slider-prev').addEventListener('click', (e) => {
    circlePrev();
})
document.querySelector('.slider-next').addEventListener('click', (e) => {
    circleNext();
})

function circlePrev() {
    sliderCircleBodyList = document.querySelectorAll('.slider-circle');
    if (count == images.length - 1) {
        sliderCircleBody.lastElementChild.classList.add('slider-circle_active')
        sliderCircleBodyList[0].classList.remove('slider-circle_active')
    } else if (count < images.length) {
        sliderCircleBodyList[count].classList.add('slider-circle_active')
        sliderCircleBodyList[count + 1].classList.remove('slider-circle_active')
    }
}
function circleNext() {
    sliderCircleBodyList = document.querySelectorAll('.slider-circle');
    if (count == 0) {
        sliderCircleBody.firstElementChild.classList.add('slider-circle_active')
        sliderCircleBody.lastElementChild.classList.remove('slider-circle_active')
    } else if (count < images.length) {
        sliderCircleBodyList[count].classList.add('slider-circle_active')
        sliderCircleBodyList[count - 1].classList.remove('slider-circle_active')
    }
}


// drag/touch swap

// let pressed = false;
// let startX;
// let dragX;
// let activeImageSlide = 0;

// slider.addEventListener('pointerdown', (e) => {
//     pressed = true;
//     translate = sliderLine.style.transform;
//     translateNum = [];
//     Array.from(translate).forEach(el => {
//         if (el == '-' || el == ',' || Number.isInteger(Number(el))) translateNum.push(el);
//     })
//     startX = (translateNum.join(''));
//     slider.style.cursor = 'grabbing';
//     console.log(e.clientX);
//     console.log(startX);
//     // console.log('loh');
// })
// slider.addEventListener('pointerenter', (e) => {
//     slider.style.cursor = 'grab'
// })
// slider.addEventListener('pointerup', (e) => {
//     slider.style.cursor = 'grab';
// })
// window.addEventListener('pointerup', () => {
//     pressed = false;
// })

// slider.addEventListener('pointermove', (e) => {
//     if (!pressed) return;
//     e.preventDefault();
//     dragX = e.clientX;
//     sliderLine.style.transform = `translate(${dragX - startX}px)`
// })
// ----------------------

/* keep track of user's mouse down and up */
// let isPressedDown = false;
/* x horizontal space of cursor from inner container */
// let cursorXSpace;
// sliderLine.addEventListener("mousedown", (e) => {
//     translate = sliderLine.style.transform;
//     translateNum = [];
//     Array.from(translate).forEach(el => {
//         if (el == '-' || el == ',' || Number.isInteger(Number(el))) translateNum.push(el);
//     })
//     startX = +(translateNum.join(''));
//     // isPressedDown = true;
//     cursorXSpace = e.offsetX - startX;
//     sliderLine.style.cursor = "grabbing";
//     sliderLine.addEventListener("mousemove", grabbing);
// });

// slider.addEventListener("mouseup", grabUp);
// window.addEventListener("mouseup", grabUp);
// function grabUp() {
//     // isPressedDown = false;
//     sliderLine.style.cursor = "grab";
//     sliderLine.removeEventListener("mousemove", grabbing);
// }
// function grabbing(e) {
//     // if (!isPressedDown) return;
//     console.log(e.offsetX);
//     let activeImageSlider = 0;
//     e.preventDefault();
//     sliderLine.style.transform = `translate(${e.offsetX - cursorXSpace}px)`;
//     console.log(cursorXSpace + 'cursor');
//     console.log(e.offsetX);
//     let translateMove = sliderLine.style.transform;
//     let translateMoveNum = [];
//     Array.from(translateMove).forEach(el => {
//         if (el == '-' || el == ',' || Number.isInteger(Number(el))) translateMoveNum.push(el);
//     })
//     let activeCursor = +(translateMoveNum.join(''));
//     console.log(activeCursor);
//     // if (activeCursor <= ((-width * count) + -150)) {
//     //     count++;
//     //     activeImageSlider = activeImageSlider + 1;
//     //     sliderLine.style.transform = `translate(-${width * activeImageSlider}px)`;
//     //     e.preventDefault();
//     //     grabUp();
//     // }
//     if (activeCursor >= 150){
//         sliderLine.style.transform = `translate(-${0}px)`;
//     } 
//     if (activeCursor <= (-width * (images.length -1)) + -150) {
//         sliderLine.style.transform = `translate(-${width * (images.length -1)}px)`;
//     }
//     if(activeCursor <= ((-width * count) + -150)) {
//         activeImageSlider++;
//         sliderLine.style.transform = `translate(-${width * activeImageSlider}px)`;
//         grabUp();
//         e.preventDefault();
//     }
//     count = activeImageSlider;
// }

// // function boundCards() {
// //     const slider_rect = slider.getBoundingClientRect();
// //     const sliderLine_rect = sliderLine.getBoundingClientRect();

// //     if (parseInt(startX) > 0) {
// //         startX = 0;
// //     } else if (sliderLine_rect.right < slider_rect.right) {
// //         sliderLine.style.transform = `translate(-${sliderLine_rect.width - slider_rect.width}px)`;
// //     }
// // }