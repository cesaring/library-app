import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('contact');
    },

    actions: {
        deleteContact(myContact) {
            myContact.destroyRecord();
                
        }
    }
    

});