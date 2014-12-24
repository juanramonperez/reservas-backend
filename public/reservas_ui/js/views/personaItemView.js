
var Reservas = Reservas || {};
/**
 * To be listed on PersonaListView 
 */
Reservas.PersonaItemView = Backbone.View.extend({
    tagName:'div',
    className: 'col-sm-4 col-md-3 col-lg-3',
    template: _.template($('#persona-item').html()),
    events: {
        'click a.btn-delete': 'delete'
    },   
    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    delete: function(e){
        e.preventDefault();
        if(confirm('Estas seguro?')){
            this.model.destroy({
                success:function() {
                    window.location = '#admin/personas';
                } 
            });
        }        
    }    
});