/*global $, document, window*/
$(document).ready(function (){
    "use strict";
    /* Navbar Scroll */
    $(window).scroll(function(){
        if (this.scrollY > 20) {
            $(".header").addClass("color-nav");
            $(".header-content .nav > li > a").css("color","#000000");
            $(".header-content .logo img").attr("src", "img/logo.webp");
        }
        else
        {
            $(".header").removeClass("color-nav");
            $(".header-content .nav > li > a").css("color","#eeeeee");
            $(".header-content .logo img").attr("src", "img/logo-alt.webp")
        }
    });
});