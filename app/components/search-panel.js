import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        doSearch() {
            console.log("search action");
        }
    }
});
