
var Reservas = Reservas || {};

/**
 * List of people
 */
Reservas.PersonaListView = Backbone.View.extend({
    template: _.template($('#persona-list').html()),    
    events: {
        'click button.search': 'search'
    },
    initialize : function(){
        this.collection.bind('remove', this.render, this);
    },      
    search: function(e){
        e.preventDefault();
    },    
    render:function () {
        var self = this;
        $(this.el).html(this.template());
        // Fetch
        this.collection.fetch({ 
            success:function (personas) {
                _.each(personas.models, function(persona){
                    $(self.el).find('.people').append(new Reservas.PersonaItemView({model:persona}).render().el);
                });
            },
        });     
        return this;
    }
});