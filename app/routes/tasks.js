import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TasksRoute extends Route {
    @service store;
    async model() {
        return this.store.findAll('task').then((task) => {
            console.log('Fetch Tasks sucessfull');
            return task;
        }).catch(()=>{
            console.log('Error occured while Fetching Tasks')
        })
    }

}
