$(document).ready(function(){function a(){var a=$("#vegan-content-wrapper"),i=$(".vegan-circle");i.on("click",function(){$(this).siblings().removeClass("active"),$(this).addClass("active");var i=$(this).attr("data-img");$("."+i).siblings().not("#vegan-navigation").fadeOut(600,function(){$("."+i).fadeIn(600)}),i||a.siblings().not("#vegan-navigation").fadeOut(600,function(){a.fadeIn(600)})})}function i(){var a=$("#sherpa-content-wrapper"),i=$(".sherpa-circle");i.on("click",function(){$(this).siblings().removeClass("active"),$(this).addClass("active");var i=$(this).attr("data-img");$("#"+i).siblings().not("#sherpa-navigation").fadeOut(600,function(){$("#"+i).fadeIn(600)}),i||a.siblings().not("#sherpa-navigation").fadeOut(600,function(){a.fadeIn(600)})})}$(window).scroll(function(){var a=$(this).scrollTop();$("#intro-title").css({transform:"translate (0px, "+a/6+"%)"});var i=$("#nav-bar");a>680?i.slideDown(300):i.slideUp(300),a>600&&($("#office").animate({width:"100%"},700),$("#photoshop").animate({width:"100%"},700),$("#indesign").animate({width:"100%"},700),$("#illustrator").animate({width:"100%"},700),$("#lightroom").animate({width:"80%"},700),$("#muse").animate({width:"80%"},700),$("#dutch").animate({width:"100%"},700),$("#english").animate({width:"100%"},700),$("#french").animate({width:"85%"},700),$("#german").animate({width:"80%"},700))}),$("#intro-overlay").hide().fadeIn(2e3),$("#cta-go-about").click(function(){$("body").animate({scrollTop:$(window).height()},600)});var t=$(".pura-img"),n=$("#pura-big-image");t.on("click",function(){var a=$(this).attr("data-img");n.fadeOut("slow",function(){n.css("background-image","url(assets/img/projects/pura/"+a+")")}).fadeIn("slow")}),i(),a()});