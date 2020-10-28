export default function() {

  this.get('/tasks')

  this.post('/tasks', (schema, request) => {
    let task = JSON.parse(request.requestBody);
    return schema.create("task", task);
  });  //creating 
 
  this.put('/tasks/:task_id', async(schema, request) => {
    const task = schema.tasks.find(request.params.task_id);
    const data = JSON.parse(request.requestBody);
    task.update({name: data.task.name});
    return new Response(204, {}, {});
  });

  this.del('/tasks/:task_id', (schema, request) => {
     let id = request.params.task_id;
     return schema.tasks.find(id).destroy();
  });

  this.get('/tasks/:task_id/subtasks');

  this.post('/subtasks', (schema, request) => {
      let subtask = JSON.parse(request.requestBody);
      return schema.create("subtask", subtask);
  });

  this.put('/subtasks/:subtask_id', (schema, request) => {
    const subtask = schema.subtasks.find(request.params.subtask_id);
    const data = JSON.parse(request.requestBody);
    subtask.update({name: data.subtask.name});
    return new Response(204, {}, {});
  });

  this.del('/subtasks/:subtask_id', (schema, request) => {
    let id = request.params.subtask_id;
    return schema.subtasks.find(id).destroy();
 });

  
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
