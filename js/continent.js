(() => {

    // sticky nav bar

    const header = document.querySelector('header');
    const headerHeight = header.getBoundingClientRect().height;
    const leftNavbar = document.querySelector('.left-navbar');
    document.addEventListener('scroll', () => {
        if (matchMedia("screen and (max-width: 800px)").matches) {
            // 800px 이상에서 사용할 JavaScript
            leftNavbar.style.transform = "scaleY(0)";
        } else {
            // 800px 미만에서 사용할 JavaScript
            if (window.scrollY > headerHeight + 100) {
                leftNavbar.style.transform = "scaleY(1)";
            } else {
                leftNavbar.style.transform = "scaleY(0)";
            }
        }

    })


    // title animation

    let typing = 0;
    const txt = 'Welcome to Asia'; /* The text */
    const speed = 120; /* The speed/duration of the effect in milliseconds */

    const titleImage = document.querySelector(".img-container img");
    const titleImages = []
    const imgSet = [
        "./img/asia-0.jpg", "./img/asia-1.jpg", "./img/asia-2.jpg", "./img/asia-3.jpg",
        "./img/asia-4.jpg", "./img/asia-5.jpg", "./img/asia-6.jpg", "./img/asia-7.jpg",
        "./img/asia-8.jpg", "./img/asia-9.jpg", "./img/asia-10.jpg", "./img/asia-11.jpg",
        "./img/asia-12.jpg", "./img/asia-13.jpg", "./img/asia-14.jpg", "./img/asia-15.jpg",
    ]

    const imgNum = imgSet.length

    function typeWriter() {
        if (typing < txt.length) {
            document.querySelector(".title-container h1").innerHTML += txt.charAt(typing);
            typing++;
            titleImage.src = imgSet[typing];
            setTimeout(typeWriter, speed);
        }
        if (typing === txt.length) {
            titleImage.style.filter = "brightness(20%)";
            titleImage.style.transition = "all 1000ms ease-in";
        }
    }

    function setImages() {
		let imgElem;
		for (let i = 0; i < imgSet.length; i++) {
			imgElem = new Image();
			imgElem.src = `./img/asia-${i}.jpg`;
			titleImages.push(imgElem);
		}
	}
    // 이미지 로드
    function loadImages() {
        let imgElem;
        let numberOfLoadedImages = 0;
        for (let i = 0; i < imgSet.length; i++) {
            imgElem = new Image();
            imgElem.src = `img/asia-${i}.JPG`;
            titleImages.push(imgElem);
            numberOfLoadedImages++;
            if (numberOfLoadedImages === imgNum) {
                // 해당 씬의 이미지가 모두 로드되었으면
                setTimeout(typeWriter, 300);

            }

        }
    }

    window.addEventListener('load', () => {
        setImages();
        typeWriter();
    });

    // toggle button event
    const menu = document.querySelector('.countrys');
    const toggle_btn = document.querySelector('.navbar_toggle-btn');
    toggle_btn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

})();