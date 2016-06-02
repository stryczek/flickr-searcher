import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('photo', 'Unit | Serializer | photo', {
  // Specify the other units that are required for this test.
  needs: ['serializer:photo']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord.hasOwnProperty('owner'), 'has property owner');
  assert.ok(serializedRecord.hasOwnProperty('secret'), 'has property secret');
  assert.ok(serializedRecord.hasOwnProperty('server'), 'has property server');
  assert.ok(serializedRecord.hasOwnProperty('farm'), 'has property farm');
  assert.ok(serializedRecord.hasOwnProperty('title'), 'has property title');
  assert.ok(serializedRecord.hasOwnProperty('ispublic'), 'has property ispublic');
  assert.ok(serializedRecord.hasOwnProperty('isfriend'), 'has property isfriend');
  assert.ok(serializedRecord.hasOwnProperty('isfamily'), 'has property isfamily');
  assert.ok(serializedRecord.hasOwnProperty('url_t'), 'has property url_t');
  assert.ok(serializedRecord.hasOwnProperty('url_o'), 'has property url_o');
  assert.ok(serializedRecord.hasOwnProperty('license'), 'has property license');
});
