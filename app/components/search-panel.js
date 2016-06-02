import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    callSearchAction(searchText) {
      if (typeof this.get('searchAction') === "function") {
        this.sendAction('searchAction', searchText);
      } else {
        console.log("No search action to call!");
      }
    }
  }
});
