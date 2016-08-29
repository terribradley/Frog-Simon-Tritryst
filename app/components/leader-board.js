import Ember from 'ember';

export default Ember.Component.extend({
  sortedScores: Ember.computed.sort('highscores', 'sortDefinition'),
  sortDefinition: ['score:desc'],
});
