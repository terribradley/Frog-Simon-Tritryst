import Ember from 'ember';

const Tile = Ember.Object.extend({

})

export default Ember.Component.extend({
  horizontal: false,
  firstColor: "empty",
  secondColor: "empty",
  thirdColor: "empty",

  boardstate: [Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"})],

  actions: {
    selectTile(params) {
      this.set("horizontal", params.horizontal);
      this.set("firstColor", params.firstColor);
      this.set("secondColor", params.secondColor);
      this.set("thirdColor", params.thirdColor);
    },
    placeTile(location) {
      if(this.get("secondColor")==="empty") {
        alert("You forgot to set your tile");
      } else {
        this.get("boardstate").splice(location, 1);
        this.get("boardstate").splice(location, 0, Tile.create({state: this.get("secondColor")}));
      }
    }
  }
});
