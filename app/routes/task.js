import Route from '@ember/routing/route';
export default class TaskRoute extends Route {
    model(params){
        return this.store.peekRecord('task', params.task_id);
    }
}
