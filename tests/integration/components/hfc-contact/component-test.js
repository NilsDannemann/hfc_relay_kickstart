import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hfc-contact', 'Integration | Component | hfc contact', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hfc-contact}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hfc-contact}}
      template block text
    {{/hfc-contact}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
