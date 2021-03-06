import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hfc-infobox/hfc-infobox-downloads', 'Integration | Component | hfc infobox/hfc infobox downloads', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hfc-infobox/hfc-infobox-downloads}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hfc-infobox/hfc-infobox-downloads}}
      template block text
    {{/hfc-infobox/hfc-infobox-downloads}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
