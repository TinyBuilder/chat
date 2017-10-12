import ModelInterface from './ModelInterface';
import StoreInterface from '../stores/StoreInterface';
import inject from '../injector/inject';

export default abstract class Model implements ModelInterface {
  readonly data: Object;

  @inject('persistentStore') static persistentStore: StoreInterface;

  @inject('runtimeStore') static runtimeStore: StoreInterface;

  abstract update(newData: Object): Model;

  abstract save(): Model;

  static loadFromPersistent(query: any) {
    return this.persistentStore.read(query);
  }

  static loadFromRuntime(query: any) {
    return this.runtimeStore.read(query);
  }
}
