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


// jQuery(document).ready(function () {
//     jQuery('.custom-imglist').each(function()   {

//         jQuery(this).find('.col-lg-4:lt(6)').show();
//     })
//     jQuery('.show-less').hide();
//     var items =  9;
//     var shown =  3;
//     jQuery('.load-more').click(function () {
//         jQuery('.show-less').show();
//         shown = jQuery('.custom-imglist .col-lg-4:visible').length+3;
//         if(shown< items) {
//           jQuery('.custom-imglist .col-lg-4:lt('+shown+')').show(300);
//         } else {
//           jQuery('.custom-imglist .col-lg-4:lt('+items+')').show(300);
//           jQuery('.load-more').hide();
//         }
//     });
//     jQuery('.show-less').click(function () {
//         jQuery('.custom-imglist .col-lg-4').not(':lt(6)').hide(300);
//         jQuery('.load-more').show();
//         jQuery('.show-less').hide();
//     });
// });

// jQuery(document).ready(function(){
//     jQuery('.custom-imglist').each(function(){
//         jQuery(this).find('.image-row [class*="col-"]').slice(0, 6).show()
//         jQuery(this).find('.load-more-row .load-more').click(function(){
//             let numMedia = jQuery('.image-row [class*="col-"]:visible').length
//             let numMediaHidden = jQuery('.image-row [class*="col-"]:hidden').length
//             if (numMediaHidden > 1) {
//                 numMedia = numMedia + 3
//             }
//             else    {
//                 numMedia = 6
//             }
//             console.log
//             jQuery('.image-row [class*="col-"]').slice(0, numMedia).show()
//         })
//     })
// })

jQuery(document).ready(function () {
    jQuery(".custom-tab-content .tab-pane").each( function(){
        jQuery(this).find('.image-row [class*="col-"]:lt(6)').show();
        jQuery(this).find('.show-less').hide();
        var visible =  jQuery(this).find('.image-row [class*="col-"]:visible').length;
        var items =  jQuery(this).find('.image-row [class*="col-"]').length;
        var shown =  6;
        jQuery('.load-more').click(function () {
            jQuery(this).siblings().show();
            shown = jQuery('.image-row [class*="col-"]:visible').length + 3;
            if(shown< items) {
              jQuery('.image-row [class*="col-"]:lt('+shown+')').show();
            } else {
              jQuery('.image-row [class*="col-"]:lt('+items+')').show();
              jQuery('.load-more').hide();
            }
        });
        jQuery('.show-less').click(function () {
            jQuery('.image-row [class*="col-"]').not(':lt(6)').hide();
            jQuery('.load-more').show();
            jQuery('.show-less').hide();
        });
    })
    
});
