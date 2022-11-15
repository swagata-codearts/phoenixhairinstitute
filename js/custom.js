// JavaScript Document
jQuery('#contact-location-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1500:{
            items:4
        }
    }
});

