import Response from "ember-cli-mirage/response";

export default function() {

  this.get('/tasks', (schema, request) => {
    return schema.tasks.all();
  })

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
    return schema.tasks.find(request.params.task_id).destroy();
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
    return schema.subtasks.find(request.params.subtask_id).destroy();
 });

}