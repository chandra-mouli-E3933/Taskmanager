import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class SubtasksController extends Controller {
    
    @action
    deleteMessage(id){
        console.log(id)
        var record = this.store.peekRecord('subtask', id);
        if (record !== null){
          record.destroyRecord();
        } else {
          this.store.findRecord('subtask', id).then(function(record){
            record.destroyRecord();
          })
        }
    }
}
