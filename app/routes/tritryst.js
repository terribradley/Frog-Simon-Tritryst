import Ember from 'ember';

export default Ember.Route.extend({
  actions : {
    processMove() {
      this.transitionTo('moveprocessed');
    }
  }
});
