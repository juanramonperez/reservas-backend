/**
 * Persona model
 */

var Reservas = Reservas || {};

Reservas.PersonaModel = Backbone.Model.extend({
    urlRoot:'http://96.126.127.203/personas',
    defaults:{
        'id':null,
        'first_name':'',
        'last_name':'',
        'email':'',
        'photo':'',
    }
});

Reservas.PersonaCollection = Backbone.Collection.extend({
    model: Reservas.PersonaModel,
    url:'http://96.126.127.203/personas'
});