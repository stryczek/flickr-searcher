import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:search', 'Unit | Controller | search', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();

  controller.send('searchAction', 'Phrase');
  assert.equal(controller.get('currentSearch').text, 'Phrase', 'search phrase is set');
  assert.equal(controller.get('currentSearch').page, 1, 'search page is set');
  assert.equal(controller.get('currentSearch').licence, 7, 'search licence is set');

  controller.send('searchNextPage');
  assert.equal(controller.get('currentSearch').text, 'Phrase', 'search phrase is set');
  assert.equal(controller.get('currentSearch').page, 2, 'search page is set');
  assert.equal(controller.get('currentSearch').licence, 7, 'search licence is set');

  controller.send('searchPrevPage');
  assert.equal(controller.get('currentSearch').text, 'Phrase', 'search phrase is set');
  assert.equal(controller.get('currentSearch').page, 1, 'search page is set');
  assert.equal(controller.get('currentSearch').licence, 7, 'search licence is set');

  controller.send('searchPrevPage');
  assert.equal(controller.get('currentSearch').text, 'Phrase', 'search phrase is set');
  assert.equal(controller.get('currentSearch').page, 1, 'search page is set');
  assert.equal(controller.get('currentSearch').licence, 7, 'search licence is set');

  //assert.ok(controller);
});
