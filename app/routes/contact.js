import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('contact');
    },
      actions:
    {
      contactMe(myModel) {
      //  alert('Helloooo!');
        myModel.save().then(()=>
         this.controllerFor("contact").set('responseMessage', `Awesome! I'm on my way! Until then, look for an email to your Project Tracker!`)
        
        );

      }
    }
});
