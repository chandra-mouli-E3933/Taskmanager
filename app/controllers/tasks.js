import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class TasksController extends Controller {

    @action
    deleteMessage(task){  
      task.destroyRecord().catch(()=>{
          console.log('Error occured while Deleting Task')
      })
    }
}
