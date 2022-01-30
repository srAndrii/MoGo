$(function() {

    var header = $("header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    /*Header Fixed*/
    checkScroll(scrollOffset)

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset)
    });

    function checkScroll(){
        if( scrollOffset >= introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        var $this = $(this),
            blockid = $(this).data("scroll"),
            blockOffset =$(blockid).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 800);


    });
        /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $(".nav").slideToggle(450, function(){
            if($(this).css("display")=="none"){
                $(this).removeAttr("style");
            }
        });
    });

        /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(blockId).slideToggle();
        $this.toggleClass("active");
    })


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });












});
