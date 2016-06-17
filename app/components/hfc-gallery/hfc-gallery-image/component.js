import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: 'hfc-gallery-image',

  attributeBindings: ['_galleryImage:style', '_galleryImageLink:href', '_galleryImageTarget:target'],

  _galleryImage: Ember.computed('image', function(){
    let image = this.get('image');

    if (image) {
      return `background-image: url('assets/${image}');`;
    } else {
      return `background-image: url('assets/images/placeholder1.png');`;
    }
  }),
  _galleryImageLink: Ember.computed('image', function(){
    return `assets/${this.get('image')}`;
  }),
  _galleryImageTarget: `_blank`,
});
