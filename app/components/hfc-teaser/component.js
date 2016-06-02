import Ember from 'ember';
import prototypeData from './prototype-data';
import ENV from '../../config/environment';

const { computed, on } = Ember;

export default Ember.Component.extend({

  page: null,
  _title: computed('page.title', 'title', function(){
    return this.get('title') || this.get('page.title') || '';
  }),

  fillDummy: on('init', function(){
    if(ENV.useDummyData){
      let defaults = {};
      if(this.get('title')){
        defaults.title = this.get('title');
      }
      this.set('page', prototypeData.create(defaults));
      console.log(defaults);
    }
  })

});
