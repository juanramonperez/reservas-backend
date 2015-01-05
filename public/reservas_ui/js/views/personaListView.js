
var Reservas = Reservas || {};

/**
 * List of people
 */
Reservas.PersonaListView = Backbone.View.extend({
    template: _.template($('#persona-list').html()),    
    events: {
        'keyup [name="keys"]'  : 'search',
    },
    initialize : function(){
        var self = this;
        /*this.collection.bind('remove', this.render, this);*/
    },      
    search: function(e){
        var self = this;
        this.collection.fetch({
            data: {
                keys: $(e.target).val(),
            },            
            success: function(){
                self.$el.find('.people').empty();
                _.each(self.collection.models, function(persona){
                    self.$el.find('.people').append(new Reservas.PersonaItemView({model:persona}).render().el);
                });                
            }
        });
    },
    render:function () { 
        var self = this;       
        $(this.el).html(this.template());
        _.each(this.collection.models, function(persona){
            $(self.el).find('.people').append(new Reservas.PersonaItemView({model:persona}).render().el);
        });  
        return this;
    }
});