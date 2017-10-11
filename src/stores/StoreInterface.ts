export default interface StoreInterface {
  write(query: Object): void;
  read(query: Object): any;
}