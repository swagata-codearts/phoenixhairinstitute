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


jQuery(document).ready(function () {
    jQuery('.custom-imglist').each(function()   {

        jQuery(this).find('.col-lg-4:lt(6)').show();
    })
    jQuery('.show-less').hide();
    var items =  9;
    var shown =  3;
    jQuery('.load-more').click(function () {
        jQuery('.show-less').show();
        shown = jQuery('.custom-imglist .col-lg-4:visible').length+3;
        if(shown< items) {
          jQuery('.custom-imglist .col-lg-4:lt('+shown+')').show(300);
        } else {
          jQuery('.custom-imglist .col-lg-4:lt('+items+')').show(300);
          jQuery('.load-more').hide();
        }
    });
    jQuery('.show-less').click(function () {
        jQuery('.custom-imglist .col-lg-4').not(':lt(6)').hide(300);
        jQuery('.load-more').show();
        jQuery('.show-less').hide();
    });
});
