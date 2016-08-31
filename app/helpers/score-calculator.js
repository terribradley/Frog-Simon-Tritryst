import Ember from 'ember';

export function scoreCalculator(params) {
  return params[0]/2-1;
}

export default Ember.Helper.helper(scoreCalculator);
