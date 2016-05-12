import Ember from 'ember';

export default Ember.Route.extend({
  applicationState: Ember.inject.service(),

  actions: {
    willTransition(transition) {
      this.get('applicationState').set('slider', false);
    }
  }
});
