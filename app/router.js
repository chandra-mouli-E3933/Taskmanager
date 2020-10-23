import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('task', {path: '/tasks/:task_id'});
  this.route('index', {path: '/tasks'}); // Home Page
  this.route('subtask', {path: '/tasks/:task_id/subtasks/:subtask_id'});
});
