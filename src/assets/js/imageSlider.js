export function imageSlider() {
    const slider = document.querySelector(".jumbotron");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".jumbotron__slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    //image slider next button
    nextBtn.addEventListener("click", () => {
    slides.forEach((jumbotron__slide) => {
        jumbotron__slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
    });

    //image slider previous button
    prevBtn.addEventListener("click", () => {
    slides.forEach((jumbotron__slide) => {
        jumbotron__slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
    });

    //image slider autoplay
    var playSlider;

    var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((jumbotron__slide) => {
        jumbotron__slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 3000);
    }
    repeater();
}