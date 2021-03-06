

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

	@@include('_function.js');
	@@include('../common/burger/burger.js');
	@@include('../common/footer/footer.js');
	@@include('../common/animation/animation.js');
	@@include('pages/#home.js');

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
