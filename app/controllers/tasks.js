import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import {action} from '@ember/object';
export default class TasksController extends Controller {
    @service store;

    @action
    deleteMessage(id){
        // let deletedTask = this.store.peekRecord('task', id);
        // if(deletedTask){
        //     deletedTask.destroyRecord();
        // }


        // this.store.findRecord('task',id, { reload: true }).then(record => {
        //      record.destroyRecord();
        //   });

        var record = this.store.peekRecord('task', 1);
        if (record !== null){
          record.destroyRecord();
        } else {
          this.store.findRecord('task', 1).then(function(record){
            record.destroyRecord();
          })
        }
    }
}
