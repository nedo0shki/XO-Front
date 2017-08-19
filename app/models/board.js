import DS from 'ember-data';

export default DS.Model.extend({
  stateString: DS.attr(),
  win: DS.attr()
});
