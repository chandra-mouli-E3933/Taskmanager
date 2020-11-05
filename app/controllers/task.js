import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class TaskController extends Controller {
  
    @action 
    updateMessage(task){
      task.save().then(() => {
        this.transitionToRoute('tasks');
      }).catch(() => {
        console.log('Error occured while Editing task')
      })
    }
    
}
