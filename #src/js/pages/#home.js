{
    let header = document.querySelector('.header');
    if(header) {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 30) {
                header.classList.add('_is-scroll');
            } else {
                header.classList.remove('_is-scroll');
            }

            if(window.pageYOffset > (document.documentElement.clientHeight - 50)) {
                header.classList.add('_mix-mode');
            } else {
                header.classList.remove('_mix-mode');
            }
            
        })
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