

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


$(document).ready(function () {
	document.body.classList.add('is-load');
	// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});


	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('.projects-page');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				let headerHeight = header.clientHeight;
				wrapper.style.paddingTop = headerHeight + 'px';
			}

		}
	}
	// ==== AND ADD PADDING-TOP ================================

	//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================





$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});




//Spollers
function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];

			if(spoller.classList.contains('_active')) {
				_slideDown(spoller.nextElementSibling);
			}

			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
spollerInit()
// === // Spollers ==================================================================




if($('.anchor').length>0) {
	$(".anchor").click(function() {
	  var elementClick = $(this).attr("href").match(/#\w+$/gi).join(''); 
	  var destination = $(elementClick).offset().top - 70;
	  jQuery("html:not(:animated),body:not(:animated)").animate({
		scrollTop: destination
	  }, 600);
	  return false;
	});
}


;
	// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');
		let classNameElem = document.querySelector('.burger').dataset.activel;
		let header = document.querySelector('.header');

		header.classList.toggle('_is-menu-open');
		document.querySelector(`.${classNameElem}`).classList.toggle('open');
		document.querySelector('body').classList.toggle('lock')
	}
	$('.burger').click((e) => burgerBtnAnimation(e));
// === Burger Handler =====================================================================	;
	{
    let footerInputs = document.querySelectorAll('input.footer-form__input');
    if(footerInputs.length) {
        footerInputs.forEach(input => {
            let wrap = input.closest('.footer-form__item');

            input.addEventListener('focus', () => {
                wrap.classList.add('_focus');
            })
            input.addEventListener('blur', () => {
                if(!input.value.trim()) {
                    wrap.classList.remove('_focus');               
                } 
            })
        })
    }
}
;
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
;
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



        if (video) {

            promoHeader.addEventListener('click', () => {
                if (video.muted) {
                    video.muted = false;
                    promoHeader.classList.add('_is-sound');
                } else {
                    video.muted = true;
                    promoHeader.classList.remove('_is-sound');
                }
            })

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



        let projectsItems = document.querySelectorAll('.latest-projects__item');
        if (projectsItems.length) {
            projectsItems.forEach(item => {
                let video = item.querySelector('video');
                if (video) {

                    item.addEventListener('mouseenter', () => {
                        if (document.documentElement.clientWidth > 991) {
                            video.play();
                        }
                    })

                    item.addEventListener('mouseleave', () => {
                        if (document.documentElement.clientWidth > 991) {
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
    };

	let projectNav = document.querySelector('.projects__nav');
	if (projectNav) {
		let filterItems = projectNav.querySelectorAll('.projects__nav-link');
		let iso = $('.projects__list').isotope({
			// options
			itemSelector: 'li',
			layoutMode: 'fitRows',
		});


		if (filterItems.length) {
			let arr = [];
			let oldValue = 0;


			filterItems.forEach((item, index) => {
				let id = item.dataset.id;

				arr.push(item.getBoundingClientRect().left - 15);

				item.addEventListener('click', (e) => {
					e.preventDefault();

					let left = arr[index] - (document.documentElement.clientWidth / 2) + ((item.getBoundingClientRect().width + 30) / 2)
					moveTo(oldValue, left, projectNav);
					oldValue = left < 0 ? 0 : left;

					item.classList.add('active');
					filterItems.forEach(i => {
						if (i == item) {
							return;
						}

						i.classList.remove('active');
					})

					if (!id) {
						iso.isotope({ filter: '*' })
					} else {
						iso.isotope({ filter: `li[data-id="${id}"]` })
					}

				})
			});

			projectNav.addEventListener('scroll', () => {
				oldValue = projectNav.scrollLeft;
			});

			window.addEventListener('resize', () => {
				arr = [];
				projectNav.scrollLeft = 0;

				filterItems.forEach(i => {
					arr.push(i.getBoundingClientRect().left - 15);
				})
			})

		}

		async function moveTo(from, to, el = false) {
			if (!el) {
				console.log('ele is not correct');
				return
			}

			let count = from;

			let promise = await new Promise((resolve, rehect) => {

				if (from <= to) {
					let time = (1000 / ((to - from) / 1000)) / 1000;

					let id = setInterval(() => {
						if (count >= to) {
							clearInterval(id);
							resolve();
							return
						}
						el.scrollLeft = count;
						count = count + 2;
					}, time < 0 ? 1 : time)
				} else if (from >= to) {
					let time = (1000 / ((from - to) / 1000)) / 1000;
					let id = setInterval(() => {
						if (count <= to) {
							clearInterval(id);
							resolve();
							return
						}
						el.scrollLeft = count;
						count = count - 2;
					}, time < 0 ? 1 : time)
				}
			})

		}
	}

	let projectList = document.querySelector('.projects__list');
	if (projectList) {
		for (let i of projectList.children) {
			let link = i.querySelector('a');
			if (link) {
				let id = link;
				if (id) {
					i.setAttribute('data-id', id);
				}
			}

		}
	}

	let projectsCards = document.querySelectorAll('.projects-card');
	if(projectsCards.length) {
	    projectsCards.forEach(item => {
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



	function togglePlayPause(video, btn) {
		if (video.paused) {
			video.play();
			btn.classList.remove('icon-play_circle_filled');
			btn.classList.add('icon-pause_circle_filled');

		} else {
			video.pause();
			btn.classList.remove('icon-pause_circle_filled');
			btn.classList.add('icon-play_circle_filled');
		}
	}


	$("[data-fancybox]").fancybox({
		video: {
			autoStart: false,
		},
		youtube: {
			autoplay: 0,
		},
		vimeo: {
			autoplay: false,
		},
		animationDuration: 600,
		afterShow: function (instance, slide) {
			let slides = document.querySelectorAll('.fancybox-stage .fancybox-slide');
			if (slides.length) {

				slides.forEach(slide => {
					let video = slide.querySelector('video');
					if (video) {
						let content = slide.querySelector('.fancybox-content');

						video.muted = false;


						if (!content.querySelector('.video-control')) {
							let videoControl = document.createElement('div');
							videoControl.className = 'video-control';

							let playPauseBtn = document.createElement('div');
							playPauseBtn.className = 'play-pause-btn icon-play_circle_filled';
							playPauseBtn.setAttribute('data-fancybox-play-pouse', '');

							let progressBar = document.createElement('div');
							progressBar.className = "video-progres-bar";
							progressBar.setAttribute('data-fancybox-progress', '');

							let thumb = document.createElement('div');
							thumb.className = 'video-thumb';

							progressBar.append(thumb);
							videoControl.append(playPauseBtn);
							videoControl.append(progressBar);
							content.append(videoControl);


							playPauseBtn.addEventListener('click', () => {
								togglePlayPause(video, playPauseBtn);
							})

							video.ontimeupdate = () => {
								let d = video.duration;
								let c = video.currentTime;

								thumb.style.left = ((100 * c) / d) + '%';
							};

							video.addEventListener('ended', () => {
								video.pause();
								playPauseBtn.classList.remove('icon-pause_circle_filled');
								playPauseBtn.classList.add('icon-play_circle_filled');
							});

							progressBar.addEventListener('click', (e) => {
								let w = progressBar.offsetWidth;
								let o = e.offsetX;
								thumb.style.left = (100 * o) / w;
								video.currentTime = video.duration * (o / w);
							})
						}
					}
				})
			}


		},
		afterClose: function () {
			let projects = document.querySelectorAll('.latest-projects__item');
			if (projects.length) {
				projects.forEach(project => {
					let video = project.querySelector('.latest-projects__item-video');
					if (video) {
						video.muted = true;
					}
				})
			}

			let projectsCards = document.querySelectorAll('.projects-card');
			if (projectsCards.length) {
				projectsCards.forEach(item => {
					let video = item.querySelector('video');
					if (video) {
						video.muted = true;
					}
				})
			}
		}
	});
});

window.addEventListener('DOMContentLoaded', () => {
	const loaderHtml = `<div class="loader-layer"><div class="loader-layer__line"><span></span></div></div>`;
	document.body.insertAdjacentHTML('afterbegin', loaderHtml);

	let videos = [].slice.call(document.querySelectorAll("video.lazy"));
	let latestProjectsItems = [].slice.call(document.querySelectorAll('.latest-projects__item'));
	let projectItems = [].slice.call(document.querySelectorAll('.projects-card'));

	if ("IntersectionObserver" in window) {
		let videoObserver = new IntersectionObserver(function (entries, observer) {

			entries.forEach(function (video) {
				if (video.isIntersecting) {
					for (let source in video.target.children) {
						let videoSource = video.target.children[source];
						if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
							videoSource.src = videoSource.dataset.src;
						}
					}

					video.target.load();
					video.target.classList.remove("lazy");
					videoObserver.unobserve(video.target);
				}
			});
		});

		videos.forEach(function (video) {
			videoObserver.observe(video);
		});


		let vimeoVideoObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(async function (item) {
				if (item.isIntersecting) {
					let player;
					let vimeoVideo = item.target.querySelector('.latest-projects__item-video[data-cs-vimeo-id]');
					if (vimeoVideo) {
						if (!item.target.classList.contains('_video-loaded')) {
							player = await new Vimeo.Player(vimeoVideo, {
								id: vimeoVideo.dataset.csVimeoId,
								autoplay: false,
								controls: false,
								muted: true,
								loop: true,
								width: 'auto',
								height: 'auto'
							})
							item.target.classList.add('_video-loaded');

							item.target.addEventListener('mouseenter', () => {
								if(document.documentElement.clientWidth > 991) {
									player.play().then(function () {
										// the video was played
									}).catch((error) => console.log(error.name))
								}
							})
							item.target.addEventListener('mouseleave', () => {
								if(document.documentElement.clientWidth > 991) {
									player.pause().then(function () {
										// the video was played
									}).catch((error) => console.log(error.name))
								}
							})
						}
					}
				}
			})
		})

		latestProjectsItems.forEach(function (video) {
			vimeoVideoObserver.observe(video);
		});


		let vimeoVideoObserver2 = new IntersectionObserver(function (entries, observer) {
			entries.forEach(async function (item) {
				if (item.isIntersecting) {
					let player;
					let vimeoVideo = item.target.querySelector('.projects-card__video[data-cs-vimeo-id]');
					if (vimeoVideo) {
						if (!item.target.classList.contains('_video-loaded')) {
							player = await new Vimeo.Player(vimeoVideo, {
								id: vimeoVideo.dataset.csVimeoId,
								autoplay: false,
								controls: false,
								muted: true,
								loop: true,
								width: 'auto',
								height: 'auto'
							})
							item.target.classList.add('_video-loaded');

							item.target.addEventListener('mouseenter', () => {
								if(document.documentElement.clientWidth > 991) {
									player.play().then(function () {
										// the video was played
									}).catch((error) => console.log(error.name))
								}
							})
							item.target.addEventListener('mouseleave', () => {
								if(document.documentElement.clientWidth > 991) {
									player.pause().then(function () {
										// the video was played
									}).catch((error) => console.log(error.name))
								}
							})
						}
					}
				}
			})
		})

		projectItems.forEach(function (video) {
			vimeoVideoObserver2.observe(video);
		});
	}



})


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



let player;
function onYouTubeIframeAPIReady() {
	window.addEventListener('load', () => {
		let promoBg = document.querySelector('.promo-header__bg[data-youtube-id]');
		if (promoBg) {
			let videoId = promoBg.dataset.youtubeId;

			player = new YT.Player(promoBg, {
				height: 'auto',
				width: 'auto',
				videoId: videoId,
				playerVars: {
					autoplay: 1,
					loop: 1,
					playlist: videoId,
					controls: 0,
					enablejsapi: 1,
				},
				events: {
					onReady: onPlayerReady,
				}
			});
		}


		let latestProjects = [].slice.call(document.querySelectorAll('.latest-projects__item'));
		if (latestProjects.length) {
			if ("IntersectionObserver" in window) {
				let videoObserver = new IntersectionObserver(function (entries, observer) {
					entries.forEach(item => {
						if (item.isIntersecting) {
							let player;
							let wideoWrap = item.target.querySelector(".latest-projects__item-video[data-youtube-id]");
							if (wideoWrap) {
								let videoId = wideoWrap.dataset.youtubeId;
								player = new YT.Player(wideoWrap, {
									height: 'auto',
									width: 'auto',
									videoId: videoId,
									playerVars: {
										loop: 1,
										playlist: videoId,
										controls: 0,
										showinfo: 0,
									},
									events: {
										onReady: (e) => {
											latesPlayersRady(e, item.target);
											//e.target.cueVideoById(videoId)
										},
									}
								});
							}
						}
					})

				});

				latestProjects.forEach(function (video) {
					videoObserver.observe(video);
				});
			}
		}

		let projectsCards = [].slice.call(document.querySelectorAll('.projects-card'));
		if (projectsCards.length) {
			if ("IntersectionObserver" in window) {
				let videoObserver = new IntersectionObserver(function (entries, observer) {
					entries.forEach(item => {
						if (item.isIntersecting) {
							let player;
							let wideoWrap = item.target.querySelector(".projects-card__video[data-youtube-id]");
							if (wideoWrap) {
								let videoId = wideoWrap.dataset.youtubeId;
								player = new YT.Player(wideoWrap, {
									height: 'auto',
									width: 'auto',
									videoId: videoId,
									playerVars: {
										loop: 1,
										playlist: videoId,
										controls: 0,
										showinfo: 0,
									},
									events: {
										onReady: (e) => {
											latesPlayersRady(e, item.target);
											//e.target.cueVideoById(videoId)
										},
									}
								});
							}
						}
					})

				});

				projectsCards.forEach(function (video) {
					videoObserver.observe(video);
				});
			}
		}



	})
}

function onPlayerReady(e) {
	e.target.mute();

	let promoHeader = document.querySelector('.promo-header');
	if (promoHeader) {
		promoHeader.addEventListener('click', () => {
			if (e.target.isMuted()) {
				e.target.unMute();
				promoHeader.classList.add('_is-sound');
			} else {
				e.target.mute();
				promoHeader.classList.remove('_is-sound');
			}
		})
	}

	e.target.playVideo();
}

function latesPlayersRady(e, item) {
	e.target.mute();

	item.addEventListener('mouseenter', () => {
		if (document.documentElement.clientWidth > 991) {
			e.target.playVideo();
		}
	})

	item.addEventListener('mouseleave', () => {
		if (document.documentElement.clientWidth > 991) {
			e.target.pauseVideo();
		}
	})

}





// === vimeo handler =============================
window.addEventListener('load', async () => {
	let promoHeaderBg = document.querySelector('.promo-header__bg[data-cs-vimeo-id]');
	if (promoHeaderBg) {
		let player = new Vimeo.Player(promoHeaderBg, {
			id: promoHeaderBg.dataset.csVimeoId,
			autoplay: true,
			controls: false,
			muted: true,
			loop: true,
			width: 'auto',
			height: 'auto'
		})

		let promoHeader = document.querySelector('.promo-header');
		if (promoHeader) {
			promoHeader.addEventListener('click', async () => {
				let muted = await player.getMuted()

				if (muted) {
					player.setMuted(false);
					promoHeader.classList.add('_is-sound');
				} else {
					player.setMuted(true);
					promoHeader.classList.remove('_is-sound');
				}
			})
		}
	}
})
// === and vimeo handler =============================
