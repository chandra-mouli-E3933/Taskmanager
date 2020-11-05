import Component from '@glimmer/component';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';
import {tracked} from '@glimmer/tracking';
export default class AddTaskComponent extends Component {
    @service store;
    @service router;
    
    @tracked newtask;
    constructor(){
        super(...arguments);
        if(this.router.currentRouteName === 'tasks'){
            this.newtask = this.store.createRecord('task', {});
        }
        if(this.router.currentRouteName === 'subtasks'){
            this.newtask = this.store.createRecord('subtask', {});
        }
    }
    @action
    addMessage(){ 
        if(this.router.currentRouteName === 'tasks'){   
            this.newtask.save().then(()=> {
                this.newtask = this.store.createRecord('task', {});
            
            }).catch((e)=>{
                console.log('Error occured' + e);
            })
        }

        if(this.router.currentRouteName === 'subtasks'){
           this.newtask.task = this.args.task
           this.newtask.save().then(()=> {
                this.newtask = this.store.createRecord('subtask', {});
            }).catch(()=>{
                console.log('Error occured while creating')
            })
        }
          
    }
}
