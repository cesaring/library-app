import Ember from 'ember';

export default Ember.Controller.extend({

  myAriaPressed: false,

  actions:
    {
      contactMe(myModel) {
      //  alert('Helloooo!');
        myModel.save().then(()=>
  this.set('responseMessage', `Awesome! I'm on my way! Until then, look for an email to your Project Tracker!`)
        
        );

      }
    }

});
