import StoreInterface from './StoreInterface';

export default interface SimpleKeyValueStoreInterface extends StoreInterface {
  write(query: { key: string; value: any }): void;
  read(key: string): any;
};
