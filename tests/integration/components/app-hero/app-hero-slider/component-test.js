import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-hero/app-hero-slider', 'Integration | Component | app hero/app hero slider', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-hero/app-hero-slider}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#app-hero/app-hero-slider}}
      template block text
    {{/app-hero/app-hero-slider}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
