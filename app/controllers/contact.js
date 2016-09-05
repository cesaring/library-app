import Ember from 'ember';

export default Ember.Controller.extend({

  myAriaPressed: false,

  actions:
    {
      contactMe() {
      //  alert('Helloooo!');
        this.set('responseMessage', `Awesome! I'm on my way! Until then, look for an email to your Project Tracker!`);

      }
    }

});
