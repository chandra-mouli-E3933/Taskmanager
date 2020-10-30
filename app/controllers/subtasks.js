import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class SubtasksController extends Controller {

    @action
    deleteMessage(record){
          record.destroyRecord();
    }
}
