import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        searchAction(searchText) {
            this.sendAction('searchAction', searchText);
        }
    }
});
