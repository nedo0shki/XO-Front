import Ember from 'ember';

export function split([params]/*, hash*/) {
  var param_array = ['N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N'] ;
  for (var i = 0; i < 9; i++) {
    if (params[i] == '1') {
      param_array[i] = 'X';
    }
    else if (params[i] == '2') {
      param_array[i] = 'O';
    }
    else param_array[i] = '-';

  }
  return {c0: param_array[0],
          c1: param_array[1],
          c2: param_array[2],
          c3: param_array[3],
          c4: param_array[4],
          c5: param_array[5],
          c6: param_array[6],
          c7: param_array[7],
          c8: param_array[8]}
}

export default Ember.Helper.helper(split);
