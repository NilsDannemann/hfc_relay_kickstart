import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('module-news/module-news-list-item', 'Integration | Component | module news/module news list item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{module-news/module-news-list-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#module-news/module-news-list-item}}
      template block text
    {{/module-news/module-news-list-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
