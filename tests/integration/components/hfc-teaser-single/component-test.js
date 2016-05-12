import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hfc-teaser-single', 'Integration | Component | hfc teaser single', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hfc-teaser-single}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hfc-teaser-single}}
      template block text
    {{/hfc-teaser-single}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
