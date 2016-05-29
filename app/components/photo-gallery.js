import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['photo-gallery'],
  actions: {
    prevPageAction() {
      if (typeof this.prevPageInnerAction === "function") {
        //this.sendAction('prevPageInnerAction');
      } else {
        console.log("No prev page action to call!");
      }
    },
    nextPageAction() {
      if (typeof this.nextPageInnerAction === "function") {
          this.nextPageInnerAction();
          //this.sendAction('nextPageInnerAction');
      } else {
        console.log("No prev page action to call!");
      }
    }
  }
});
