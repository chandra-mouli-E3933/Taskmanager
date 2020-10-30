import ApplicationAdapter from './application';

export default class TaskAdapter extends ApplicationAdapter {

    urlForFindRecord(id, modelName, snapshot){
       let baseUrl = this.buildURL(modelName, id, snapshot);
        return `${baseUrl}/subtasks`;
    }  
}
