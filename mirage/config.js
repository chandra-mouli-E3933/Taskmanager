export default function() {

  this.get('/tasks')

  this.post('/tasks', (schema, request) => {
    let {task} = JSON.parse(request.requestBody);
    return schema.create("task", {name: task.name});
  });  //creating 
 
  this.put('/tasks/:task_id', async(schema, request) => {
    const updatedTask = schema.tasks.find(request.params.task_id);
    const {task} = JSON.parse(request.requestBody);
    updatedTask.update({name: task.name});
    return new Response(204, {}, {});
  });

  this.del('/tasks/:task_id', (schema, request) => {
     let id = request.params.task_id;
     return schema.tasks.find(id).destroy();
  });

  this.get('/tasks/:task_id/subtasks', (schema, request) => {
    return schema.tasks.find(request.params.task_id).subtasks;
  });

  this.post('/tasks/:task_id/subtasks', (schema, request) => {
    let { subtask } = JSON.parse(request.requestBody);
    let task = schema.tasks.find(request.params.task_id);
    return schema.create("subtask", { name: subtask.name, taskId: request.params.task_id });
  });

  this.put('/tasks/:task_id/subtasks/:subtask_id', (schema, request) => {
    const updatedSubtask = schema.subtasks.find(request.params.subtask_id);
    const {subtask} = JSON.parse(request.requestBody);
    updatedSubtask.update({name: subtask.name});
    return new Response(204, {}, {});
  });

  this.del('/tasks/:task_id/subtasks/:subtask_id', (schema, request) => {
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
