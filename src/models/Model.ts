import ModelInterface from './ModelInterface';
import StoreInterface from '../stores/StoreInterface';

export default abstract class Model implements ModelInterface {
  readonly data: Object;
  static store: StoreInterface;
  abstract update(newData: Object): Model;
}