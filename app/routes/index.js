import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    text: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('photo', {
      searchText: params.text,
      page: params.page,
    });
  }
});
