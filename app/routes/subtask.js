import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import {tracked} from '@glimmer/tracking';
export default class SubtaskRoute extends Route {

    @service store;
    model(params){
        let subtask = {
            id: params.task_id,
            subtask_id: params.subtask_id,
        }
        return subtask;
    }
    
}
