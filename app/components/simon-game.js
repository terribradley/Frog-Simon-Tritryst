import Ember from 'ember';

export default Ember.Component.extend({
  colors: ["red", "blue", "green", "yellow"],
  guessSequence: [],
  correctSequence: [],
  redOn: false,
  blueOn: false,
  greenOn: false,
  yellowOn: false,
  actions: {
    newGame() {
      var firstColor = Math.floor(Math.random() * 4);
      this.set("correctSequence", [this.get("colors")[firstColor]]);
      this.get("correctSequence").push("")
      var iterator=0
      var that= this;
      setInterval(function(){
        if(that.get("correctSequence")[iterator]==="red") {
          that.set('blueOn', false);
          that.set('greenOn', false);
          that.set('yellowOn', false);
          that.set('redOn', true);
        } else if(that.get("correctSequence")[iterator]==="blue") {
          that.set('blueOn', true);
          that.set('greenOn', false);
          that.set('yellowOn', false);
          that.set('redOn', false);
        } else if(that.get("correctSequence")[iterator]==="green") {
          that.set('blueOn', false);
          that.set('greenOn', true);
          that.set('yellowOn', false);
          that.set('redOn', false);
        } else if(that.get("correctSequence")[iterator]==="yellow") {
          that.set('blueOn', false);
          that.set('greenOn', false);
          that.set('yellowOn', true);
          that.set('redOn', false);
        } else {
          that.set('blueOn', false);
          that.set('greenOn', false);
          that.set('yellowOn', false);
          that.set('redOn', false);
        }
        iterator++;
        if(iterator === that.get("correctSequence").length){
          clearInterval();
        }
      }, 1000);
    },

    guessColor(color) {
      this.get("guessSequence").push(color);
      this.get("guessSequence").push("");
    },

    submitGuess() {
      if(1===1) {
        var nextColor = Math.floor(Math.random() * 4);
        this.get("correctSequence").push(this.get("colors")[nextColor]);
        this.get("correctSequence").push("");
        var iterator=0
        var that= this;
        setInterval(function(){
          if(that.get("correctSequence")[iterator]==="red") {
            that.set('blueOn', false);
            that.set('greenOn', false);
            that.set('yellowOn', false);
            that.set('redOn', true);
          } else if(that.get("correctSequence")[iterator]==="blue") {
            that.set('blueOn', true);
            that.set('greenOn', false);
            that.set('yellowOn', false);
            that.set('redOn', false);
          } else if(that.get("correctSequence")[iterator]==="green") {
            that.set('blueOn', false);
            that.set('greenOn', true);
            that.set('yellowOn', false);
            that.set('redOn', false);
          } else if(that.get("correctSequence")[iterator]==="yellow") {
            that.set('blueOn', false);
            that.set('greenOn', false);
            that.set('yellowOn', true);
            that.set('redOn', false);
          } else {
            that.set('blueOn', false);
            that.set('greenOn', false);
            that.set('yellowOn', false);
            that.set('redOn', false);
          }
          iterator++;
          if(iterator === that.get("correctSequence").length){
            clearInterval();
          }
        }, 1000);
        // dothedisplay;
      } else {
        // tell them they are wrong
      }
    }
  }

});
