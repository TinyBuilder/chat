import fs from 'fs';
import path from 'path';

const defaultConfigPath = path.posix.join(__dirname, '../../chat-config.json');

export default class Config {
  runtimeDataStore: string;
  persistentDataStore: string;

  constructor(configPath = defaultConfigPath) {
    const configs = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    this.runtimeDataStore = configs.runtimeDataStore;
    this.persistentDataStore = configs.persistentDataStore;
  }
}
