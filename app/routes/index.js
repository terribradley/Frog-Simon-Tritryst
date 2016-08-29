import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('highscore', {
      orderBy: 'score',
      limitToLast: 20
    });
  },
  actions: {
    addHighScore(params) {
      var newHighScore = this.store.createRecord('highscore', params);
      newHighScore.save();
      this.transitionTo('index');
    },
  }
});
