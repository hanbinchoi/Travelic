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
        
        for(let i=0; i<containers.length; i++){
            containers[i].classList.add('focus');
        }
        
        console.log(containers[1].style.transform);
        containers[index].classList.remove('focus');
    }

    main.addEventListener('mousemove', (event) => {
        focusContainer(event.path[0].dataset['index']);
    })
    main.addEventListener('mouseleave', () => {
        for(let i=0; i<containers.length; i++){
            containers[i].classList.remove('focus');
        }
    })

})();