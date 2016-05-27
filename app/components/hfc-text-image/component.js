import Ember from 'ember';

export default Ember.Component.extend({
  teaserData: {},
  title: Ember.computed.alias('teaserData.title'),
  image: Ember.computed.alias('teaserData.image'),
  content: Ember.computed.alias('teaserData.content'),
  link: Ember.computed.alias('teaserData.link'),
});
