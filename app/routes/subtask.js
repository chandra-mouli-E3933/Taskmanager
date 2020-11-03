import Route from '@ember/routing/route';
export default class SubtaskRoute extends Route {

    model(params){
        let subtask = {
            id: params.task_id,
            subtask_id: params.subtask_id,
            subtask: this.store.peekRecord('subtask',params.subtask_id)
        }
        return subtask;
    }
    
}
