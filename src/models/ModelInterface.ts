export default interface ModelInterface {
  readonly data: Object;
  update(newData: Object): ModelInterface;
}