import Ember from 'ember';

/**
* photo-gallery - component is listing images from array "photos"
*
* @component photo-gallery
*/
export default Ember.Component.extend({
  classNames: ['photo-gallery'],
  actions: {
    callPrevPageAction() {
      if (typeof this.get('prevPageAction') === "function") {
          this.sendAction('prevPageAction');
      } else {
        console.log("No prev page action to call!");
      }
    },
    callNextPageAction() {
      if (typeof this.get('nextPageAction') === "function") {
          this.sendAction('nextPageAction');
      } else {
        console.log("No prev page action to call!");
      }
    }
  }
});
