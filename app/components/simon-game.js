import Ember from 'ember';

export default Ember.Component.extend({
  colors: ["red", "blue", "green", "yellow"],
  guessSequence: [],
  correctSequence: [],
  guessNumber: 0,
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
      var displaySequence = setInterval(function(){
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
          clearInterval(displaySequence);
        }
      }, 1000);
    },

    guessColor(color) {
      this.get("guessSequence").push(color);
      this.get("guessSequence").push("");
      if(this.get("guessSequence")[this.get("guessNumber")] !== this.get("correctSequence")[this.get("guessNumber")]) {
        this.set("guessSequence", [])
        alert("You are wrong")
      }
      console.log(this.get("guessSequence")[this.get("guessNumber")]);
      console.log(this.get("correctSequence")[this.get("guessNumber")]);
      this.set('guessNumber', this.get('guessNumber')+2)
    },

    submitGuess() {
      var guessCorrect = true;
      if(this.get("guessSequence").length !== this.get("correctSequence").length) {
        guessCorrect=false;
      }
      else {
        for(var i=0; i<this.get("guessSequence").length; i++) {
          if (this.get("guessSequence")[i] !== this.get("correctSequence")[i]) {
            guessCorrect=false;
          }
        }
      }
      if(guessCorrect) {
        var nextColor = Math.floor(Math.random() * 4);
        this.get("correctSequence").push(this.get("colors")[nextColor]);
        this.get("correctSequence").push("");
        var iterator=0
        var that= this;
        var displaySequence = setInterval(function(){
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
            clearInterval(displaySequence);
          }
        }, 1000);
      } else {
        alert("You are wrong!")
      }
      this.set("guessSequence", [])
      this.set('guessNumber', 0)
    }
  }
});
