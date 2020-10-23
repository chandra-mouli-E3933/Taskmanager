import Route from '@ember/routing/route';

export default class TaskRoute extends Route {
    get message(){
        console.log("hola")
        return "Hi from message";
    }
}

