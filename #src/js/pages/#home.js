{
    let header = document.querySelector('.header');
    if(header) {
        let wrapper = document.querySelector('.page');
        let logo = document.querySelector('.header__logo');
        let menu = document.querySelector('.menu__list');
        let burger = document.querySelector('.burger');

        function headeItemsColorHandler() {
            let left = logo.getBoundingClientRect().left;
            let top = logo.getBoundingClientRect().top;

            let menuLeft = menu.getBoundingClientRect().left;
            let menuTop = menu.getBoundingClientRect().top;

            let burgLeft = burger.getBoundingClientRect().left;
            let burgTop = burger.getBoundingClientRect().top;
            header.hidden = true;

            let el1 = document.elementFromPoint(left, top);
            if(el1.closest('._bg-light')) {
                logo.classList.add('_color-black');
                logo.classList.remove('_color-white');
            } else {
                logo.classList.remove('_color-black');
                logo.classList.add('_color-white');
            }
            if(el1.closest('._bg-darken')) {
                logo.classList.add('_color-white');
                logo.classList.remove('_color-black');
            } else {
                logo.classList.remove('_color-white');
                logo.classList.add('_color-black');
            }

            let el2 = document.elementFromPoint(menuLeft, menuTop);

            if(el2.closest('._bg-light')) {
                menu.classList.add('_color-black');
                menu.classList.remove('_color-white');
            } else {
                menu.classList.add('_color-white');
                menu.classList.remove('_color-black');
            }
            if(el2.closest('._bg-darken')) {
                menu.classList.add('_color-white');
                menu.classList.remove('_color-black');
            } else {
                menu.classList.remove('_color-white');
                menu.classList.add('_color-black');
            }

            let el3 = document.elementFromPoint(burgLeft, burgTop);
            if(el3.closest('._bg-light')) {
                burger.classList.add('_color-black');
                burger.classList.remove('_color-white');
            } else {
                burger.classList.add('_color-white');
                burger.classList.remove('_color-black');
            }
            if(el3.closest('._bg-darken')) {
                burger.classList.add('_color-white');
                burger.classList.remove('_color-black');
            } else {
                burger.classList.remove('_color-white');
                burger.classList.add('_color-black');
            }

            header.hidden = false;
        }

        if(!wrapper.classList.contains('home')) {
            logo.classList.add('_color-black');
            menu.classList.add('_color-black');
            burger.classList.add('_color-black');
        } 


        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 30) {
                header.classList.add('_is-scroll');
            } else {
                header.classList.remove('_is-scroll');

                logo.classList.add('_color-black');
                menu.classList.add('_color-black');
                burger.classList.add('_color-black');

                logo.classList.remove('_color-white');
                menu.classList.remove('_color-white');
                burger.classList.remove('_color-white');
            }

            if(wrapper.classList.contains('home')) {
                if(window.pageYOffset > (document.documentElement.clientHeight - 50)) {
                    headeItemsColorHandler();

                } else {
                    logo.classList.remove('_color-black');
                    menu.classList.remove('_color-black');
                    logo.classList.remove('_color-white');
                    menu.classList.remove('_color-white');
                    burger.classList.remove('_color-black');
                    burger.classList.remove('_color-white');
                }
            } else if(window.pageYOffset > 200){
                headeItemsColorHandler();
            }
        })

        let menuItems = document.querySelectorAll('.menu__link');
        if(menuItems.length) {
            let header = document.querySelector('.header');
            let menu = document.querySelector('.header__menu');
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    header.classList.remove('_is-menu-open');
                    menu.classList.remove('open');
                    _slideUp(menu);
                })
            })
        }
    }

    let promoHeader = document.querySelector('.promo-header');
    if(promoHeader) {
        let soundPlay = document.querySelector('.promo-header__sound-play');
        let soundMuted = document.querySelector('.promo-header__sound-muted');
        let video = document.querySelector('.promo-header__video');

        promoHeader.addEventListener('mousemove', (e) => {
            if(document.documentElement.clientWidth > 991) {
                soundPlay.style.top = (e.pageY - 76) + 'px';
                soundPlay.style.left = (e.pageX - 76) + 'px';
                soundMuted.style.top = (e.pageY - 25) + 'px';
                soundMuted.style.left = (e.pageX - 25) + 'px';

                if(e.pageY > promoHeader.clientHeight) {
                    soundPlay.style.display = 'none';
                    soundMuted.style.display = 'none';
                }
            }
        })

        promoHeader.addEventListener('mouseenter', () => {
            if(document.documentElement.clientWidth > 991) {
                soundPlay.style.display = 'block';
                soundMuted.style.display = 'block';
            }
        })

        promoHeader.addEventListener('mouseleave', () => {
            if(document.documentElement.clientWidth > 991) {
                soundPlay.style.display = 'none';
                soundMuted.style.display = 'none';
            }
        })

        soundPlay.addEventListener('click', () => {
            video.muted = false;
            promoHeader.classList.add('_is-sound');
        })

        soundMuted.addEventListener('click', () => {
            video.muted = true;
            promoHeader.classList.remove('_is-sound');
        })
    }



    let projectsItems = document.querySelectorAll('.latest-projects__item');
    if(projectsItems.length) {
        projectsItems.forEach(item => {
            let video = item.querySelector('video');
            if(video) {

                item.addEventListener('mouseenter', () => {
                    if(document.documentElement.clientWidth > 991) {
                        video.play();
                    }
                })

                item.addEventListener('mouseleave', () => {
                    if(document.documentElement.clientWidth > 991) {
                        video.pause();
                    }
                })
            }

        })
    } 
}



let parallaxItems = document.querySelectorAll('._parallax');

window.addEventListener('scroll', () => {
    parallaxItems.forEach(item => {
        parallax(item);
    })
})

function parallax(elem) {
    let pageY = window.pageYOffset;
    let elemScrollTop = elem.getBoundingClientRect().top + (elem.getBoundingClientRect().height / 2);
    let hulfWindowHeight = document.documentElement.clientHeight / 2;
    let result = (pageY + elemScrollTop) - (pageY + hulfWindowHeight);
    let transition = elem.dataset.transition;
    elem.style.transform = `translateY(${result / (transition ? transition : 10)}px)`;
}




let testimonialSlider = document.querySelector('.testimonials-slider');
if(testimonialSlider) {
    let dataSlider;

    
        dataSlider = new Swiper(testimonialSlider, {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        speed: 600,
        loop: true,

        // Dotts
        pagination: {
            el: testimonialSlider.querySelector('.swiper-pagination'),
            clickable: true,
        },
    });
}