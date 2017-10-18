export default class Injector {
  private static injectables: { [key: string]: any };

  static register(key: string, injectable: any) {
    if (this.injectables[key]) throw new Error(`Injectable key ${key} already in use.`);
    this.injectables[key] = injectable;
  }

  static use(key: string) {
    if (!this.injectables[key]) throw new Error(`Injectable key ${key} is not set.`);
    return this.injectables[key];
  }
}
