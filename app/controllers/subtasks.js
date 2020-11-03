import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking'
export default class SubtasksController extends Controller {

    @action
    deleteMessage(record){
          record.destroyRecord().then(()=> {
            console.log('Deleted SubTask sucessfull');
            }).catch(()=>{
                console.log('Error occured while Deleting SubTask')
            })
    }
}
