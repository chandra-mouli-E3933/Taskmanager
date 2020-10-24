import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';
export default class TaskController extends Controller {
    @tracked message = this.model.name
    @service store;
    
    @action 
    updateMessage(message){
           this.store.findRecord('task', this.model.id).then(function(task) {
            task.name = message
            task.save(); // => PATCH to '/posts/1'
          });
    }
    
}
