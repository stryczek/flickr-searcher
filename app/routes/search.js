import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    text: {
      refreshModel: true
    },
    licence: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('photo', {
      page: params.page,
      searchText: params.text,
      licence: params.licence
    });
  }
});
