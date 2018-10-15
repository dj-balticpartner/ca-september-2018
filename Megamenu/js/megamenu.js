/* JQuery v. 3.3.0 is required */
$("#MainNavigation li").hover(function () {
    $(this).find(".megamenu-popup").fadeToggle(500);
});