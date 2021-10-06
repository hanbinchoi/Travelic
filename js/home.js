(() => {
    const containers = [
        document.querySelector('#asia'),
        document.querySelector('#europe'),
        document.querySelector('#n-america'),
        document.querySelector('#s-america'),
        document.querySelector('#africa'),
    ];

    const main = document.querySelector('.main');

    function focusContainer(index) {
        

        for (let i = 0; i < containers.length; i++) {
            if (i < index) {
                containers[i].style.transform = "translate3d(-5vw,0px,0px) scale(1.0)";
                containers[i].classList.add('focus');
                console.log("in");
            } else if (i > index) {
                containers[i].style.transform = "translate3d(5vw,0px,0px) scale(1.0)";
                containers[i].classList.add('focus');
                console.log("out");
            } else {
                containers[i].style.transform = "translate3d(0px,0px,0px) scale(1.5)";
                containers[i].classList.remove('focus');
                console.log("out2")
            }

        }

    }

    main.addEventListener('mousemove', (event) => {
        focusContainer(event.path[0].dataset['index']);
    })
    main.addEventListener('mouseleave', () => {
        for (let i = 0; i < containers.length; i++) {
            containers[i].classList.remove('focus');
            containers[i].style.transform = "scale(1.0)";
        }
    })

})();