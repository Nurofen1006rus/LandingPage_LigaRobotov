var cbpAnimatedHeader = (function() {
    var docElem = document.documentElement,
        header = document.querySelector( '.header' ),
        didScroll = false,
        changeHeaderOn = 520;
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 260 );
            }
        }, false );
    }
    function scrollPage() {
        var sy = scrollY();
        var element = document.getElementById("header");
        if ( sy >= changeHeaderOn ) {
          $("header").addClass("scroll");

        }
        else {
            $("header").removeClass("scroll");
        }
        didScroll = false;
    }
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    init();
})();
