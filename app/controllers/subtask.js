import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class SubtaskController extends Controller {

    @action
    updateMessage(message,subtask){
        subtask.name = message;
        subtask.save().then(() => {
            this.transitionToRoute(`/tasks/${this.model.id}/subtasks`)
        }).catch(() => {
            console.log('Error occured while Editing Subtask')
        })
    }    

}
