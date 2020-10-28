import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {tracked} from '@glimmer/tracking';
export default class SubtaskRoute extends Route {

    @service store;
    model(params){
        let task = this.modelFor('subtasks');
        
        console.log(task.subtasks[params.subtask_id])
        let subtask = {
            id: params.task_id,
            subtask_id: params.subtask_id,
        }
        return subtask;
    }
    
}
