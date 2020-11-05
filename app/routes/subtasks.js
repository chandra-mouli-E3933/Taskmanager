import RSVP from 'rsvp';
import Route from '@ember/routing/route';

export default class SubtasksRoute extends Route {

    model(params) { 
        return  RSVP.hash({
          task: this.store.peekRecord('task', params.task_id),
          subtasks: this.store.findAll('subtask', {adapterOptions: {id: params.task_id}}).catch(()=>{
                console.log('Error occured while fetching subtasks')
            })
        })
    }
}
