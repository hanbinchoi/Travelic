(() => {

	let yOffset = 0;
	let prevScrollHeight = 0;
	let currentScene = 0;
	let enterNewScene = false;

	const header = document.querySelector('header');
	// 각 섹션 정보
	const sceneInfo = [{
			// 0
			type: 'sticky',
			heightNum: 7,
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-0'),
				messageA: document.querySelector('.main-message.a'),
				messageB: document.querySelector('.main-message.b'),
				messageC: document.querySelector('.main-message.c'),
				messageD: document.querySelector('.main-message.d'),
				canvas: document.querySelector('#video-canvas-0'),
				context: document.querySelector('#video-canvas-0').getContext('2d'),
				videoImages: []
			},
			values: {
				videoImageCount: 840,
				imageSequence: [0, 839],
				canvas_opacity: [1, 0, {
					start: 0.9,
					end: 1
				}],
				messageA_opacity_in: [0, 1, {
					start: 0.15,
					end: 0.25
				}],
				messageB_opacity_in: [0, 1, {
					start: 0.39,
					end: 0.45
				}],
				messageC_opacity_in: [0, 1, {
					start: 0.6,
					end: 0.75
				}],

				messageA_translateY_in: [20, 0, {
					start: 0.15,
					end: 0.25
				}],
				messageB_translateY_in: [20, 0, {
					start: 0.39,
					end: 0.45
				}],
				messageC_translateY_in: [20, 0, {
					start: 0.6,
					end: 0.75
				}],

				messageA_opacity_out: [1, 0, {
					start: 0.3,
					end: 0.38
				}],
				messageB_opacity_out: [1, 0, {
					start: 0.5,
					end: 0.6
				}],
				messageC_opacity_out: [1, 0, {
					start: 0.8,
					end: 0.9
				}],

				messageA_translateY_out: [0, -20, {
					start: 0.3,
					end: 0.38
				}],
				messageB_translateY_out: [0, -20, {
					start: 0.5,
					end: 0.6
				}],
				messageC_translateY_out: [0, -20, {
					start: 0.8,
					end: 0.9
				}],

			}

		},
		{
			//1
			type: 'normal',
			scrollHeight: 0,
			objs: {
				container: document.querySelector('#scroll-section-1')
			}
		}

	];

	function setCanvasImages() {
		let imgElem;
		for (let i = 0; i < sceneInfo[0].values.videoImageCount; i++) {
			imgElem = new Image();
			imgElem.src = `./video/img_${i}.jpg`;
			sceneInfo[0].objs.videoImages.push(imgElem);
		}
	}

	function calcValues(values, currentYOffset) {
		let rv;
		const scrollHeight = sceneInfo[currentScene].scrollHeight;
		let scrollRatio = currentYOffset / scrollHeight;

		if (values.length === 3) {
			const partScrollStart = values[2].start * scrollHeight;
			const partScrollEnd = values[2].end * scrollHeight;
			const partScrollHeight = partScrollEnd - partScrollStart;
			if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
				rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];

			} else if (currentYOffset < partScrollStart) {
				rv = values[0];
			} else if (currentYOffset > partScrollEnd) {
				rv = values[1];
			}

		} else {
			rv = scrollRatio * (values[1] - values[0]) + values[0];
		}

		return rv;
	}

	// 스크롤에 반응하는 애니메이션 설정
	function playAnimation() {
		const values = sceneInfo[currentScene].values
		const objs = sceneInfo[currentScene].objs
		const currentYOffset = yOffset - prevScrollHeight;
		const scrollHeight = sceneInfo[currentScene].scrollHeight;
		const scrollRatio = currentYOffset / scrollHeight;
		switch (currentScene) {
			case 0:
				let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));
				objs.context.drawImage(objs.videoImages[sequence], 0, 0);
				objs.context.fillStyle = "rgba(0,0,0, 0.4)";
				objs.context.fillRect(0, 0, 1920, 1080);
				objs.canvas.style.opacity = calcValues(values.canvas_opacity, currentYOffset)
				if (scrollRatio <= 0.27) {
					objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
					objs.messageA.style.transform = `translate3d(0,${calcValues(values.messageA_translateY_in,currentYOffset)}%,0)`;
				} else {
					objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
					objs.messageA.style.transform = `translate3d(0,${calcValues(values.messageA_translateY_out,currentYOffset)}%,0)`;
				}

				if (scrollRatio <= 0.47) {
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
					objs.messageB.style.transform = `translate3d(0,${calcValues(values.messageB_translateY_in,currentYOffset)}%,0)`;
				} else {
					objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
					objs.messageB.style.transform = `translate3d(0,${calcValues(values.messageB_translateY_out,currentYOffset)}%,0)`;
				}

				if (scrollRatio <= 0.62) {
					objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
					objs.messageC.style.transform = `translate3d(0,${calcValues(values.messageC_translateY_in,currentYOffset)}%,0)`;
				} else {
					objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
					objs.messageC.style.transform = `translate3d(0,${calcValues(values.messageC_translateY_out,currentYOffset)}%,0)`;
				}


				break;
			case 1:
				break;
		}
	}

	// 스크롤 시 활성화 씬 
	function scrollLoop() {
		enterNewScene = false;
		prevScrollHeight = 0;
		for (let i = 0; i < currentScene; i++) {
			prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight;
		}
		if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
			enterNewScene = true;
			currentScene++;
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}
		if (yOffset < prevScrollHeight) {
			enterNewScene = true;
			if (currentScene === 0) return;
			currentScene--;
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}
		if (enterNewScene) return;
		if (currentScene === 1) {
			header.style.backdropFilter = "saturate(180%) blur(15px)";
		} else {
			header.style.backdropFilter = "none";
		}
		playAnimation();
	}

	// 섹션별 높이 셋팅
	function setLayout() {
		for (let i = 0; i < sceneInfo.length; i++) {
			if (sceneInfo[i].type === 'sticky') {
				sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
			} else {
				sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
			}
			sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
		}
		yOffset = window.pageYOffset;
		// 현재 씬 활성화
		let totalScrollHeight = 0;
		for (let i = 0; i < sceneInfo.length; i++) {
			totalScrollHeight += sceneInfo[i].scrollHeight;
			if (totalScrollHeight >= yOffset) {
				currentScene = i
				break;
			}
		}
		document.body.setAttribute('id', `show-scene-${currentScene}`);

		const heightRatio = window.innerHeight / 1080;
		sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%,0) scale(${heightRatio})`;
	}
	window.addEventListener('scroll', () => {
		yOffset = window.pageYOffset;
		scrollLoop();
	});
	window.addEventListener('load', () => {
		setLayout();
		sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
		sceneInfo[0].objs.context.fillStyle = "rgba(0,0,0, 0.4)";
		sceneInfo[0].objs.context.fillRect(0, 0, 1920, 1080);
	});
	window.addEventListener('resize', setLayout);

	setCanvasImages();

	// toggle button event
	const menu = document.querySelector('.countrys');
	const toggle_btn = document.querySelector('.navbar_toggle-btn');
	toggle_btn.addEventListener('click', () => {
		menu.classList.toggle('open');
	});


	// food 화살표 이벤트
	const foodLeft = document.querySelector('.food-left');
	const foodRight = document.querySelector('.food-right');
	const foodCards = document.querySelectorAll('.food-card');
	const foodCardSize = foodCards[0].offsetWidth;

	let foodMovement = 0
	foodLeft.addEventListener('click', () => {
		if (foodMovement == 0) return;
		foodMovement += foodCardSize;
		for (let i = 0; i < foodCards.length; i++) {
			foodCards[i].style.transform = `translate3d(${foodMovement}px, 0, 0)`;
		}
	})

	foodRight.addEventListener('click', () => {
		if (foodMovement == (-1) * foodCardSize * (foodCards.length - 2)) return;
		foodMovement -= foodCardSize;
		for (let i = 0; i < foodCards.length; i++) {
			foodCards[i].style.transform = `translate3d(${foodMovement}px, 0, 0)`;
		}
	})

	// place 화살표 이벤트
	const placeLeft = document.querySelector('.place-left');
	const placeRight = document.querySelector('.place-right');
	const placeCards = document.querySelectorAll('.place-card');
	const placeCardSize = placeCards[0].offsetWidth;

	let placeMovement = 0
	placeLeft.addEventListener('click', () => {
		if (placeMovement == 0) return;
		placeMovement += placeCardSize;
		for (let i = 0; i < placeCards.length; i++) {
			placeCards[i].style.transform = `translate3d(${placeMovement}px, 0, 0)`;
		}
	})

	placeRight.addEventListener('click', () => {
		if (placeMovement == (-1) * placeCardSize * (placeCards.length - 2)) return;
		placeMovement -= placeCardSize;
		for (let i = 0; i < placeCards.length; i++) {
			placeCards[i].style.transform = `translate3d(${placeMovement}px, 0, 0)`;
		}
	})



})();