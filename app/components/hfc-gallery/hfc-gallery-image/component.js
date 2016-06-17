import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: 'hfc-gallery-image',

  attributeBindings: ['_galleryImage:style', '_galleryImageLink:href', '_galleryImageTarget:target'],
  _galleryImage: `background-image: url('assets/images/placeholder1.png');`,
  _galleryImageLink: `assets/images/placeholder1.png`,
  _galleryImageTarget: `_blank`,
});
