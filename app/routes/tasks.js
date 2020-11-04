import RSVP from 'rsvp';
import Route from '@ember/routing/route';

export default class TasksRoute extends Route {
     model() {
        return RSVP.hash({
            tasks: this.store.findAll('task').catch(()=>{
                    console.log('Error occured while Fetching Tasks')
            }),
            task: this.store.createRecord('task', {})
        })
    }
}
