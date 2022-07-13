$('.sprenty-owlOne').owlCarousel({
    loop: true,
    margin: 25,
    dots: false,
    responsive: {
        320: {
            items: 1,
            center: true,
        },
        430: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1000: {
            items: 4,
            mouseDrag: false,
            nav: false,
        },
    }
})

$('.sprenty-owlTwo').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4,
        }
    }
})