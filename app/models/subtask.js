import Model, {attr, belongsTo} from '@ember-data/model';

export default class SubtaskModel extends Model {
@attr name;
@belongsTo('task') task;
}
