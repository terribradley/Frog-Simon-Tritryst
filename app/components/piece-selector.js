import Ember from 'ember';

export default Ember.Component.extend({
  colors:["tri-red", "tri-green", "tri-pink", "tri-yellow", "tri-darkblue", "tri-lightblue"],
  uppermiddle: "tri-white",
  middleleft: "tri-white",
  center: "tri-white",
  middleright: "tri-white",
  lowermiddle: "tri-white",

  actions: {
    rotate() {
      var buffer = this.get("middleleft");
      this.set("middleleft", this.get("lowermiddle"));
      this.set("lowermiddle", this.get("middleright"));
      this.set("middleright", this.get("uppermiddle"));
      this.set("uppermiddle", buffer);
    },

    newTile() {
      this.set("uppermiddle", "tri-white");
      this.set("lowermiddle", "tri-white");
      var firstColor = this.get("colors")[Math.floor(Math.random() * 6)];
      var secondColor = this.get("colors")[Math.floor(Math.random() * 6)];
      var thirdColor = this.get("colors")[Math.floor(Math.random() * 6)];
      this.set("middleleft", firstColor);
      this.set("center", secondColor);
      this.set("middleright", thirdColor);
    },

    selectTile() {
      var horizontal = this.get("uppermiddle")==="tri-white";
      var firstColor = this.get("uppermiddle");
      var thirdColor = this.get("lowermiddle");
      if(horizontal) {
        firstColor = this.get("middleleft");
        thirdColor = this.get("middleright");
      }
      var params = {
        horziontal: horizontal,
        firstColor: firstColor,
        secondColor: this.get("center"),
        thirdColor: thirdColor,
      }
      this.sendAction("selectTile", params);
    }
  }
});
