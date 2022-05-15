let pictures = [
    './img/kot5.jpg',
    './img/dog.jpg',
    './img/rats.jpg',
    './img/cat6.jpg',
    ];
    let indexSlider = 0;
    let speed = 1000;
    
    function slideShow() {
        document.getElementById('image1').src = pictures[indexSlider];
        indexSlider++;
        if (indexSlider == pictures.length) { indexSlider = 0; }
        setTimeout("slideShow()", speed);
    }
    slideShow();