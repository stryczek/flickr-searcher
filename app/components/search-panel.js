import Ember from 'ember';

/**
* search-panel - component for search bar, run callSearchAction on button click
*
* @component search-panel
*/
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
