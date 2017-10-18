import Injector from './Injector';

export default function inject(...keys: string[]): PropertyDecorator {
  if (keys.length < 1) throw new Error('Nothing to inject.');
  return (target: { [key: string]: any }, propertyKey: string) => {
    target[propertyKey] = keys.length > 1 ? keys.map(Injector.use) : Injector.use(keys[0]);
  };
}
