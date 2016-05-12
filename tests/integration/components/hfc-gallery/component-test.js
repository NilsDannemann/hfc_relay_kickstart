import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hfc-gallery', 'Integration | Component | hfc gallery', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hfc-gallery}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hfc-gallery}}
      template block text
    {{/hfc-gallery}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
