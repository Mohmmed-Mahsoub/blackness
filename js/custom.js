/*global $, alert, console*/

$(function () {

    'use strict';
    
    //show/hide the menu links when click
    $(".menu .menu-container").click(function() {
        $('.menu').toggleClass("active");
    });
    
    //show secondary links
    $('.menu .links .container > ul li').click(function(){
        $('.menu .links ul li ul').removeClass("show");
        $(this).find('ul').addClass('show');
    });


    //sign links when click
    
    $(".menu .links ul li a").click(function() {
        $(this).addClass("active").parent('li').siblings().find('a').removeClass("active");
    });
    
});