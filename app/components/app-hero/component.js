import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      grabCursor: true,
      keyboardControl: true,

      // Lazy Loading
      preloadImages: false,
      lazyLoading: true,

      // If we need pagination
      pagination: '.swiper-pagination',

      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });
  }
});
