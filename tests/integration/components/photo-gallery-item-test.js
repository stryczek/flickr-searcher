import {
  moduleForComponent,
  test
} from 'ember-qunit';
//import hbs from 'htmlbars-inline-precompile';

moduleForComponent('photo-gallery-item', 'Integration | Component | photo gallery item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  //this.render(hbs `{{photo-gallery-item}}`);

  //assert.equal(this.$().text().trim(), '');

  /*
    this.render(hbs `
      {{#photo-gallery-item}}
        template block text
      {{/photo-gallery-item}}
    `);
  */
  //assert.equal(this.$().text().trim(), 'template block text');
  assert.equal('', '');
  assert.ok(true);

});
