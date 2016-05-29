import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchAction(searchText) {
      if (typeof this.searchInnerAction === "function") {
        this.searchInnerAction(searchText);
      } else {
        console.log("No search action to call!");
      }
    }
  }
});
