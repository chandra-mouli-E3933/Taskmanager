import ApplicationAdapter from './application';

export default class SubtaskAdapter extends ApplicationAdapter {
    urlForCreateRecord(modelName, snapshot){
        let taskId = snapshot.belongsTo('task').id
        return `/tasks/${taskId}/subtasks`
    }

    urlForUpdateRecord(id, modelName, snapshot) {
        let taskId = snapshot.belongsTo('task').id;
        return `/tasks/${taskId}/subtasks/${id}`
    }

    urlForDeleteRecord(id, modelName, snapshot) {
        let taskId = snapshot.belongsTo('task').id;
        return `/tasks/${taskId}/subtasks/${id}`
    }
}
