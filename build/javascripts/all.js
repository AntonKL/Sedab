$(window).on("load resize",function(){var e=document.getElementById("js-centered-more");if($(e).length>0){var n=$(window).width(),t=$(e).offset().left,s=n-t;s<330&&($("#js-centered-more .submenu .submenu").removeClass("fly-out-right"),$("#js-centered-more .submenu .submenu").addClass("fly-out-left")),s>330&&($("#js-centered-more .submenu .submenu").removeClass("fly-out-left"),$("#js-centered-more .submenu .submenu").addClass("fly-out-right"))}var o=$("#js-centered-navigation-mobile-menu").unbind();$("#js-centered-navigation-menu").removeClass("show"),o.on("click",function(e){e.preventDefault(),$("#js-centered-navigation-menu").slideToggle(function(){$("#js-centered-navigation-menu").is(":hidden")&&$("#js-centered-navigation-menu").removeAttr("style")})})});