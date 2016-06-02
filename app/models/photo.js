import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  owner: attr('string'),
  secret: attr('string'),
  server: attr('string'),
  farm: attr('string'),
  title: attr('string'),
  ispublic: attr('string'),
  isfriend: attr('string'),
  isfamily: attr('string'),
  url_t: attr('string'),
  url_o: attr('string'),
  license: attr('string')
});
