import { Observer } from './observer';

export class ConcreteObserverA<T> implements Observer<T> {
  public update(value: T): void {
    console.log('ConcreteObserverA: Reacted to the event.', value);
  }
}

export class ConcreteObserverB<T> implements Observer<T> {
  public update(value: T): void {
    console.log('ConcreteObserverB: Reacted to the event.', value);
  }
}
