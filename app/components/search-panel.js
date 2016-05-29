import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        doSearchAction(searchText) {
            this.sendAction('searchAction', searchText);
        }
    }
});
