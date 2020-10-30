import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';
export default class TaskController extends Controller {
    @tracked message = '';
    @service store;
  
    @action 
    updateMessage(message,task){
      task.name = message;
      task.save();
    }
    
}
