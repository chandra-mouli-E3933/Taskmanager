import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
export default class SubtasksRoute extends Route {
    @service store;

    model(params) { 
        return  RSVP.hash({
          task: this.store.peekRecord('task', params.task_id),
          subtasks: this.store.findAll('subtask', {adapterOptions: {id: params.task_id}})
        })
    }
}
