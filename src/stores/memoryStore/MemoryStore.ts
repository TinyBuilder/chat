import SimpleKeyValueStoreInterface from '../SimpleKeyValueStoreInterface';

export default class MemoryStore implements SimpleKeyValueStoreInterface {
  private data: { [key: string]: any };

  constructor(data?: Object) {
    this.data = data ? data : {};
  }

  write(query: { key: string; value: any }) {
    this.data[query.key] = query.value;
    console.log(`${query.key}: ${query.value} saved into memory.`);
  }

  read(key: string) {
    console.log(`Loading ${key} from memory.`);
    return this.data[key];
  }
}
