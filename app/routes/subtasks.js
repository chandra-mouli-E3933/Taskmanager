import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class SubtasksRoute extends Route {
    @service store;
    async model(params) {
        return this.store.findRecord('task', params.task_id, {
            include: 'subtasks'
          });
    }
}

