var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose",
    state: "Georgia"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose",
     state: "Quebec"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomPinkRoses.jpg",
  link: "heirloomRose"
});

var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses, heirloomRoses
]);

//instance of collection view created calling instance of collection puts it in templates
var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});

//renders templates in id element
$("#allFlowers").html(flowerGroupView.render().el);

//instance of states collection view created calling instance of collection puts it in templates
var stateflowerGroupView = new app.stateflowersView({collection:flowerGroup});

$("#stateFlowers").html(stateflowerGroupView.render().el);

