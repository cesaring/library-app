import Ember from 'ember';

export default Ember.Controller.extend({


  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid'),


  actualEmailAddress: Ember.computed('emailAddress', function() {
  //  console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
    return this.get('emailAddress');
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('emailAddressChanged observer is called');
  }),

  phoneNumber:'',

  compPhoneNumber: Ember.computed('phoneNumber', function(){
    console.log('compPhoneNumber is called:',this.get('phoneNumber'));
  }),

  actions: {
    saveInvitation() {
        
     const email = this.get('emailAddress');
     
     const newInvitation = this.store.createRecord('invitation', {email:email});
     
     newInvitation.save().then((response) =>{
         console.log('Email address is saved');
         
         this.set('responseMessage', `Thank you! We've justed saved your email address with id: ${response.get('id')}`);
         this.set('emailAddress', '');
         
     });
     

    }
  }


});
