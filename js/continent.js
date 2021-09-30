(() => {
    let i = 0;
    const txt = 'Welcome to Asia'; /* The text */
    const speed = 100; /* The speed/duration of the effect in milliseconds */

    const titleImge = document.querySelector(".img-container img");

    const imgSet = [
        "../img/asia/0.jpg", "../img/asia/1.jpg", "../img/asia/2.jpg", "../img/asia/3.jpg",
        "../img/asia/4.jpg", "../img/asia/5.jpg", "../img/asia/6.jpg", "../img/asia/7.jpg",
        "../img/asia/8.jpg", "../img/asia/9.jpg", "../img/asia/10.jpg", "../img/asia/11.jpg",
        "../img/asia/12.jpg", "../img/asia/13.jpg", "../img/asia/14.jpg", "../img/asia/15.jpg",
    ]

<<<<<<< HEAD
=======
    // image preload
    setTimeout(function() {
        console.log('Works!');
    }, 1000);
>>>>>>> 3578921d9694a1d8d482f3a66b5bdbb21d5a9e7e

    function typeWriter() {
        if (i < txt.length) {
            document.querySelector(".title-container h1").innerHTML += txt.charAt(i);
            i++;
            titleImge.src = imgSet[i];
            setTimeout(typeWriter, speed);
        }
    }
<<<<<<< HEAD
    var timeoutId = setTimeout(typeWriter,200);
    // clearTimeout(timeoutId);
})();
=======
    typeWriter();
})();
>>>>>>> 3578921d9694a1d8d482f3a66b5bdbb21d5a9e7e
