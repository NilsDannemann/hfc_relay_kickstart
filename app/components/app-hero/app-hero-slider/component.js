import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'swiper-container',

  didInsertElement() {
    Ember.run.schedule("afterRender",this,function() {

      let mySwiper = new Swiper (this.$()[0], {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        keyboardControl: true,
        slidesPerView: 1,
        spaceBetween: 0,

        // Lazy Loading
        preloadImages: false,
        lazyLoading: true,

        // If we need pagination
        pagination: '.swiper-pagination',

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
      });

    });
  }
});
