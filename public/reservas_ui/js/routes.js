
var Reservas = Reservas || {};

Reservas.ReservasRouter = Backbone.Router.extend({
    initialize: function(){
        $('#navbar').html(
            new Reservas.MenuView().render().el
        );
        $('#main-container').html(
            $('#home-template').html()
        );
    },
    routes:{
        '': 'home',
        'admin/personas': 'people',
        'admin/personas/:id/edit': 'editPerson',
        'admin/personas/add': 'addPerson',
    },  
});

// Instanciar router
var AppRouter = new Reservas.ReservasRouter();

/**
 * Home page
 */
AppRouter.on('route:home', function(actions) {
    $('#main-container').html($('#home-template').html());
});

/**
 * People list
 */
AppRouter.on('route:people', function(actions) {
    $('#main-container').html(
        new Reservas.PersonaListView({
                collection: new Reservas.PersonaCollection()
            }).render().el
    );
});

/**
 * Edit person
 */
AppRouter.on('route:editPerson', function(id, actions) {
    persona = new Reservas.PersonaModel({ id: id });
    persona.fetch({
        success: function(item){
            $('#main-container').html(new Reservas.PersonaItemEditView({model: item}).render().el);
        }
    });
});

/**
 * Add person
 */
AppRouter.on('route:addPerson', function(id, actions) {
    $('#main-container').html(new Reservas.PersonaItemAddView().render().el);
});

// Start routing
Backbone.history.start();