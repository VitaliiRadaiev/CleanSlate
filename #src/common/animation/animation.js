let header = document.querySelector('.header');
if(header) {

    let promoTitle = document.querySelector('.promo-header__title');
    if(promoTitle) {
        promoTitle.innerHTML = promoTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    let menuLinks = document.querySelectorAll('.menu__link');
    menuLinks.forEach(link => {
        link.innerHTML = link.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
       
        let isAnimDone = true;

        link.addEventListener('mouseenter', () => {

            if(isAnimDone) {
                anime.timeline({
                    targets: link.querySelectorAll('.letter'),
                    update: (anim) => {
                        if(anim.progress == 100) {
                            isAnimDone = true;
                        } else {
                            isAnimDone = false;
                        }
                        
                    } 
                })
                .add({
                    opacity: [1, 0],
                    translateX: [0, -30],
                    delay: (el, i) => 30 * (i + 1),
                    easing: 'easeInExpo',
                    duration: 300,
                })
                .add({
                    opacity: [0, 1],
                    translateX: [40, 0],
                    easing: 'easeOutExpo',
                    duration: 600,
                    delay: (el, i) => 30 * (i + 1),
                })
            }            
        })
    })

    anime.timeline({
        easing: 'easeInOutQuad',
    })
    .add({
        targets: '.header__logo',
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 600,
        delay: 800,
    })
    .add({
        targets:['.header__burger','.menu__link'],
        opacity: [0, 1],
        translateY: ['-100%', '0%'],
        delay: (el, i) => 200 * i,
        duration: 400,
    }, '-=200')
    .add({
        targets: '.promo-header__title .letter',
        opacity: [0, 1],
        translateX: ['-30%', '0%'],
        easing: 'easeInOutQuad',
        duration: 700,
        delay: (el, i) => 30 * (i + 1),
        autoplay: false,
    }, '-=600')
   

    
}

let waypoints = document.querySelectorAll('.waypoint');
if(waypoints.length) {
    waypoints.forEach(waypoint => {
        waypoint.style.opacity = 0;
        let el = new Waypoint({
            element: waypoint,
            handler: function () {
                anime({
                    targets: waypoint,
                    easing: 'linear',
                    opacity: [0, 1],
                    translateY: ['80%', '0%'],
                    delay: 300
                });

                this.destroy();
            },
            offset: '90%',
        })
    })
}
