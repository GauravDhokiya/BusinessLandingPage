$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $("nav").addClass("navbar-bg");
    }
    else{
        $("nav").removeClass("navbar-bg");
    }
})