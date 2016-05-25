import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sidebar-infobox', 'Integration | Component | hfc infobox', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sidebar-infobox}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sidebar-infobox}}
      template block text
    {{/sidebar-infobox}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
