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
      }, 700);
    },


    guessColor(color) {
      var bluemp3 = new Audio("sounds/blue.mp3");
      var bluehalfmp3 = new Audio("sounds/bluehalf.mp3");
      var bluequartmp3 = new Audio("sounds/bluequart.mp3");
      var redmp3 = new Audio("sounds/red.mp3");
      var redhalfmp3 = new Audio("sounds/redhalf.mp3");
      var redquartmp3 = new Audio("sounds/redquart.mp3");
      var greenmp3 = new Audio("sounds/green.mp3");
      var greenhalfmp3 = new Audio("sounds/greenhalf.mp3");
      var greenquartmp3 = new Audio("sounds/greenquart.mp3");
      var yellowmp3 = new Audio("sounds/yellow.mp3");
      var yellowhalfmp3 = new Audio("sounds/yellowhalf.mp3");
      var yellowquartmp3 = new Audio("sounds/yellowquart.mp3");
      var that = this;
      that.set((color+'On'),true);
      Ember.run.later(function(){
        that.set((color+'On'),false);
      }, 700);
      if (color === "red") {
        redhalfmp3.play();
      } else if (color === "blue") {
        bluehalfmp3.play();
      } else if (color === "yellow") {
        yellowhalfmp3.play();
      } else if (color === "green") {
        greenhalfmp3.play();
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
            var timing = 1000;
            if(this.get("correctSequence").length > 8) {
              timing = 250;
            } else if (this.get("correctSequence").length > 4) {
              timing = 500;
            }
            var iterator= (-1000/timing);
            this.set("buttonsLive", false);
            var displaySequence = setInterval(function() {
              if(iterator>=0) {
                that.set('blueOn', false);
                that.set('greenOn', false);
                that.set('yellowOn', false);
                that.set('redOn', false);
                that.set(that.get("correctSequence")[iterator]+'On', true);
                if(that.get('yellowOn')) {
                  if(timing>=1000) {
                    yellowmp3.play();
                  } else if (timing>=500) {
                    yellowhalfmp3.play();
                  } else {
                    yellowquartmp3.play();
                  }
                } else if (that.get('blueOn')) {
                  if(timing>=1000) {
                    bluemp3.play();
                  } else if (timing>=500) {
                    bluehalfmp3.play();
                  } else {
                    bluequartmp3.play();
                  }
                } else if (that.get('greenOn')) {
                  if(timing>=1000) {
                    greenmp3.play();
                  } else if (timing>=500) {
                    greenhalfmp3.play();
                  } else {
                    greenquartmp3.play();
                  }
                } else if (that.get('redOn')) {
                  if(timing>=1000) {
                    redmp3.play();
                  } else if (timing>=500) {
                    redhalfmp3.play();
                  } else {
                    redquartmp3.play();
                  }
                }
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
