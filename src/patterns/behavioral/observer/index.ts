import {
  ConcreteObserverA,
  ConcreteObserverB,
} from './interfaces/concreteObservers';
// import { ConcreteSubject } from './interfaces/concreteSubject';
import { ReplaySubject } from './interfaces/replaySubject';

export const runObserverPattern = () => {
  const subject = new ReplaySubject<number>(2);

  const observer1 = new ConcreteObserverA<number>();
  subject.attach(observer1);

  subject.notify(23);
  subject.notify(10.54);

  const observer2 = new ConcreteObserverB<number>();
  subject.attach(observer2);

  subject.notify(3);

  subject.detach(observer1);

  subject.notify(10.51);

  subject.attach(observer1);
};
