import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hfc-gallery/hfc-gallery-image', 'Integration | Component | hfc gallery/hfc gallery image', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hfc-gallery/hfc-gallery-image}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hfc-gallery/hfc-gallery-image}}
      template block text
    {{/hfc-gallery/hfc-gallery-image}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
