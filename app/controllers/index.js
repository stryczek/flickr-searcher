import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    let lastSearch = localStorage.getItem('lastSearch');
    this.set('indexSearchText', lastSearch);
  },
  actions: {
    indexSearchAction(searchText) {
      this.set('text', searchText);
      this.set('page', 1);
      localStorage.setItem('lastSearch', searchText);
    },
    indexSearchNextPage() {
      let searchText = this.get('text');
      let searchPage = parseInt(this.get('page')) + 1;
      this.set('page', searchPage);
      localStorage.setItem('lastSearch', searchText);
    },
    indexSearchPrevPage() {
      let searchText = this.get('text');
      let searchPage = parseInt(this.get('page')) - 1;
      if (searchPage > 0) {
        this.set('page', searchPage);
        localStorage.setItem('lastSearch', searchText);
      }
    }
  }
});
