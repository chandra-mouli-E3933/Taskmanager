export default function() {

  this.get('/tasks', () => {
    console.log('called')
    return {
      data: [
        { id: 1, type: 'tasks', attributes: { name: 'Task1' } },
        { id: 2, type: 'tasks', attributes: { name: 'Task2' } },
        { id: 3, type: 'tasks', attributes: { name: 'Task3' } },
      ]
    };
  });

  this.post('/tasks');  //creating 
 
  this.patch('/tasks/:task_id');

  this.del('/tasks/:task_id');

  // this.del('/tasks/:task_id', (schema, request) => {
  //   let id = request.params.id;
  
  //   schema.tasks.find(id).destroy();
  // });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
