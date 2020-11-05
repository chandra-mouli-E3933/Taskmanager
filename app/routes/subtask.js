import Route from '@ember/routing/route';
export default class SubtaskRoute extends Route {

    model(params){
        return this.store.peekRecord('subtask',params.subtask_id);
    }
    
}
