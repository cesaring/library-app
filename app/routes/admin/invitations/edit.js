import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('invitation', params.invitation_id);
        },
    actions:{   
        saveInvitation(currentInvitation) {
            currentInvitation.save().then(() => this.transitionTo('admin.invitations'));
        },
        
        
        willTransition(transition) {
            let model = this.controller.get('model');

            if(model.get('hasDirtyAttributes')) {
                let confirmation = confirm("Your changes haven't saved yet.  Would you like to leave this form?");

                if (confirmation) {
                    model.rollbackAttributes();
                    } else {
                   transition.abort();
                } //if (confirmation)
            }//if(model.get...
    
        } //willTransition


        } //actions
});