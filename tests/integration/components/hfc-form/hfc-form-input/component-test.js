import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hfc-form/hfc-form-input', 'Integration | Component | hfc form/hfc form input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hfc-form/hfc-form-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hfc-form/hfc-form-input}}
      template block text
    {{/hfc-form/hfc-form-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
