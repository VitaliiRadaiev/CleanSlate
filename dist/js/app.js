

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
					if(header) {
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
	  var elementClick = $(this).attr("href")
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
		_slideToggle(document.querySelector(`.${classNameElem}`));
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
};



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



	function togglePlayPause(video,btn) {
		if(video.paused) {
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
		afterShow   : function( instance, slide ) {
			let slides = document.querySelectorAll('.fancybox-stage .fancybox-slide');
			if(slides.length) {

				slides.forEach(slide => {
					let video = slide.querySelector('video');
					let content = slide.querySelector('.fancybox-content');

					
					video.muted = false;
					

					if(!content.querySelector('.video-control')) {
						let videoControl = document.createElement('div');
						videoControl.className = 'video-control';
	
						let playPauseBtn = document.createElement('div');
						playPauseBtn.className = 'play-pause-btn icon-pause_circle_filled';
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
							togglePlayPause(video,playPauseBtn);
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
				})
			}
			

		},
		afterClose: function() {
			let projects = document.querySelectorAll('.latest-projects__item');
			if(projects.length) {
				projects.forEach(project => {
					let video = project.querySelector('.latest-projects__item-video');
					video.muted = true;
				})
			}

			let projectsCards = document.querySelectorAll('.projects-card');
			if(projectsCards.length) {
				projectsCards.forEach(item => {
					let video = item.querySelector('video');
					video.muted = true;
				})
			} 
		}
	});
	
});

//// html example --- <img class="lazy" data-src="https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" src="img/photo/placeholder.jpg" alt="img">


// === lazy load ==================================================================
document.addEventListener("DOMContentLoaded", function () {
	var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;

	if ("IntersectionObserver" in window) {
        
		let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.src;
					//lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
				}
			});
		});

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
        const lazyLoad = function() {
            if (active === false) {
              active = true;
              setTimeout(function() {
                lazyImages.forEach(function(lazyImage) {
                  if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                    lazyImage.src = lazyImage.dataset.src;
                    //lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
        
                    lazyImages = lazyImages.filter(function(image) {
                      return image !== lazyImage;
                    });
        
                    if (lazyImages.length === 0) {
                      document.removeEventListener("scroll", lazyLoad);
                      window.removeEventListener("resize", lazyLoad);
                      window.removeEventListener("orientationchange", lazyLoad);
                    }
                  }
                });
        
                active = false;
              }, 200);
            }
          };
      
          lazyLoad();
        
          document.addEventListener("scroll", lazyLoad);
          window.addEventListener("resize", lazyLoad);
          window.addEventListener("orientationchange", lazyLoad);
    }
    
});
// === // lazy load ==================================================================;
