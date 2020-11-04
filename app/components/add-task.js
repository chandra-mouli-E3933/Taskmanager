import Component from '@glimmer/component';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';
export default class AddTaskComponent extends Component {
    @service store;
    @service router;

    @action
    addMessage(msg){
        this.args.task.name = '';
        if(this.router.currentRouteName === 'tasks'){
            var task = this.store.createRecord('task', {
                name: msg
            });
    
            task.save().catch(()=>{
                console.log('Error occured')
            })
        }
        if(this.router.currentRouteName === 'subtasks'){
            let task = this.store.peekRecord('task', this.args.id);
            let subtask = this.store.createRecord('subtask',{
                name: msg,
                task: task
              });
            subtask.save().catch(()=>{
                console.log('Error occured while creating')
            })
        }
          
    }
}
