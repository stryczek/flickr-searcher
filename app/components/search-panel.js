import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        searchAction(searchText) {
            console.log(searchText);
        }
    }
});
