import Ember from 'ember';
import ENV from '../../config/environment';
import prototypeData from './prototype-data';

export default Ember.Component.extend({
  page: null,

  _title: Ember.computed('page.title', 'title', function(){
    return this.get('title') || this.get('page.title') || '';
  }),
  _image: Ember.computed('page.image', 'image', function(){
    return this.get('image') || this.get('page.image') || '';
  }),
  _content: Ember.computed('page.content', 'content', function(){
    return this.get('content') || this.get('page.content') || '';
  }),
  _date: Ember.computed('page.date', 'date', function(){
    return this.get('date') || this.get('page.date') || '';
  }),
  _place: Ember.computed('page.place', 'place', function(){
    return this.get('place') || this.get('page.place') || '';
  }),
   _time: Ember.computed('page.time', 'time', function(){
    return this.get('time') || this.get('page.time') || '';
  }),
  _link: Ember.computed('page.link', 'link', function(){
    return this.get('link') || this.get('page.link') || '';
  }),

  backgroundImage: function() {
    return `background-image: url('assets/${this.get('_image')}');`;
  }.property('_image'),

  usePrototypeData: Ember.on('init', function(){
    if(ENV.usePrototypeData){
      let defaults = {};
      if(this.get('title')){
        defaults.title = this.get('title');
      }
      if(this.get('image')){
        defaults.image = this.get('image');
      }
      if(this.get('content')){
        defaults.content = this.get('content');
      }
      if(this.get('date')){
        defaults.date = this.get('date');
      }
      if(this.get('place')){
        defaults.place = this.get('place');
      }
      if(this.get('time')){
        defaults.time = this.get('time');
      }
      if(this.get('link')){
        defaults.link = this.get('link');
      }
      this.set('page', prototypeData.create(defaults));
    }
  })
});
