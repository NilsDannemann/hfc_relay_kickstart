import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page-hfc-components', function() {
    this.route('page-hfc-teaser-single');
    this.route('page-hfc-teaser-double');
    this.route('page-hfc-teaser-triple');
    this.route('page-hfc-downloads');
    this.route('page-hfc-gallery');
    this.route('page-hfc-content');
    this.route('page-hfc-forms');
    this.route('page-hfc-galleries');
  });
  this.route('page-news', function() {
    this.route('page-news-detail');
  });
  this.route('page-contact');
});

export default Router;
