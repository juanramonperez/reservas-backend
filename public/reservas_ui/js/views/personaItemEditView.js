
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
    initValidation: function(){
        this.$el.find('form').validate({
            rules: {
                first_name: {
                    required: true
                },
                last_name: {
                    required: true
                },
                email: {
                    required: true
                }                
            },
            highlight: function(element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function(error, element) {
                if(element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });        
    },    
    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        this.initValidation();
        return this;
    },
    save: function(e){
        e.preventDefault();
        // Validate form
        if(this.$el.find('form').valid()){
            // Create model        
            this.model.set('first_name', $('[name="first_name"]').val());
            this.model.set('last_name', $('[name="last_name"]').val());
            this.model.set('email', $('[name="email"]').val());
            this.model.set('position', $('[name="position"]').val());
            this.model.save(null, {
                beforeSend: function(){
                    $('.loading').show();
                },
                success:function(response) {
                    $('.loading').hide();
                    window.location = '#admin/personas';
                },
                error:function(response) {
                    $('.loading').hide();
                },            
            }); 
        };        
    },
    cancel: function(e){
        e.preventDefault();
        window.location = '#admin/personas';
    }
});
