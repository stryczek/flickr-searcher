import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:index', 'Unit | Controller | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();

  controller.send('indexSearchAction', 'Phrase');
  assert.equal(controller.get('text'), 'Phrase', 'search phrase is set');
  assert.equal(controller.get('page'), 1, 'search page is set');

  controller.send('indexSearchNextPage');
  assert.equal(controller.get('text'), 'Phrase', 'search phrase is set');
  assert.equal(controller.get('page'), 2, 'search page is set');

  controller.send('indexSearchPrevPage');
  assert.equal(controller.get('text'), 'Phrase', 'search phrase is set');
  assert.equal(controller.get('page'), 1, 'search page is set');

  controller.send('indexSearchPrevPage');
  assert.equal(controller.get('text'), 'Phrase', 'search phrase is set');
  assert.equal(controller.get('page'), 1, 'search page is set');
});
