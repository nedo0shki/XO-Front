export default function() {

  this.namespace = '/api';

  this.get('/boards/:id', function(db, request) {
    let id = request.params.id;
    return {
      data: {
        type: 'board',
        id: 1,
        attributes: {
          stateString: '000112000',
          win: 0
        }
      }
    };
  });
}
