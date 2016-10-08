import Ember from 'ember';


export default Ember.Route.extend({
    
    model() {
        return this.store.findAll('book');
    }  ,
    
    actions: {
        saveBook(book) {
            if (book.get('isNotValid')) {
                return;
            }
            else {
                book.set('isEditing', false);
                book.save();
            }
        },
        
        editBook(book) {
            book.set('isEditing', true) ;
        },
        
        cancelBookEdit(book) {
            book.set('isEditing', false);
            book.rollbackAttributes();
        }
        
    } 
    
    
});
