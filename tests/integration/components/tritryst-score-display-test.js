import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tritryst-score-display', 'Integration | Component | tritryst score display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tritryst-score-display}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#tritryst-score-display}}
      template block text
    {{/tritryst-score-display}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
