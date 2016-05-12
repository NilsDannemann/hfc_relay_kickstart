import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page-components');
  this.route('page-hfc-components', function() {
    this.route('page-hfc-teaser-single');
    this.route('page-hfc-teaser-double');
    this.route('page-hfc-teaser-triple');
    this.route('page-hfc-download');
    this.route('page-hfc-gallery');
    this.route('page-hfc-contact');
    this.route('page-hfc-text-image');
  });
});

export default Router;