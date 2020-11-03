import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';
export default class SubtaskController extends Controller {

    @service store;
    @service router;
    @tracked message = '';

    @action
    updateMessage(message){
        this.message = '';
        var subtask = this.store.peekRecord('subtask', this.model.subtask_id);
        subtask.name = message;
        subtask.save().then(() => {
            console.log('Editing Subtasks Sucessfull')
            this.transitionToRoute(`/tasks/${this.model.id}/subtasks`)
        }).catch(() => {
            console.log('Error occured while Editing Subtask')
        })
    }    

}
