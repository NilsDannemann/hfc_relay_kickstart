import Ember from 'ember';

export default Ember.Route.extend({
  applicationState: Ember.inject.service(),

  setupController(controller, model) {
    this._super(controller, model);
    this.get('applicationState').set('slider', true);
  }
});
