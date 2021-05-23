{
    let header = document.querySelector('.header');
    if (header) {
        let wrapper = document.querySelector('.page');
        let logo = document.querySelector('.header__logo');
        let menu = document.querySelector('.menu__list');
        let burger = document.querySelector('.burger');
        let footer = document.querySelector('.footer');
        let isScroll = window.pageYOffset;
        let isAnimation = false;
        let timeid1;
        let timeid2;
        let isHeaderOpen = true;
        let top = 24.5;
        let menuTop = 42.666;
        let burgTop = 24.5;

        if (document.documentElement.clientWidth < 768) {
            top = 22.65;
            menuTop = 60.0666;
            burgTop = 22.65;
        }

        function headeItemsColorHandler() {
            if (footer.getBoundingClientRect().top < 0) {
                logo.classList.add('_color-black');
                menu.classList.add('_color-black');
                burger.classList.add('_color-black');
                logo.classList.remove('_color-white');
                menu.classList.remove('_color-white');
                burger.classList.remove('_color-white');
                header.hidden = false;
            } else {
                let left = logo.getBoundingClientRect().left;
                //let top = logo.getBoundingClientRect().top;

                let menuLeft = menu.getBoundingClientRect().left;
                //let menuTop = menu.getBoundingClientRect().top;

                let burgLeft = burger.getBoundingClientRect().left;
                //let burgTop = burger.getBoundingClientRect().top;

                if (!isAnimation) {
                    if (isHeaderOpen) {
                        header.hidden = true;

                        let el1 = document.elementFromPoint(left, top);
                        if (el1) {
                            if (el1.closest('._bg-light')) {
                                logo.classList.add('_color-black');
                                logo.classList.remove('_color-white');
                            } else {
                                logo.classList.remove('_color-black');
                                logo.classList.add('_color-white');
                            }
                            if (el1.closest('._bg-darken')) {
                                logo.classList.add('_color-white');
                                logo.classList.remove('_color-black');
                            } else {
                                logo.classList.remove('_color-white');
                                logo.classList.add('_color-black');
                            }
                        }


                        let el2 = document.elementFromPoint(menuLeft, menuTop);
                        if (el2) {
                            if (el2.closest('._bg-light')) {
                                menu.classList.add('_color-black');
                                menu.classList.remove('_color-white');
                            } else {
                                menu.classList.add('_color-white');
                                menu.classList.remove('_color-black');
                            }
                            if (el2.closest('._bg-darken')) {
                                menu.classList.add('_color-white');
                                menu.classList.remove('_color-black');
                            } else {
                                menu.classList.remove('_color-white');
                                menu.classList.add('_color-black');
                            }
                        }


                        let el3 = document.elementFromPoint(burgLeft, burgTop);
                        if (el3) {
                            if (el3.closest('._bg-light')) {
                                burger.classList.add('_color-black');
                                burger.classList.remove('_color-white');
                            } else {
                                burger.classList.add('_color-white');
                                burger.classList.remove('_color-black');
                            }
                            if (el3.closest('._bg-darken')) {
                                burger.classList.add('_color-white');
                                burger.classList.remove('_color-black');
                            } else {
                                burger.classList.remove('_color-white');
                                burger.classList.add('_color-black');
                            }
                        }

                        header.hidden = false;
                    } else {
                        let el1 = document.elementFromPoint(left, top);
                        if (el1) {
                            if (el1.closest('._bg-light')) {
                                logo.classList.add('_color-black');
                                logo.classList.remove('_color-white');
                            } else {
                                logo.classList.remove('_color-black');
                                logo.classList.add('_color-white');
                            }
                            if (el1.closest('._bg-darken')) {
                                logo.classList.add('_color-white');
                                logo.classList.remove('_color-black');
                            } else {
                                logo.classList.remove('_color-white');
                                logo.classList.add('_color-black');
                            }
                        }


                        let el2 = document.elementFromPoint(menuLeft, menuTop);
                        if (el2) {
                            if (el2.closest('._bg-light')) {
                                menu.classList.add('_color-black');
                                menu.classList.remove('_color-white');
                            } else {
                                menu.classList.add('_color-white');
                                menu.classList.remove('_color-black');
                            }
                            if (el2.closest('._bg-darken')) {
                                menu.classList.add('_color-white');
                                menu.classList.remove('_color-black');
                            } else {
                                menu.classList.remove('_color-white');
                                menu.classList.add('_color-black');
                            }
                        }


                        let el3 = document.elementFromPoint(burgLeft, burgTop);
                        if (el3) {
                            if (el3.closest('._bg-light')) {
                                burger.classList.add('_color-black');
                                burger.classList.remove('_color-white');
                            } else {
                                burger.classList.add('_color-white');
                                burger.classList.remove('_color-black');
                            }
                            if (el3.closest('._bg-darken')) {
                                burger.classList.add('_color-white');
                                burger.classList.remove('_color-black');
                            } else {
                                burger.classList.remove('_color-white');
                                burger.classList.add('_color-black');
                            }
                        }
                    }
                }
            }
        }

        if (!wrapper.classList.contains('home')) {
            logo.classList.add('_color-black');
            menu.classList.add('_color-black');
            burger.classList.add('_color-black');
        }


        window.addEventListener('scroll', () => {
            if (window.pageYOffset > isScroll) {
                if (window.pageYOffset > header.clientHeight) {


                    isScroll = window.pageYOffset;
                    header.style.transform = "translateY(-100%)";

                    isHeaderOpen = false

                }
            } else if (window.pageYOffset < isScroll) {


                isScroll = window.pageYOffset;
                header.style.transform = "translateY(0%)";

            }

            if (window.pageYOffset > 30) {
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

            if (wrapper.classList.contains('home')) {
                if (window.pageYOffset > (document.documentElement.clientHeight - 50)) {
                    //headeItemsColorHandler();
                    header.classList.add('_bg-white');
                } else {
                    logo.classList.remove('_color-black');
                    menu.classList.remove('_color-black');
                    logo.classList.remove('_color-white');
                    menu.classList.remove('_color-white');
                    burger.classList.remove('_color-black');
                    burger.classList.remove('_color-white');
                    header.classList.remove('_bg-white');
                }
            } else if (window.pageYOffset > 200) {
                //headeItemsColorHandler();
                header.classList.add('_bg-white');
            } else if (window.pageYOffset <= 200) {
                header.classList.remove('_bg-white');
            }
        })

        let menuItems = document.querySelectorAll('.menu__link');
        if (menuItems.length) {
            let header = document.querySelector('.header');
            let menu = document.querySelector('.header__menu');
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    if (header.classList.contains('_is-menu-open')) {
                        burgerBtnAnimation()
                    }
                })
            })
        }
    }

    let promoHeader = document.querySelector('.promo-header');
    if (promoHeader) {
        let soundPlay = document.querySelector('.promo-header__sound-play');
        let soundMuted = document.querySelector('.promo-header__sound-muted');
        let video = document.querySelector('.promo-header__video');

        promoHeader.addEventListener('mousemove', (e) => {
            if (document.documentElement.clientWidth > 991) {
                soundPlay.style.top = (e.pageY - 76) + 'px';
                soundPlay.style.left = (e.pageX - 76) + 'px';
                soundMuted.style.top = (e.pageY - 25) + 'px';
                soundMuted.style.left = (e.pageX - 25) + 'px';
            }
        })

        promoHeader.addEventListener('mouseenter', () => {
            if (document.documentElement.clientWidth > 991) {
                soundPlay.style.display = 'block';
                soundMuted.style.display = 'block';

                anime({
                    targets: soundPlay,
                    opacity: [0, 1],
                    scale: [0.6, 1],
                    easing: 'linear',
                    duration: 400
                })

                anime({
                    targets: soundMuted,
                    opacity: [0, 1],
                    easing: 'linear',
                    duration: 400
                })
            }
        })

        promoHeader.addEventListener('mouseleave', () => {
            if (document.documentElement.clientWidth > 991) {

                anime({
                    targets: soundPlay,
                    opacity: [1, 0],
                    scale: [1, 0],
                    easing: 'linear',
                    duration: 200
                })

                anime({
                    targets: soundMuted,
                    opacity: [1, 0],
                    easing: 'linear',
                    duration: 200
                })
            }
        })







// ================== video ===================================================
        promoHeader.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                promoHeader.classList.add('_is-sound');
            } else {
                video.muted = true;
                promoHeader.classList.remove('_is-sound');
            }
        })


        if (video) {
            for (let source of video.children) {
                source.src = source.dataset.src;
            }

            setTimeout(() => {
                video.load();
                video.addEventListener('canplaythrough', () => {
                    video.play();
                })
            }, 0)

            let timerId = setInterval(() => {
                if(video.paused) {
                    video.play();
                } else {
                    clearInterval(timerId)
                }
            }, 500);

            }
// ================== and video ===================================        
    }



        // let projectsItems = document.querySelectorAll('.latest-projects__item');
        // if (projectsItems.length) {
        //     projectsItems.forEach(item => {
        //         let video = item.querySelector('video');
        //         if (video) {

        //             item.addEventListener('mouseenter', () => {
        //                 if (document.documentElement.clientWidth > 991) {
        //                     video.play();
        //                 }
        //             })

        //             item.addEventListener('mouseleave', () => {
        //                 if (document.documentElement.clientWidth > 991) {
        //                     video.pause();
        //                 }
        //             })
        //         }

        //     })
        // }
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
    if (testimonialSlider) {
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