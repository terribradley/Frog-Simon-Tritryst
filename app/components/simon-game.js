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
  On: true,
  buttonsLive: false,

  actions: {

    newGame() {
      var firstColor = Math.floor(Math.random() * 4);
      this.set("correctSequence", [this.get("colors")[firstColor]]);
      this.get("correctSequence").push("");
      var iterator=0;
      var that = this;
      this.set("buttonsLive", false);
      var displaySequence = setInterval(function() {
        that.set('blueOn', false);
        that.set('greenOn', false);
        that.set('yellowOn', false);
        that.set('redOn', false);
        that.set(that.get("correctSequence")[iterator]+'On', true);
        iterator++;
        if(iterator === that.get("correctSequence").length) {
          that.set("buttonsLive", true);
          clearInterval(displaySequence);
        }
      }, 1000);
    },

    guessColor(color) {
      if(this.get("buttonsLive")) {
        var guessNum = this.get('guessNumber')
        this.get("guessSequence").push(color);
        this.get("guessSequence").push("");
        if(this.get("guessSequence")[guessNum] !== this.get("correctSequence")[guessNum]) {
          this.set('guessNumber', 0);
          this.set("guessSequence", []);
          this.set("buttonsLive", false);
          var score = ((this.get("correctSequence").length)/2)-1
          if(confirm("You are wrong. Your score was " + score + ". Press OK to add your score to the list of high scores")) {
            var username = prompt("Please enter your name")
          } else {
            alert("Did not add to high scores")
          }
        } else {
          if(guessNum === this.get("correctSequence").length-2) {
            this.set('guessNumber', 0);
            this.set("guessSequence", []);
            var nextColor = Math.floor(Math.random() * 4);
            this.get("correctSequence").push(this.get("colors")[nextColor]);
            this.get("correctSequence").push("");
            var iterator=0;
            var that = this;
            this.set("buttonsLive", false);
            var displaySequence = setInterval(function() {
              that.set('blueOn', false);
              that.set('greenOn', false);
              that.set('yellowOn', false);
              that.set('redOn', false);
              that.set(that.get("correctSequence")[iterator]+'On', true);
              iterator++;
              if(iterator === that.get("correctSequence").length) {
                that.set("buttonsLive", true);
                clearInterval(displaySequence);
              }
            }, 1000);
          } else {
            this.set('guessNumber', guessNum+2)
          }
        }
      }
    }
  }
});
