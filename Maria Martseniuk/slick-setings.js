$(document).ready(function() {
    $('.slider__slide-container').slick({

        //vertical
        vertical: true,
        verticalSwiping: true,

        //showing one slide
        slidesToShow: 1,

        //dots settings
        dots: true,
        customPaging: function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<div class="slick-dots__dot-num">' + thumb + '</div><div class="slick-dots__dot-desc"> Process Name </div>';
        },
        appendDots: $(".slider__slide-container"),

        //arrows settings
        arrows: true,
        prevArrow: '<svg class="slide-inner__arr-prev slick-arrow"> <use xlink:href="#previous"> <svg id="previous" width="100%" height="100%" viewBox="0 0 188 30"> <defs> <style> .cls-1 { fill: #c1c1c1; fill-rule: evenodd; } .cls-2 { font-size: 15.686px; opacity: 0.5; fill: #4d4d4d; text-anchor: end; font-family: Cabin; text-transform: uppercase; } </style> </defs><path id="arrow_up" class="cls-1" d="M1636,293h1v29h-1V293Zm-3.98,3.768,4.25-4.242,0.7,0.707-4.24,4.242Zm8.99-.477-4.3-4.3-0.72.716,4.3,4.3Z" transform="translate(-1453 -292)"></path> <text id="previous_process" data-name="previous process" class="cls-2" transform="translate(152.009 20.518) scale(0.848 0.85)">previous process</text> </svg> </use> </svg><svg class="slide-inner__arr-prev slide-inner__arr-mobile-up slick-arrow"> <use xlink:href="#arrow_mobile_up"> <svg id="arrow_mobile_up" width="27" height="9" viewBox="0 0 27 9"><path id="arrow" class="cls-1" d="M1,3.981H27v1H1v-1ZM4.768-.007L0.525,4.25,1.232,4.959,5.475,0.7ZM4.29,9.006l-4.3-4.312L0.71,3.975l4.3,4.311Z"/> </svg> </use> </svg>',
        nextArrow: '<svg class="slide-inner__arr-next slick-arrow"> <use xlink:href="#next"> <svg id="next" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 149 30"><path id="arrow_down" class="cls-1" d="M1636,1051h1v29h-1v-29Zm-3.98,25.23,4.25,4.24,0.7-.7-4.24-4.25Zm8.99,0.48-4.3,4.3-0.72-.72,4.3-4.3Z" transform="translate(-1492 -1051)" /> <text id="next_process" data-name="next process" class="cls-2" transform="translate(113.009 20.518) scale(0.848 0.85)">next process</text> </svg> </use> </svg><svg class="slide-inner__arr-next slide-inner__arr-mobile-down slick-arrow"> <use xlink:href="#arrow_mobile_down"> <svg id="arrow_mobile_down" width="27" height="9" viewBox="0 0 27 9"> <path id="arrow" class="cls-1" d="M1,3.981H27v1H1v-1ZM4.768-.007L0.525,4.25,1.232,4.959,5.475,0.7ZM4.29,9.006l-4.3-4.312L0.71,3.975l4.3,4.311Z"/> </svg> </use> </svg>',
        appendArrows: $(".slider__slide-container")
    });
});