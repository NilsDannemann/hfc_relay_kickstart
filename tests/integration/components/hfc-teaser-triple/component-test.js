import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hfc-teaser-triple', 'Integration | Component | hfc teaser triple', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hfc-teaser-triple}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hfc-teaser-triple}}
      template block text
    {{/hfc-teaser-triple}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
