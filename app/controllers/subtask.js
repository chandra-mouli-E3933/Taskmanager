import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class SubtaskController extends Controller {

    @action
    updateMessage(subtask){
        subtask.save().then(() => {
            this.transitionToRoute(`/tasks/${this.model.id}/subtasks`)
        }).catch(() => {
            console.log('Error occured while Editing Subtask')
        })
    }    

}
