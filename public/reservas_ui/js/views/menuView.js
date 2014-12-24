var Reservas = Reservas || {};

Reservas.MenuView = Backbone.View.extend({
	tagName: 'ul',
	className: 'navbar-nav nav',
    template: _.template($('#menu-items').html()),
    render:function () {
        $(this.el).html(this.template());
        return this;
    }
});