import Model, { attr, hasMany } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr name;
  @hasMany('subtask') subtasks;
}
