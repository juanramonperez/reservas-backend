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
    /*
    from: '',
    to: '',
    total: '',
    per_page: 8,
    parse: function(response){
        this.from  = response.from;
        this.to    = response.to;
        this.total = response.total;
        return response.data;
    }
    */    
});