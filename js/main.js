/**
 * Modern Elegance theme JS
 */
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.modernElegance = {
    attach: function (context, settings) {
      // Mobile menu toggle
      once('mobile-menu', '.mobile-menu-toggle', context).forEach(function (element) {
        $(element).on('click', function () {
          $('.navigation').toggleClass('show-mobile');
        });
      });

      // Smooth scroll for anchor links
      once('smooth-scroll', 'a[href^="#"]', context).forEach(function (element) {
        $(element).on('click', function (e) {
          const target = $(this.getAttribute('href'));
          
          if (target.length) {
            e.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 100
            }, 500);
          }
        });
      });

      // Enhance tables for responsiveness
      once('responsive-tables', 'table', context).forEach(function (element) {
        const $table = $(element);
        if (!$table.parent().hasClass('table-responsive')) {
          $table.wrap('<div class="table-responsive"></div>');
        }
      });
      
      // Add animation effects for content blocks
      once('animate-content', '.animate-on-scroll', context).forEach(function (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
            }
          });
        });
        
        observer.observe(element);
      });
    }
  };

})(jQuery, Drupal);