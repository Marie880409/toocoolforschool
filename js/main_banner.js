
$(window).on("scroll",function(){
    var h = $(document).scrollTop();
    if( h > 300){
        $(".top_menu_wrap").css({
            background : "white"
        })
    }else{
        $(".top_menu_wrap").css({
            background : "none"
        })
    }
});




var fristswiper = new Swiper(".first-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:1,
    autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    loop:true
    },
    direction:"vertical",
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type:"bullets"
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


