import Ember from 'ember';
import ENV from '../../config/environment';
import prototypeData from './prototype-data';

const { computed, on } = Ember;

export default Ember.Component.extend({
  page: null,
  _title: computed('page.title', 'title', function(){
    return this.get('title') || this.get('page.title') || '';
  }),
  _image: computed('page.image', 'image', function(){
    return this.get('image') || this.get('page.image') || '';
  }),
  _content: computed('page.content', 'content', function(){
    return this.get('content') || this.get('page.content') || '';
  }),
  _link: computed('page.link', 'link', function(){
    return this.get('link') || this.get('page.link') || '';
  }),

  usePrototypeData: on('init', function(){
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
      if(this.get('link')){
        defaults.link = this.get('link');
      }
      this.set('page', prototypeData.create(defaults));
    }
  })
});
