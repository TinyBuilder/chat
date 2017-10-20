import ModelInterface from './ModelInterface';
import StoreInterface from '../stores/StoreInterface';
import inject from '../injector/inject';

export default abstract class Model implements ModelInterface {
  readonly data: Object;

  @inject('store') readonly store: StoreInterface;

  abstract update(newData: Object): Model;

  abstract save(): Model;

  static load(query: any) {
    return query;
  }
}
