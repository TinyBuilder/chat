import injectables from './injectables';

export default class Injector {
  private static injectables: { [key: string]: any } = injectables;

  static register(key: string, injectable: any) {
    if (this.injectables[key]) throw new Error(`Injectable key ${key} already in use.`);
    console.log(`Registering ${key}: ${injectable.constructor.name}.`);
    this.injectables[key] = injectable;
  }

  static use(key: string) {
    if (!this.injectables[key]) throw new Error(`Injectable key ${key} is not set.`);
    console.log(`Injecting ${key}: ${this.injectables[key].constructor.name}.`);
    return this.injectables[key];
  }
}
