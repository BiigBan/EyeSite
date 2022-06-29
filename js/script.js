// POPUPS

const popupLinks = document.querySelectorAll('.popup-link');
const html = document.documentElement;
const body = document.body;
let popupExit;
let popupElem;
let idItem;
let idItemWithoutNum;

// let containerWidth = [];
// Array.from(getComputedStyle(document.querySelector('.container')).maxWidth).forEach(el => {
//     if (Number.isInteger(+el)) {
//         containerWidth.push(el);
//     }
// })
// containerWidth = +containerWidth.join('');
// let diffWidthWindow = window.innerWidth - document.querySelector('.wrapper').offsetWidth + containerWidth + 'px';

window.addEventListener('click', (e) => {
    let popupLink = e.target.closest('.popup-link');
    try {
    for (let i = 0; i < popupLinks.length; i++) {
        if (popupLink.getAttribute('href') == popupLinks[i].getAttribute('href')) {
            console.log(popupLink);
            let cacheIdItem = idItem;
            idItem = popupLink.getAttribute('href').replace('#', '');
            console.log(idItem);
            try {
                if (cacheIdItem != idItem) {
                    popupElem.classList.remove(`${idItemWithoutNum}_active`)
                }
            } catch (error) { }
            idItemWithoutNum = idItem.split('_').shift();
            popupElem = document.querySelector(`#${idItem}`);
            e.preventDefault();
            console.log(popupElem);
        }
    }
} catch (error) {
        
}
    try {
        setTimeout(() => {
            if (popupLink.matches(`.${idItem}` + '-link')) {
                console.log('t');
                popupElem.classList.add(`${idItemWithoutNum}_active`);
                body.classList.add('body_block');
            }
        }, 300);
    } catch (error) { }
})

html.addEventListener('click', e => {
    setTimeout(() => {
        try {
            if (popupElem.matches(`.${idItemWithoutNum}_active`)) {
                console.log(e.target.closest(`.${idItemWithoutNum}__content`));
                if (!e.target.closest(`.${idItemWithoutNum}__content`) || e.target.closest('.popup__exit')) {
                    popupElem.classList.remove(`${idItemWithoutNum}_active`)
                    body.classList.remove('body_block');
                }
            }
        } catch (error) { }
    }, 300);
})
document.querySelectorAll('.popup__exit').forEach(el => el.addEventListener('click', e => e.preventDefault()));

// AMBULANCE

const ambulance = document.querySelector('.header__ambulances__body');
let ambulanceRegion = document.querySelector('.header__ambulances__region');
let ambulanceArrow = document.querySelector('.header__ambulances__arrow')
// часто срабатывает на скрытый элемент, а не на главную кнопку
// -----

window.addEventListener('click', ambulanceFun);

let isActiveAmbulance = false;

function ambulanceFun(e) {
    if (e.target.closest('.header__ambulances') && isActiveAmbulance === false) {
        ambulance.classList.toggle('header__ambulances__body_active');
        ambulanceArrow.classList.toggle('arrow_active')
        ambulanceRegion.style.maxHeight = ambulanceRegion.scrollHeight + 'px';
        isActiveAmbulance = !isActiveAmbulance;
    } else if (e.target.closest('.header__ambulances__region')) {
    } else if (!e.target.closest('.header__ambulances__region') || e.target.closest('.header__ambulances')) {
        ambulance.classList.remove('header__ambulances__body_active');
        ambulanceArrow.classList.remove('arrow_active')
        ambulanceRegion.removeAttribute('style');
        isActiveAmbulance = !isActiveAmbulance;
    }
}


let headerSearchField = document.querySelector('.header__search-field');
let isActiveSearch = false;
const searchIcon = document.querySelector('.header__search__image');
searchIcon.addEventListener('click', searchIconFun);

function searchIconFun(e) {
    if (isActiveSearch == false) {
        headerSearchField.style.width = 476 + 'px';
        isActiveSearch = !isActiveSearch;
    } else {
        headerSearchField.removeAttribute("style");
        isActiveSearch = !isActiveSearch;
    }
}

let servicesInfo = document.querySelector('.header__bottom__link__more-info');

let linkArrow = document.querySelector('.header__bottom__link__arrow')
let isActiveServices = false;

window.addEventListener('click', servicesFun);
function servicesFun(e) {
    let info = document.querySelector('.header__bottom__link__more-info__bg');
    let triangle = document.querySelector('.header__bottom__link__triangle');
    if (e.target.closest('.header__bottom__link__more-info') && isActiveServices === false) {
        triangle.classList.add('header__bottom__link__triangle_active');
        info.classList.add('header__bottom__link__more-info__bg_active');
        linkArrow.classList.add('arrow_active');
        isActiveServices = !isActiveServices;
    } else if (e.target.closest('.header__bottom__link__more-info__bg')) {
    } else if (!e.target.closest('.header__bottom__link__more-info__bg') || e.target.closest('.header__bottom__link__more-info')) {
        triangle.classList.remove('header__bottom__link__triangle_active');
        info.classList.remove('header__bottom__link__more-info__bg_active');
        linkArrow.classList.remove('arrow_active');
        isActiveServices = !isActiveServices;
    }
}

// function searchPhoneIconFun(e) {
//     let searchPhones = document.querySelector('.header__search__phones');
//     if (e.target.closest('.header__search__image')) {
//         searchPhones.classList.toggle('header__search__phones_active');
//     } else if (e.target.closest('.header__search__phones')) {
//     } else if (e.target.closest('.header__search__phones__link') || !e.target.closest('.header__search__phones')) {
//         searchPhones.classList.remove('header__search__phones_active');
//     }
// }


// SLIDER

const images = document.querySelectorAll('.slider__body');
const sliderLine = document.querySelector('.slider-line');
const slider = document.querySelector('.slider');
let count = 0;
let width;
let lineWidth = 0;

// common width Slider
width = document.querySelector('.slider').offsetWidth;

// common style Slider-line
sliderLine.style.transform = 'translate(' + 0 + 'px)';
sliderLine.style.width = (images.length) * width + 'px';

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
    sliderLine.style.width = (images.length) * width + 'px';
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

    // resize doctor sldier

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
const sliderCircleBody = document.querySelector('.slider-circle__body');
sliderCircleBody.classList.add('slider-circle__body');
let circle;
if (images.length > 0) {
    for (let i = 0; i < images.length; i++) {
        circle = document.createElement('div');
        circle.classList.add('slider-circle');
        sliderCircleBody.insertAdjacentElement('beforeend', circle);
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

//clone circle
let circleBody = document.querySelector('.slider-circle__body');
circleBody.style.marginLeft = ((document.body.offsetWidth - document.querySelector('.slider').offsetWidth) / 2) + 'px';

// -----------------------------------

// 2 Как лучше сделать, добавить прослушку на resize или так и оставить с ограничением на ширину
// 2 Просто при изменении шририны - приъодиться обновлять страницу, а это плохо

// WIDTH 1260
if (document.body.offsetWidth <= 1260) {
    let menuPhonesRow = document.querySelector('.menu__phones__row');
    let menuPhones = document.querySelector('.menu__phones');
    let ambulancesHeader = document.querySelector('.header__ambulances');
    let search = document.querySelector('.header__search');
    let menuBody = document.createElement('div');
    let headerInfo = document.querySelector('.header__info');
    let arrowBurger = document.querySelector('.header__bottom__link__arrow');
    let servicesLink = document.querySelector('.header__bottom__link');
    let shopBtn = document.querySelector('.header__shop').cloneNode(true);
    let headerNav = document.querySelector('.header__bottom__nav');
    let onlineServiceBtn = document.querySelector('.header__main__btn').cloneNode(true);
    let infoTime = document.querySelector('.header__main__time').cloneNode(true);
    let headerSocialMedia = document.querySelector('.header__main__social-media').cloneNode(true);

    menuBody.style.display = 'flex';
    search.style.marginLeft = 50 + 'px';
    menuBody.append(ambulancesHeader);
    menuBody.append(search);
    menuPhonesRow.append(menuBody);
    servicesLink.style.maxHeight = document.querySelector('.header__bottom__link').scrollWidth + 10 + 'px';
    arrowBurger.classList.add('arrow_phones')
    ambulance.classList.remove('header__ambulances__body_active');
    searchIcon.removeEventListener('click', searchIconFun);
    window.addEventListener('click', searchPhoneIconFun);
    let burgerSocialMedia = document.createElement('div');
    burgerSocialMedia.classList.add('burger__social__media')


    burgerSocialMedia.append(infoTime);
    burgerSocialMedia.append(headerSocialMedia);

    headerNav.append(shopBtn);
    headerNav.append(onlineServiceBtn);
    headerNav.append(burgerSocialMedia);

    headerInfo.remove();
    document.querySelector('.header__main__btn').remove();
    document.querySelector('.header__main__time').remove();
    document.querySelector('.header__main__social-media').remove();
    servicesInfo.removeEventListener('click', servicesFun);
    servicesInfo.addEventListener('click', servicesPhoneFun);

    // PHONE SIRCLE

    //4
    window.addEventListener('click', e => {
        if (e.target.closest('.slider-next__phone__slider')) {
            count++;
            if (count >= images.length) {
                count = 0;
            }
            sliderLine.style.transform = 'translate(-' + count * width + 'px)';
            sliderCircleBodyList = document.querySelectorAll('.slider-circle');
            if (count == 0) {
                sliderCircleBody.firstElementChild.classList.add('slider-circle_active')
                sliderCircleBody.lastElementChild.classList.remove('slider-circle_active')
            } else if (count < images.length) {
                sliderCircleBodyList[count].classList.add('slider-circle_active')
                sliderCircleBodyList[count - 1].classList.remove('slider-circle_active')
            }
        }
    })

    //4
    // BURGER
    let burger = document.querySelector('.menu__burger');
    let burgerMenu = document.querySelector('.header__bottom_phones');

    burger.addEventListener('click', burgerFun);


    burgerMenu.style.maxHeight = 0 + 'px';
    burgerMenu.style.transition = '0.5s';
    let isActiveBurger = false;
    function burgerFun(e) {
        burger.classList.toggle('menu__burger_active');
        if (isActiveBurger === false) {
            burgerMenu.style.maxHeight = burgerMenu.scrollHeight + 'px';
            isActiveBurger = !isActiveBurger;
            document.body.style.overflow = 'hidden';
        } else {
            burgerMenu.style.maxHeight = 0;
            isActiveBurger = !isActiveBurger;
            document.body.style.overflow = 'auto';
        }
    }
    // --------------------

    // NIGHT INFO 

    let nightItems = document.querySelectorAll('.night__item');
    let nightInfoPhone = document.querySelector('.night__info__phone');
    let nightItemCurrent;
    let nightInfo;

    window.addEventListener('click', nightFun);
    function nightFun(event) {
        if (event.target.closest('.night__item')) {
            nightItems.forEach(el => {
                if (event.target.closest('.night__item') == el) nightItemCurrent = el.cloneNode(true);
            })
            let cache;
            cache = nightItemCurrent.children;
            Array.from(cache).forEach(el => {
                if (el.matches('.night__info')) nightInfo = el;
            })
            nightInfo.style.textAlign = 'center'
            if (nightInfoPhone.children.length == 0) {
                nightInfo.style.display = 'block'
                nightInfoPhone.append(nightInfo);
                nightInfoPhone.style.height = 'auto';
            } else {
                nightInfoPhone.firstElementChild.remove();
                nightInfo.style.display = 'block'
                nightInfoPhone.append(nightInfo);
                nightInfoPhone.style.height = 'auto';
            }
        }
    }
}

// WIDTH 992

if (document.body.offsetWidth <= 992) {
    let sliderLeftTexts = document.querySelectorAll('.slider__text');
    sliderLeftTexts.forEach(el => el.remove())

    let activeSlider = 0;
    let sliderLeftBodys = document.querySelectorAll('.slider__left__body');
    let sliderRightInfos = document.querySelectorAll('.slider__items');
    sliderLeftBodys.forEach(el => {
        el.firstElementChild.after(sliderRightInfos[activeSlider]);
        activeSlider++;
    })
}


function servicesPhoneFun(e) {
    let info = document.querySelector('.header__bottom__link__more-info__bg');
    try {
    arrowFun(e);
    }
    catch (error) {
    }
    if (!info.matches('.header__bottom__link__more-info__bg_active')) {
        console.log('true');
        info.classList.toggle('header__bottom__link__more-info__bg_active');
        info.style.maxHeight = info.scrollHeight + 'px';
    } else {
        info.classList.remove('header__bottom__link__more-info__bg_active');
        info.style.maxHeight = 0 + 'px';

    }

}

function searchPhoneIconFun(e) {
    let searchPhones = document.querySelector('.header__search__phones');
    if (e.target.closest('.header__search__image')) {
        searchPhones.classList.toggle('header__search__phones_active');
    } else if (e.target.closest('.header__search__phones')) {
    } else if (e.target.closest('.header__search__phones__link') || !e.target.closest('.header__search__phones')) {
        searchPhones.classList.remove('header__search__phones_active');
    }
}

// --------------------------SLIDER SERVICE

let serviceArrow = document.querySelector('.bottom-slider__next');

let itemWidth = document.querySelector('.service__cards-bottom__item').offsetWidth;
let item = document.querySelector('.service__cards-bottom__item');
let serviceLine = document.querySelector('.service__cards-bottom-line');
let margin = window.getComputedStyle(item).margin;
margin = +((margin.split(' '))[1]).replace('px', '');
let widthItemMargin = 0;

serviceArrow.addEventListener('click', serviceArrowFun);
function serviceArrowFun(event) {
    widthItemMargin += itemWidth + margin
    console.log(widthItemMargin);
    serviceLine.style.transform = `translate(-${widthItemMargin}px)`;
    serviceLine.style.transition = '0.3s';

    let firstItem = serviceLine.firstElementChild.cloneNode(true);
    let secondItem = serviceLine.firstElementChild.nextElementSibling.cloneNode(true);
    let thirdItem = serviceLine.firstElementChild.nextElementSibling.nextElementSibling.cloneNode(true);

    serviceLine.append(firstItem);
    serviceLine.append(secondItem);
    serviceLine.append(thirdItem);
}

// ---------------------------------------
//! SLIDER CARDS
const doctorSliderLine = document.querySelector('.doctor__slider-line');
let doctorButtons = document.querySelectorAll('.doctor__slider_bg');
let itemDoctor = document.querySelector('.doctor__slider__item');
let itemsDoctor = document.querySelectorAll('.doctor__slider__item')
let countDoctor = 0;
let index = 0;

let activeNum = document.querySelectorAll('.doctor__num-active-span');

let doctorCards = document.querySelectorAll('.doctor__card');
doctorCards.forEach(el => {
    el.style.display = 'none';
})
doctorCards[index].style.display = 'block';

window.addEventListener('click', doctorSliderFun)

function doctorSliderFun(event) {
    let itemWidth = document.querySelector('.doctor__slider__item').offsetWidth;
    let margin = 0;
    if (document.body.offsetWidth > 992) {
        if (event.target.closest('.doctor__slider_bg')) {
            let parent = event.target.closest('.doctor__slider_bg');
            let lineHeight = doctorSliderLine.offsetHeight;
            let itemHeight = document.querySelector('.doctor__slider__item').offsetHeight;
            margin = 15;
            doctorSliderLine.style.transition = '0.5s';
            if (parent.firstElementChild.matches('.doctor__slider-next')) {
                if (countDoctor == 0) {
                    doctorSliderLine.style.transform = `translate(0, -${(itemHeight + margin) * (itemsDoctor.length - 3)}px)`;
                    countDoctor = (itemsDoctor.length - 3);
                } else {
                    countDoctor--;
                    doctorSliderLine.style.transform = `translate(0, -${(itemHeight + margin) * countDoctor}px)`;
                }
            }
            else if (parent.firstElementChild.matches('.doctor__slider-prev')) {
                if (countDoctor == itemsDoctor.length - 3) {
                    doctorSliderLine.style.transform = `translate(0, -${(itemHeight + margin) * 0}px)`;
                    countDoctor = 0;
                } else {
                    countDoctor++;
                    doctorSliderLine.style.transform = `translate(0, -${(itemHeight + margin) * countDoctor}px)`;
                }
            }
        }
        window.addEventListener('resize', (event) => {
            if (doctorSliderLine.offsetWidth > 600) {
                doctorSliderLine.style.transform = 'translate(0px)';
                countDoctor = 0;
            }
        })
    } else {
        if (event.target.closest('.doctor__slider_bg')) {
            let parent = event.target.closest('.doctor__slider_bg');
            margin = 26;
            doctorSliderLine.style.transition = '0.5s';
            if (parent.firstElementChild.matches('.doctor__slider-next')) {
                if (countDoctor == 0) {
                    doctorSliderLine.style.transform = `translate(-${(itemWidth + margin) * (itemsDoctor.length - 3)}px)`;
                    countDoctor = (itemsDoctor.length - 3);
                } else {
                    countDoctor--;
                    doctorSliderLine.style.transform = `translate(-${(itemWidth + margin) * countDoctor}px)`;
                }
            }
            else if (parent.firstElementChild.matches('.doctor__slider-prev')) {
                if (countDoctor == itemsDoctor.length - 3) {
                    doctorSliderLine.style.transform = `translate(-${(itemWidth + margin) * 0}px)`;
                    countDoctor = 0;
                } else {
                    countDoctor++;
                    doctorSliderLine.style.transform = `translate(-${(itemWidth + margin) * countDoctor}px)`;
                }
            }
        }
        // window.addEventListener('resize', (event) => {
        //     doctorSliderLine.style.transform = 'translate(0px)';
        //         countDoctor = 0;
        // })
    }
    if (event.target.closest('.doctor__slider__item')) {
        let activeItem = event.target.closest('.doctor__slider__item');
        itemsDoctor.forEach((el, i) => {
            if (el == activeItem) {
                index = i;
            }
        })
        doctorCards.forEach(el => {
            el.style.display = 'none';
            el.style.opacity = '0';
        })
        doctorCards[index].style.display = 'block';
        doctorCards[index].style.opacity = '1';
        activeNum.forEach(el => {
            el.textContent = `${index + 1}`;
            console.log(el.textContent = `${index + 1}`);
        })
    }
}

//CHANGE CARDS



//FORM SELECT

let select = document.querySelectorAll('.select');
let selectBodyAll = document.querySelectorAll('.select__body');
let itemBody = document.querySelectorAll('.item__body');
let selectCurrent = document.querySelectorAll('.select__current');
let selectHeader = document.querySelectorAll('.select__header');
let selectTechForm = document.querySelectorAll('.select__tech');
let selectArrowAll = document.querySelectorAll('.select__arrow');

window.addEventListener('resize', selectFun);
window.addEventListener('click', selectFunClick);

let selectAllCurrent;
let itemBodyCurrent;
let selectBodyCurrent;
let selectHeaderCurrent;
let selectCurrentCurrent;
let selectTechFormCurrent;
let selectArrowCurrent;

// selectBody.style.width = select.offsetWidth + 'px';
function selectFun(event) {
    try {
    itemBodyCurrent.classList.remove('item__body_active');
    selectHeaderCurrent.classList.remove('select__header_focus');
    selectBodyCurrent.classList.remove('select__body_active');
} catch (error) {
        
}
}

//2 НЕРАБОАТЕТ ФОРМА ИЗ-ЗА ОШИБОК И TRY CATCH
function selectFunClick(event) {
    // if(evet.target.closest('.'))
    if(event.target.closest('.select')){
        try {
        select.forEach(el => {
            if(event.target.closest('.select') == el) selectAllCurrent = el;
        })
        selectBodyAll.forEach(el => {
            if (event.target.closest('.select__header').nextElementSibling == el) selectBodyCurrent = el;
        })
        itemBody.forEach(el => {
            if (event.target.closest('.select__header').nextElementSibling.firstElementChild == el) itemBodyCurrent = el;
        })
        selectCurrent.forEach(el => {
            if (event.target.closest('.select__header').firstElementChild == el) selectCurrentCurrent = el;
        })
        selectHeader.forEach(el => {
            if (event.target.closest('.select__header') == el) selectHeaderCurrent = el;
        })
        selectTechForm.forEach(el => {
            if (event.target.closest('.select').nextElementSibling == el) selectTechFormCurrent = el;
        })
        selectArrowAll.forEach(el => {
            if (event.target.closest('.select__header').lastElementChild == el) selectArrowCurrent = el;
        })
    } catch (error) {
    }
    }
        // selectBodyCurrent.style.width = select.offsetWidth + 'px';

try {
        if (event.target.closest('.select__header')) {
            let widthSelect = selectAllCurrent.offsetWidth;
            selectBodyCurrent.style.width = widthSelect + 'px';

            itemBodyCurrent.classList.toggle('item__body_active');
            selectHeaderCurrent.classList.toggle('select__header_focus');
            selectBodyCurrent.classList.toggle('select__body_active');
            
            selectArrowCurrent.classList.toggle('arrow_active');
        } else if (event.target.closest('.select__item span')) {
            itemBodyCurrent.classList.remove('item__body_active');
            selectHeaderCurrent.classList.remove('select__header_focus');
            selectBodyCurrent.classList.remove('select__body_active');

            selectArrowCurrent.classList.remove('arrow_active');
        } else if (!event.target.closest('.select__body')) {
            itemBodyCurrent.classList.remove('item__body_active');
            selectHeaderCurrent.classList.remove('select__header_focus');
            selectBodyCurrent.classList.remove('select__body_active');

            selectArrowCurrent.classList.remove('arrow_active');
        }
        if (event.target.closest('.select__item span')) {
            let item = event.target.closest('.select__item').textContent;
            selectCurrentCurrent.textContent = item;
            selectCurrentCurrent.style.color = '#1B1D32';
            selectTechFormCurrent.firstElementChild.setAttribute('value', item);
        }
            
} catch (error) {
    
}
}

// AMBULANCE BUTTONS

let ambulanceButtons = document.querySelectorAll('.ambulance__button');
let itemButton = document.querySelector('.ambulance__buttno__video');
let topics = document.querySelectorAll('.ambulance__topic');

let activeTopic;

window.addEventListener('click', buttonsFun);

function buttonsFun(event) {
    if (event.target.closest('.ambulance__button')) {
        itemButton = event.target.closest('.ambulance__button');
        ambulanceButtons.forEach(el => {
            if (el == itemButton) {
                el.classList.add('ambulance__button_active');
            } else {
                el.classList.remove('ambulance__button_active');
            }
        })
        if (itemButton.matches('.ambulance__buttno__video')) {
            topics[0].style.display = 'flex';
            topics[1].style.display = 'none';
            topics[2].style.display = 'none';
        }
        if (itemButton.matches('.ambulance__buttno__photo')) {
            topics[0].style.display = 'none';
            topics[1].style.display = 'flex';
            topics[2].style.display = 'none';
        }
        if (itemButton.matches('.ambulance__buttno__3d')) {
            topics[0].style.display = 'none';
            topics[1].style.display = 'none';
            topics[2].style.display = 'flex';
        }
        event.preventDefault();
    }
}

// COMMENT BUTTON
let commentButtonBody = document.querySelector('.comment__button__body');
let commentButtons = document.querySelectorAll('.comment__button');
let commentTopics = document.querySelectorAll('.comment__topic');

commentTopics[1].style.visibility = 'hidden';
commentTopics[1].style.opacity = '0';
commentTopics[1].style.height = '0px';

window.addEventListener('click', buttonsCommentFun);

function buttonsCommentFun(event) {
    let activeButton;
    if (event.target.closest('.comment__button')) {
        commentButtons.forEach(el => {
            if (el.closest('.comment__button') == event.target.closest('.comment__button')) activeButton = el;
        })
        if (!activeButton.matches('.comment__button_active')) {
            activeButton.classList.add('comment__button_active');
            commentButtons.forEach(el => {
                if (el != activeButton) el.classList.remove('comment__button_active');
            })
        }
        if (activeButton.matches('.comment__buttno__video')) {
            commentTopics[0].style.display = 'block';
            commentTopics[1].style.visibility = 'hidden';
            commentTopics[1].style.opacity = '0';
            commentTopics[1].style.height = '0px';
        }
        if (activeButton.matches('.comment__buttno__text')) {
            commentTopics[0].style.display = 'none';
            commentTopics[1].style.visibility = 'visible';
            commentTopics[1].style.opacity = '1';
            commentTopics[1].style.height = 'auto';
        }
    }
    event.preventDefault();
}
// VIDEO AMBULANCE

let imageBody = document.querySelector('.image__body');
let video = document.querySelector('.video');


window.addEventListener('click', videoFun);

function videoFun(event) {
    if (event.target.closest('.ambulance__video-player')) {
        imageBody.style.transition = '0.3s';
        imageBody.style.opacity = '0.1';
        setTimeout(() => {
            imageBody.style.display = 'none';
        }, 500);
    }
}

// COMMENT VIDEO

let videoBg = document.querySelectorAll('.comment__video_bg');
let videoComment = document.querySelector('.comment__video__video video');


window.addEventListener('click', videoCommentFun);

function videoCommentFun(event) {
    if (event.target.closest('.comment__video__video')) {
        let videoActive;
        videoBg.forEach(el => {
            console.log(el);
            console.log(event.target);
            if (event.target.closest('.comment__video_bg') == el && event.target.closest('.comment__video__video')) {
                videoActive = el;
            }
        })
        videoActive.style.transition = '0.3s';
        videoActive.style.opacity = '0.1';
        setTimeout(() => {
            videoActive.style.display = 'none';
        }, 500);
    }
}

// COMMENT TEXT SLIDER
const commentItem = document.querySelectorAll('.comment__text__item');
const commentLine = document.querySelector('.comment__slider-line');
const commentSlider = document.querySelector('.comment__slider');
let commentCount = 0;
let commentWidth;

// common width Slider
commentWidth = document.querySelector('.comment__slider').offsetWidth;

// common style Slider-line
commentLine.style.transform = 'translate(' + 0 + 'px)';
commentLine.style.width = (commentItem.length) * commentWidth + 'px';

// width on all slides
// commentItem.forEach(el => {
//     el.style.width = commentWidth + 'px';
// })

let commentPrev = document.querySelector('.comment__text__slider-prev');
let commentNext = document.querySelector('.comment__text__slider-next');
// button next
if (document.body.offsetWidth >= 1260) {
    commentNext.addEventListener('click', (e) => {
        commentCount++;
        if (commentCount >= commentItem.length - 1) {
            commentCount = 0;
        }
        commentLine.style.transform = 'translate(-' + (commentCount / 2) * commentWidth + 'px)';
    })
    commentPrev.addEventListener('click', (e) => {
        commentCount--;
        if (commentCount < 0) {
            commentCount = commentItem.length - 2;
        }
        commentLine.style.transform = 'translate(-' + (commentCount / 2) * commentWidth + 'px)';
    });
} else {
    // resize event
    window.addEventListener('resize', (event) => {
        width = document.querySelector('.comment__slider').offsetWidth;
        commentItem.forEach(el => {
            el.style.width = width + 'px';
        })
        commentLine.style.width = (commentItem.length) * width + 'px';
        commentLine.style.transform = 'translate(-' + commentCount * width + 'px)';

        // resize doctor sldier
        commentWidthUnder = document.querySelector('.comment__slider').offsetWidth;

    })

    commentWidthUnder = document.querySelector('.comment__slider').offsetWidth;

    commentNext.addEventListener('click', (e) => {
        commentCount++;
        if (commentCount >= commentItem.length) {
            commentCount = 0;
        }
        commentLine.style.transform = 'translate(-' + commentCount * commentWidthUnder + 'px)';
    })
    //button prev
    commentPrev.addEventListener('click', (e) => {
        commentCount--;
        if (commentCount < 0) {
            commentCount = commentItem.length - 1;
        }
        commentLine.style.transform = 'translate(-' + commentCount * commentWidthUnder + 'px)';
    });

    // active slides(circles)

    const sliderCircleBody = document.querySelector('.comment-circle__body');
    sliderCircleBody.classList.add('comment-circle__body');
    let circle;
    if (commentItem.length > 0) {
        for (let i = 0; i < commentItem.length; i++) {
            circle = document.createElement('div');
            circle.classList.add('comment__slider-circle');
            sliderCircleBody.insertAdjacentElement('beforeend', circle);
        }
    }
    // default first active circle
    sliderCircleBody.firstElementChild.classList.add('comment__slider-circle_active');
    // all function of circles 
    document.querySelector('.comment__text__slider-prev').addEventListener('click', (e) => {
        circlePrev();
    })
    document.querySelector('.comment__text__slider-next').addEventListener('click', (e) => {
        circleNext();
    })

    function circlePrev() {
        sliderCircleBodyList = document.querySelectorAll('.comment__slider-circle');
        if (commentCount == commentItem.length - 1) {
            sliderCircleBody.lastElementChild.classList.add('comment__slider-circle_active')
            sliderCircleBodyList[0].classList.remove('comment__slider-circle_active')
        } else if (commentCount < commentItem.length) {
            sliderCircleBodyList[commentCount].classList.add('comment__slider-circle_active')
            sliderCircleBodyList[commentCount + 1].classList.remove('comment__slider-circle_active')
        }
    }
    function circleNext() {
        sliderCircleBodyList = document.querySelectorAll('.comment__slider-circle');
        if (commentCount == 0) {
            sliderCircleBody.firstElementChild.classList.add('comment__slider-circle_active')
            sliderCircleBody.lastElementChild.classList.remove('comment__slider-circle_active')
        } else if (commentCount < commentItem.length) {
            sliderCircleBodyList[commentCount].classList.add('comment__slider-circle_active')
            sliderCircleBodyList[commentCount - 1].classList.remove('comment__slider-circle_active')
        }
    }

}
// AMBULANCE PHOTO SLIDER

let ambulanceImages = document.querySelectorAll('.ambulance__photo__item');
let isActiveAmbulanceCount = 0;
let isActiveAmbulanceCountPhone = 1;
window.addEventListener('click', ambulanceSliderFun);

function ambulanceSliderFun(event) {
    if (event.target.closest('.ambulance__slider-next')) {
        if (document.body.offsetWidth > 767) {
            let imagesWidth = document.querySelector('.ambulance__photo__item').offsetWidth;
            ambulanceImages[isActiveAmbulanceCount].style.transition = `0.3s`;
            if (isActiveAmbulanceCount < ambulanceImages.length) {
                ambulanceImages[isActiveAmbulanceCount].style.transform = `translate(-${imagesWidth + 40}px)`;
                try {
                    ambulanceImages[isActiveAmbulanceCount + 1].lastElementChild.style.opacity = '0';
                } catch { }
                isActiveAmbulanceCount++;
            }
            if (isActiveAmbulanceCount == ambulanceImages.length) {
                ambulanceImages.forEach(el => {
                    el.style.transform = `translate(0px)`
                    el.lastElementChild.style.opacity = '1';
                })
                isActiveAmbulanceCount = 0;
            }
        }
        else {
            let widthItem = document.querySelector('.ambulance__photo__item').offsetWidth;
            let children = document.querySelectorAll('.ambulance__photo__item');
            ambulanceLine.style.transition = `0.3s`;
            console.log(children.length);
            if (isActiveAmbulanceCountPhone >= 0 && isActiveAmbulanceCountPhone < children.length) {
                ambulanceLine.style.transform = `translate(-${widthItem * isActiveAmbulanceCountPhone}px)`;
                isActiveAmbulanceCountPhone++;
            } else {
                ambulanceLine.style.transform = `translate(0px)`;
                isActiveAmbulanceCountPhone = 1;
            }
        }
    }
}
//2
// window.addEventListener('resize', ambulanceResizeFun);
let ambulanceLine
ambulanceLine = document.createElement('div');
ambulanceLine.classList.add('ambulance__photo-line');


let ambulanceSlider = document.querySelector('.ambulance__photo__slider');
let children = document.querySelectorAll('.ambulance__photo__item');

if (document.body.offsetWidth <= 767) {
    ambulanceSlider.style.overflow = 'hidden';
    children.forEach(el => el.remove())
    ambulanceImages.forEach(el => ambulanceLine.append(el));
    ambulanceSlider.append(ambulanceLine);
    ambulanceSlider.style.maxWidth = document.querySelector('.ambulance__photo__item').offsetWidth + 'px';
    document.querySelector('.ambulance__slider-next').style.right = `15px`;
}

window.addEventListener('resize', (event) => {
    if (document.body.offsetWidth <= 767) {
        ambulanceSlider.style.overflow = 'hidden';
        children.forEach(el => el.remove())
        ambulanceImages.forEach(el => ambulanceLine.append(el));
        ambulanceSlider.append(ambulanceLine);
        ambulanceSlider.style.maxWidth = document.querySelector('.ambulance__photo__item').offsetWidth + 'px';
        document.querySelector('.ambulance__slider-next').style.right = `15px`;
    } else {
        ambulanceLine.remove();
        ambulanceSlider.style.overflow = 'hidden';
        ambulanceSlider.style.maxWidth = null;
        ambulanceSlider.style.width = '700px';
        document.querySelector('.ambulance__slider-next').style.right = null;
        let countSize = 0;
        children.forEach(el => {
            el.style.left = 10 * countSize;
            ambulanceSlider.append(el);
            countSize++;
            console.log(el.style.left = 10 * countSize);
        })
    }
})
//2
// active slides(circles)
const AmbulancerCircleBody = document.querySelector('.ambulance-circle__body');
// AmbulancerCircleBody.classList.add('slider-circle__body');
let ambulanceCircle;
if (ambulanceImages.length > 0) {
    for (let i = 0; i < ambulanceImages.length; i++) {
        ambulanceCircle = document.createElement('div');
        ambulanceCircle.classList.add('ambulance__slider-circle');
        AmbulancerCircleBody.insertAdjacentElement('beforeend', ambulanceCircle);
    }
}
// default first active circle
AmbulancerCircleBody.firstElementChild.classList.add('ambulance__slider-circle_active');
// all function of circles 
document.querySelector('.ambulance__slider-next').addEventListener('click', (e) => {
    ambulanceCircleNext();
})
function ambulanceCircleNext() {
    let ambulanceCircleBodyList = document.querySelectorAll('.ambulance__slider-circle');
    if (isActiveAmbulanceCountPhone == ambulanceImages.length) {
        AmbulancerCircleBody.firstElementChild.classList.add('ambulance__slider-circle_active')
        AmbulancerCircleBody.lastElementChild.classList.remove('ambulance__slider-circle_active')
    } else if (isActiveAmbulanceCountPhone < ambulanceImages.length) {
        ambulanceCircleBodyList[isActiveAmbulanceCountPhone].classList.add('ambulance__slider-circle_active')
        ambulanceCircleBodyList[isActiveAmbulanceCountPhone - 1].classList.remove('ambulance__slider-circle_active')
    }
}


// REVIEWS

let reviewsSlider = document.createElement('div');
reviewsSlider.classList.add('reviews__slider');

let reviewsRow = document.querySelector('.reviews__row').cloneNode(true);

let reviewsTitle = document.querySelector('.reviews__title');

let viewersItem = document.querySelectorAll('.viewers__item');

// window.addEventListener('resize', reviewsFun);

// function reviewsFun(event) {
if (document.body.offsetWidth > 1260) {
    if (reviewsTitle.nextElementSibling.matches('.reviews__row') == null) {
        reviewsSlider.remove();
        document.querySelector('.container').append(reviewsRow);
    }
} else if (document.body.offsetWidth <= 1260) {
    document.querySelector('.reviews__row').remove();
    reviewsSlider.append(reviewsRow)
    reviewsTitle.after(reviewsSlider);

    let startX = 0;
    let difX = 0;
    let endX = 0;
    let moveX = 0;
    // 2
    reviewsSlider.addEventListener('touchstart', reviewsTouchStart);
    reviewsSlider.addEventListener('touchmove', reviewsTouchMove);
    function reviewsTouchStart(event) {
        startX = event.touches[0].clientX - difX;
    }

    function reviewsTouchMove(event) {
        if (!startX) return false;
        moveX = event.touches[0].clientX;
        difX = moveX - startX;
        endX = difX;
        reviewsSlider.style.transition = `0s`;
        reviewsSlider.style.transform = `translate(${difX}px)`;
        if (difX > 150) {
            reviewsSlider.style.transition = `0.5s`;
            reviewsSlider.style.transform = `translate(${0}px)`;
            difX = 0;
        }
        if (document.body.offsetWidth <= 575) {
            if (difX < -700) {
                reviewsSlider.style.transition = `0.5s`;
                reviewsSlider.style.transform = `translate(-645px)`;
                difX = -645;
            }
        } else {
            if (difX < -600) {
                reviewsSlider.style.transition = `0.5s`;
                reviewsSlider.style.transform = `translate(-430px)`;
                difX = -430;
            }
        }
    }
}
// }
//2

// CARD SLIDER


let cardSlider = document.querySelector('.card__slider')
let cardItem = document.querySelectorAll('.card__item');

if (document.body.offsetWidth <= 1260) {
    let cardItemWidth;
    cardItem.forEach(el => cardItemWidth = el.offsetWidth)
    console.log(cardItemWidth);
    let startCardX = 0;
    let difCardX = 0;
    let moveCardX = 0;
    // 2
    cardSlider.addEventListener('touchstart', cardTouchStart);
    cardSlider.addEventListener('touchmove', cardTouchMove);
    function cardTouchStart(event) {
        startCardX = event.touches[0].clientX - difCardX;
    }

    function cardTouchMove(event) {
        if (!startCardX) return false;
        moveCardX = event.touches[0].clientX;
        difCardX = moveCardX - startCardX;
        cardSlider.style.transition = `0s`;
        cardSlider.style.transform = `translate(${difCardX}px)`;
        if (difCardX > 150) {
            cardSlider.style.transition = `0.5s`;
            cardSlider.style.transform = `translate(${0}px)`;
            difCardX = 0;
        }
        // 3 FIX WIDTH
        if(document.body.offsetWidth <= 1260 && document.body.offsetWidth >= 992){
        if (difCardX < -515) {
                cardSlider.style.transition = `0.5s`;
                cardSlider.style.transform = `translate(${-300 + 'px'})`;
                difCardX = -300;
            }
        } else if (document.body.offsetWidth < 992  && document.body.offsetWidth >= 867){
            if (difCardX < -435) {
                    cardSlider.style.transition = `0.5s`;
                    cardSlider.style.transform = `translate(${-400 + 'px'})`;
                    difCardX = -525;
                }
            }else if (document.body.offsetWidth < 867  && document.body.offsetWidth >= 767){
                if (difCardX < -615) {
                        cardSlider.style.transition = `0.5s`;
                        cardSlider.style.transform = `translate(${-525 + 'px'})`;
                        difCardX = -525;
                    }
                }else if (document.body.offsetWidth < 767  && document.body.offsetWidth >= 657){
                    if (difCardX < -720) {
                            cardSlider.style.transition = `0.5s`;
                            cardSlider.style.transform = `translate(${-640 + 'px'})`;
                            difCardX = -640;
                        }
                    }else if (document.body.offsetWidth < 657  && document.body.offsetWidth >= 525){
                        if (difCardX < -770) {
                                cardSlider.style.transition = `0.5s`;
                                cardSlider.style.transform = `translate(${-710 + 'px'})`;
                                difCardX = -710;
                            }
                        } else if (document.body.offsetWidth < 525  && document.body.offsetWidth >= 425){
                        if (difCardX < -920) {
                                cardSlider.style.transition = `0.5s`;
                                cardSlider.style.transform = `translate(${-850 + 'px'})`;
                                difCardX = -850;
                            }
                        } else if (document.body.offsetWidth < 425  && document.body.offsetWidth >= 320){
                            if (difCardX < -1000) {
                                    cardSlider.style.transition = `0.5s`;
                                    cardSlider.style.transform = `translate(${-920 + 'px'})`;
                                    difCardX = -920;
                                }
                            } // 3 добавить else if до 320 
    }

    // FOOTER MENU
    let footerArrow = document.querySelector('.footer__menu__arrow');

    let footerTopMenu = document.querySelector('.footer__menu');
    let footerTopMenuBody = document.querySelector('.footer__menu__body');
    let footerNav = document.querySelector('.footer__top__nav').cloneNode(true);
    document.querySelector('.footer__top__nav').before(footerTopMenu)
    document.querySelector('.footer__top__nav').remove();
    footerTopMenu.append(footerNav);
    
    window.addEventListener('click', footerMenuFun);
    
    function footerMenuFun(event) {
        if(event.target.closest('.footer__menu__body')){
        footerNav.classList.toggle('footer__top__nav_active');
        footerArrow.classList.toggle('arrow_active');
    }
    if(event.target.closest('.footer__top__nav__link')){
        footerNav.classList.remove('footer__top__nav_active');
        footerArrow.classList.remove('arrow_active');
    }
}
}
//3
// }

// MAP SWITCH

let mapButtons = document.querySelectorAll('.map__button');
let mapNovo = document.querySelector('.novosibirsk');
let mapKemer = document.querySelector('.kemerovo');

window.addEventListener('click', mapButtonsFun);

function mapButtonsFun(event) {
    try {
    let mapButtonCurrent;
    if(event.target.closest('.map__button')){
        mapButtons.forEach(el => {
            if(event.target.closest('.map__button') == el) mapButtonCurrent = el;
            if(el.matches('.button_active')) el.classList.remove('button_active');
        })
        event.target.closest('.map__button').classList.add('button_active');
    }
        if(mapButtonCurrent.matches('.button_active') && mapButtonCurrent.matches('.map__novo')){
            mapNovo.style.display = 'block';
            mapKemer.style.display = 'none';
        } else {
            mapNovo.style.display = 'none';
            mapKemer.style.display = 'block';
        }
    } catch (error) {
        
    }
}





// function ambulanceResizeFun(event) {
//     if (document.body.offsetWidth <= 767) {
//         let children = document.querySelectorAll('.ambulance__photo__item');
//         children.forEach(el => el.remove())
//         ambulanceImages.forEach(el => ambulanceLine.append(el));
//         ambulanceSlider.append(ambulanceLine);
//         ambulanceSlider.style.width = document.querySelector('.ambulance__photo__item').offsetWidth + 'px';
//         document.querySelector('.ambulance__slider-next').style.right = `10px`;
//     }
// }

//!-------------
// ambulance.addEventListener('click', e => {
//     let arrowAmbulance = document.querySelector('.arrow');
//     arrowAmbulance.classList.toggle('arrow_active');
//     ambulance.classList.toggle('header__ambulances__body_active');
//     if (arrowAmbulance.matches('.arrow_active')) {
//         ambulanceRegion.style.maxHeight = ambulanceRegion.scrollHeight + 'px';
//         ambulanceRegion.addEventListener('mouseleave', e => {
//             ambulanceRegion.style.maxHeight = null;
//             ambulance.classList.remove('header__ambulances__body_active');
//             arrowAmbulance.classList.remove('arrow_active');
//         })
//     } else {
//         ambulanceRegion.style.maxHeight = null;
//     };
// })