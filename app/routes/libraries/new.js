import Ember from 'ember';

export default Ember.Route.extend({
    
    model() {
        return this.store.createRecord('library');
    },
    
    setupController: function (controller, model) {
        this._super(controller, model);
        
        controller.set('title', 'Create a new library');
        controller.set('buttonLabel', 'Create');
    },
    
    //I think if this wasn't here it would go to /libraries/new
    renderTemplate() {
        this.render('libraries/form');
    },
   
   actions: { 
    saveLibrary(newLibrary) {
        newLibrary.save().then(() => this.transitionTo('libraries'));
    },
    
    willTransition() {
        //rollbackAttributes() removes the record from the store
        //if the model 'isNew'
        let model = this.controller.get('model);');
        
        if (model.get('isNew')) {
            model.destroyRecord();
        } //if
    }//willTransition
   }//actions
   
});