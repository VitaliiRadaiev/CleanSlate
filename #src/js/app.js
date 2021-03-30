

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

	@@include('_function.js');
	@@include('../common/burger/burger.js');
	@@include('pages/#home.js');



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

					if(video.classList.contains('latest-projects__item-video')) {
						video.muted = false;
					}

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
		}
	});
	
});

//@@include('plagins/lazy-load.js');
