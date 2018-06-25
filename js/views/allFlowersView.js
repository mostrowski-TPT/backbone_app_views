var app = app || {};

app.allFlowersView = Backbone.View.extend({

tagName: "section",

 render: function(){
     this.collection.each(this.addFlower, this);
     return this;
 },   
    
    
    //model and collection communicating, renders each flowerview dfor each model and passes to collection view
   addFlower: function(flower){
       var flowerView = new app.singleFlowerView ({model: flower});
       this.$el.append(flowerView.render().el);
       
   } 
    
});



app.stateflowersView = Backbone.View.extend({
   tagName: "section",
    render: function() {
        this.collection.each(this.addFlower, this);
        return this;
        
    },
    
    addFlower: function(flower){
        var flowerView = new app.statesingleFlowerView ({model: flower});
        this.$el.append(flowerView.render().el);
    }
    
    
    
});