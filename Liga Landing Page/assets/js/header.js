$(document).ready(function(){
    $(window).on("scroll",function(){
        if ($(document).scrollTop()>30) {
            $("header").animate({padding: '0.5% 10%'});
        }
        if ($(document).scrollTop()<30) {
            $("header").animate({padding: '1% 10%'});
        }
    });



    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            // downscroll code
        } else {
            // upscroll code
        }
        lastScrollTop = st;
    });


});

