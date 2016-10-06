import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('author');
        
    },
    
    actions:{
        
        saveAuthor(author) {
            if (author.get('isNotValid')) {
                return;
            }
            
            author.set('isEditing', false);
            author.save();
            
        },
        
        cancelAuthorEdit(author){
            author.set('isEditing', false);
            author.rollbackAttributes();
            
        },
        
        editAuthor(author) {
            author.set('isEditing', true);
            
        }
        
    }
});
