import StoreInterface from './StoreInterface';

export function setStore(store: StoreInterface) {
  return (target: any, key: string) => {
    target[key] = store;
  }
}
