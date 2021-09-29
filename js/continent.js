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

    // image preload
    setTimeout(function() {
        console.log('Works!');
    }, 3000);

    function typeWriter() {
        if (i < txt.length) {
            document.querySelector(".title-container h1").innerHTML += txt.charAt(i);
            i++;
            titleImge.src = imgSet[i];
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
})();
