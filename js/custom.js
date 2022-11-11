// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

jQuery(document).ready(function() {
    jQuery(".client-gallery .custom-imglist [class*='col-']").slice(0, 3).show();
})

