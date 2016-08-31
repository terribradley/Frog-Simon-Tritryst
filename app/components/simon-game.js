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
  gameOver: false,
  namePrompt: false,

  actions: {
    toggleGameOver() {
      this.toggleProperty('gameOver');
    },

    addHighScore() {
      this.toggleProperty('gameOver');
      this.toggleProperty('namePrompt');
    },

    addHighScore2(score) {
      var username = this.get('username');
      if(username != undefined && username != "" && username != null) {
        var params = {
          score: score/2-1,
          username: username,
        };
        this.sendAction('addHighScore', params);
      } else {
        alert("Sorry blank usernames are not allowed.");
      }
      this.toggleProperty('namePrompt');
    },

    newGame() {
      var bluemp3 = new Audio("sounds/blue.mp3");
      var redmp3 = new Audio("sounds/red.mp3");
      var greenmp3 = new Audio("sounds/green.mp3");
      var yellowmp3 = new Audio("sounds/yellow.mp3");
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
        if(that.get('yellowOn')) {
          yellowmp3.play();
        } else if (that.get('blueOn')) {
          bluemp3.play();
        } else if (that.get('greenOn')) {
          greenmp3.play();
        } else if (that.get('redOn')) {
          redmp3.play();
        }
        iterator++;
        if(iterator === that.get("correctSequence").length) {
          that.set("buttonsLive", true);
          clearInterval(displaySequence);
        }
      }, 1000);
    },


    guessColor(color) {
      var bluemp3 = new Audio("sounds/blue.mp3");
      var redmp3 = new Audio("sounds/red.mp3");
      var greenmp3 = new Audio("sounds/green.mp3");
      var yellowmp3 = new Audio("sounds/yellow.mp3");
      var that = this;
      that.set((color+'On'),true);
      Ember.run.later(function(){
        that.set((color+'On'),false);
        }, 1000);
      if (color === "red") {
        redmp3.play();
      } else if (color === "blue") {
        bluemp3.play();
      } else if (color === "yellow") {
        yellowmp3.play();
      } else if (color === "green") {
        greenmp3.play();
      }
      if(this.get("buttonsLive")) {
        var guessNum = this.get('guessNumber');
        this.get("guessSequence").push(color);
        this.get("guessSequence").push("");
        if(this.get("guessSequence")[guessNum] !== this.get("correctSequence")[guessNum]) {
          this.set('guessNumber', 0);
          this.set("guessSequence", []);
          this.set("buttonsLive", false);
          this.toggleProperty('gameOver');
        } else {
          if(guessNum === this.get("correctSequence").length-2) {
            this.set('guessNumber', 0);
            this.set("guessSequence", []);
            var nextColor = Math.floor(Math.random() * 4);
            this.get("correctSequence").push(this.get("colors")[nextColor]);
            this.get("correctSequence").push("");
            var iterator=0;
            this.set("buttonsLive", false);
            var timing = 1000;
            if(this.get("correctSequence").length > 16) {
              timing = 250;
            } else if (this.get("correctSequence").length > 6) {
              timing = 500;
            }
            var displaySequence = setInterval(function() {
              that.set('blueOn', false);
              that.set('greenOn', false);
              that.set('yellowOn', false);
              that.set('redOn', false);
              that.set(that.get("correctSequence")[iterator]+'On', true);
              if(that.get('yellowOn')) {
                yellowmp3.play();
              } else if (that.get('blueOn')) {
                bluemp3.play();
              } else if (that.get('greenOn')) {
                greenmp3.play();
              } else if (that.get('redOn')) {
                redmp3.play();
              }
              iterator++;
              if(iterator === that.get("correctSequence").length) {
                that.set("buttonsLive", true);
                clearInterval(displaySequence);
              }
            }, timing);
          } else {
            this.set('guessNumber', guessNum+2);
          }
        }
      }
    }
  }
});
