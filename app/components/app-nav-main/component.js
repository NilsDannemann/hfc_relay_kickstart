import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,

  actions: {
    toggleNavigation() {
      this.toggleProperty('isOpen');
    }
  },

  didInsertElement() {
    Ember.$('#nav-main').smartmenus({
      keepInViewport: true,
      scrollAccelerate: true,
      subIndicators: true,
      subIndicatorsText: '',
    });

    let self = this;
    Ember.$('#nav-main').bind('select.smapi', function() {
      Ember.run.schedule('afterRender', self, function() {
        this.triggerAction({
          action:'toggleNavigation',
          target: this
        });
      });
    });

  }
});
