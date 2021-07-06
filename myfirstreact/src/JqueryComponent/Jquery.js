import React, { Component } from 'react'
import $ from 'jquery';

import AOS from 'aos';
import "aos/dist/aos.css";

export default class Jquery extends Component {
    componentDidMount()
    {
      //nav toogle // 
      $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
       });
     $(document).click(function(e) {
      var container = $(".mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
      }
     });
      
      
            // Navigation active state on scroll
          var nav_sections = $('section');
          var main_nav = $('.nav-menu, .mobile-nav');
  
          $(window).on('scroll', function() {
            var cur_pos = $(this).scrollTop() + 200;
            
            nav_sections.each(function() {
              var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();
  
              if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                  main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
              }
              if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
              }
            });
          });
      
      
  
            //back to top butt
            $(window).scroll(function() {
              if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
              } else {
                $('.back-to-top').fadeOut('slow');
              }
            });
            $('.back-to-top').click(function() {
              $('html, body').animate({
                scrollTop: 0
              },1000);
              return false;
            });
            $("#ModalActive").click(function () {
              $(".back-to-top").fadeOut('slow');
            });
      
    
      
      //animation on scroll and load
              function aos_init() {
          AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
          });
        }
        $(window).on('load', function() {
          aos_init();
        });
      
      
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
