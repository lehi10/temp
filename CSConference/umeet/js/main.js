$(function () {
  "use strict";

  var nav_offset_top = $('header').height() + 50;
  /*-------------------------------------------------------------------------------
  Navbar 
-------------------------------------------------------------------------------*/
  var home = $('#home').height();
  var infoEvent = $('#infoEvent').height();
  var funfacts = $('#funfacts').height();
  var calendarSect = $('#calendarSect').height();
  var guestsSect = $('#guestsSect').height();
  var lugar = $('#info').height();
  var sponsors = $('#sponsors').height();
  var firstH = $(window).height();

  //* Navbar Fixed  
  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top ) {
          $(".navigation li:eq(0)").addClass("active"); 
          $(".header_area").addClass("navbar_fixed");                 
        } else {
          $('.navigation li:eq(0)').removeClass('active');        
          $(".header_area").removeClass("navbar_fixed");     
        }
        if (scroll >= infoEvent - funfacts - firstH ) {
          $('.navigation li:eq(0)').removeClass('active');
          $(".navigation li:eq(1)").addClass("active");
        }
        else {
          $('.navigation li:eq(1)').removeClass('active');
        }
        if (scroll >= calendarSect - funfacts + home - infoEvent ) {
          $('.navigation li:eq(1)').removeClass('active');
          $(".navigation li:eq(2)").addClass("active");
        }
        else {
          $('.navigation li:eq(2)').removeClass('active');
        }
        if (scroll >=  calendarSect - infoEvent + home + guestsSect -firstH ) {
          $('.navigation li:eq(2)').removeClass('active');
          $(".navigation li:eq(3)").addClass("active");
        }
        else {
          $('.navigation li:eq(3)').removeClass('active');
        }
        if (scroll >= nav_offset_top + infoEvent + home - funfacts + calendarSect + guestsSect + sponsors + lugar -firstH) {
          $('.navigation li:eq(3)').removeClass('active');
          $(".navigation li:eq(4)").addClass("active");
        }
        else {
          $('.navigation li:eq(4)').removeClass('active');
        }
      });
    };
  };
  navbarFixed();

});


