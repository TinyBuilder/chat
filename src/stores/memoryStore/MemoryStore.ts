import SimpleKeyValueStoreInterface from '../SimpleKeyValueStoreInterface';

export default class MemoryStore implements SimpleKeyValueStoreInterface {
  private data: { [key: string]: any };

  constructor(data: Object) {
    this.data = data;
  }

  write(query: { key: string; value: any }) {
    this.data[query.key] = query.value;
  }

  read(key: string) {
    return this.data[key];
  }
}
