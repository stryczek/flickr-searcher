import Ember from 'ember';

export default Ember.Controller.extend({
  currentSearch: {
    text: "",
    licence: 7,
    page: 1
  },
  doSearch() {
    try {
      //TODO Error when run in tests
      this.transitionToRoute('search', {
        queryParams: {
          text: this.currentSearch.text,
          licence: this.currentSearch.licence,
          page: this.currentSearch.page
        }
      });
    } catch (e) {
      console.log(e);
    }
  },
  actions: {
    searchAction(searchText) {
      this.currentSearch.text = searchText;
      this.currentSearch.licence = 7;
      this.currentSearch.page = 1;
      this.doSearch();
    },
    /* Temporary actions
     * TODO Change it to infinity scroll
     */
    searchNextPage() {
      this.currentSearch.page += 1;
      this.doSearch();
    },
    searchPrevPage() {
      if (this.currentSearch.page > 1) {
        this.currentSearch.page -= 1;
      }
      this.doSearch();
    },
  }
});
