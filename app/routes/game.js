import Ember from 'ember';

String.prototype.replaceAt=function(index, char) {
  var a = this.split("");
  a[index] = char;
  return a.join("");
}
//if (this.get('store').findRecord('field', 1).get('win')  == 1)   isWin1 = 1;
//if (this.get('store').findRecord('field', 1).get('win')  == 2)   isWin2 = 1;


export default Ember.Route.extend({
  model() {
    //return [{
    //  stateString: '001120000',
    //  win: 1
    //}];
    return this.get('store').findRecord('board', 2);
    //return this.get('store').query('board', { id: 1 });

  }







});
