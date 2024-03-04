var secondswiper = new Swiper(".second-swiper", {
    slidesPerView : 2,
    spaceBetween: 0,
    loop:1,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
    clickable: true,
    },
    navigation: {
    nextEl: ".next_bttn",
    prevEl: ".prev_bttn",
}
});


var thirdswiper = new Swiper(".third-swiper", {
    direction: "vertical",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect : 'fade',
        fadeEffect: { 
        crossFade: true 
        }
});


var swiper = new Swiper(".forth_swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    loopAdditionalSlides: 1,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});