
var Reservas = Reservas || {};
/**
 * Edit persona form
 */
Reservas.PersonaItemEditView = Backbone.View.extend({
    template: _.template($('#persona-edit-form').html()),
    events: {
        'click button.btn-save': 'save',
        'click button.btn-cancel': 'cancel',
    },   
    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    save: function(e){
        e.preventDefault();
        this.model.set('first_name', $('[name="first_name"]').val());
        this.model.set('last_name', $('[name="last_name"]').val());
        this.model.set('email', $('[name="email"]').val());
        this.model.set('position', $('[name="position"]').val());
        this.model.save(null, {
            beforeSend: function(){
                $('.loading').show();
            },
            success:function() {
                $('.loading').hide();
                window.location = '#admin/personas';
            } 
        });        
    },
    cancel: function(e){
        e.preventDefault();
        window.location = '#admin/personas';
    }
});
