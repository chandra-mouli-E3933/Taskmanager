import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
export default class AddTaskComponent extends Component {
    @tracked messages = A([]);
    @tracked message = '';
    @tracked addInput = true;
    @tracked id = 1;
    @service router;
    @tracked routeName = false;

    
    @action
    addMessage(id, msg){
        if(this.router.currentRouteName === 'index'){
            this.routeName = true
        }
        this.messages.pushObject({id: id,name: msg})
        this.addInput = false;
        this.message = '';
        this.id = this.id + 1;
        console.log(this.routeName)
        console.log(this.args.task)
    }
}
