import Ember from 'ember';

export default Ember.Component.extend({
  tritileState: Ember.computed('boardstate.@each.state', function(){
    console.log(this.get('boardstate')[this.get('location')].state)
    return this.get('boardstate')[this.get('location')].state
  }),

  actions: {
    placeTile(){
      this.sendAction("placeTile", this.get("location"))
    }
  }
});
