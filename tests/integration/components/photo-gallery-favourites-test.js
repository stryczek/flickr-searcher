import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('photo-gallery-favourites', 'Integration | Component | photo gallery favourites', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{photo-gallery-favourites}}`);
  var empty = this.$().text().trim();

  this.render(hbs `
    {{#photo-gallery-favourites}}
      template block text
    {{/photo-gallery-favourites}}
  `);

  assert.equal(this.$().text().trim(), empty);
});
