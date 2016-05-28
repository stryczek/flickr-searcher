import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        doSearch(searchText) {
            this.transitionToRoute('search', {
              queryParams: {
                  text: searchText,
                  licence: 7,
                  page: 1
              }
          });
        }
    }
});
