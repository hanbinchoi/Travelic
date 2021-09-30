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
                // leftNavbar.style.display="inline-flex";
                // leftNavbar.style.opacity = "1";
                leftNavbar.style.transform = "scaleY(1)";
            } else {
                // leftNavbar.style.display="none"
                // leftNavbar.style.opacity = "0";
                leftNavbar.style.transform = "scaleY(0)";
            }
        }

    })


    // title animation

    let i = 0;
    const txt = 'Welcome to Asia'; /* The text */
    const speed = 120; /* The speed/duration of the effect in milliseconds */

    const titleImge = document.querySelector(".img-container img");

    const imgSet = [
        "../img/asia/0.jpg", "../img/asia/1.jpg", "../img/asia/2.jpg", "../img/asia/3.jpg",
        "../img/asia/4.jpg", "../img/asia/5.jpg", "../img/asia/6.jpg", "../img/asia/7.jpg",
        "../img/asia/8.jpg", "../img/asia/9.jpg", "../img/asia/10.jpg", "../img/asia/11.jpg",
        "../img/asia/12.jpg", "../img/asia/13.jpg", "../img/asia/14.jpg", "../img/asia/15.jpg",
    ]


    function typeWriter() {
        if (i < txt.length) {
            document.querySelector(".title-container h1").innerHTML += txt.charAt(i);
            i++;
            titleImge.src = imgSet[i];
            setTimeout(typeWriter, speed);
        }
        if (i === txt.length) {
            titleImge.style.filter = "brightness(20%)";
            titleImge.style.transition = "all 1000ms ease-in";
        }
    }


    typeWriter();
    // toggle button event
    const menu = document.querySelector('.countrys');
    const toggle_btn = document.querySelector('.navbar_toggle-btn');
    toggle_btn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

})();