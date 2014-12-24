
var Reservas = Reservas || {};
/**
 * Add persona form
 */
Reservas.PersonaItemAddView = Backbone.View.extend({
    template: _.template($('#persona-add-form').html()),
    events: {
        'click button.btn-save': 'save',
        'click button.btn-cancel': 'cancel',
    },     
    render:function () {
        $(this.el).html(this.template());
        return this;
    },
    save: function(e){
        e.preventDefault();
        var persona = new Reservas.PersonaModel();
        persona.set('first_name', $('[name="first_name"]').val());
        persona.set('last_name', $('[name="last_name"]').val());
        persona.set('email', $('[name="email"]').val());
        persona.set('position', $('[name="position"]').val());
        persona.save(null, {
            beforeSend: function(){
                $('.loading').show();
            },
            success:function() {
                $('.loading').hide();
                window.location = '#admin/personas';
            },
        });            
    },
    cancel: function(e){
        e.preventDefault();
        window.location = '#admin/personas';
    }    
});