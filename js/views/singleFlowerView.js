var app = app || {};

app.singleFlowerView = Backbone.View.extend({
    
    tagName: "article",
    className: "flowerListItem",
    
    //jquery targets templat in index and html method reads it as such
    template: _.template($("#flowerElement").html()),
    
    render: function() {
        //puts model to html template
        var flowerTemplate = this.template(this.model.toJSON());
        //el renderd with all passed elememts in tagname
        this.$el.html(flowerTemplate);
        return this;
    }
    
});
//stateflowers view
app.statesingleFlowerView = Backbone.View.extend({
    
    tagName: "article",
    className: "flowerListItem",
    
    //jquery targets templat in index and html method reads it as such
    template: _.template($("#stateflowerElement").html()),
    
    render: function() {
        //puts model to html template
        var flowerTemplate = this.template(this.model.toJSON());
        //el renderd with all passed elememts in tagname
        this.$el.html(flowerTemplate);
        return this;
    }
    
});