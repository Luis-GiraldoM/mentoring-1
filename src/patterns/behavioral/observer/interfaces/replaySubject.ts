import { Observer } from './observer';
import { Subject } from './subject';

export class ReplaySubject<T> implements Subject<T> {
  private observers: Observer<T>[] = [];

  private history: T[] = [];

  constructor(private historyLength: number = 1) {}

  attach(observer: Observer<T>): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('Subject: Observer has been attached already.');
    }

    console.log('Subject: Attached an observer.');
    this.observers.push(observer);

    for (const entry of this.history) {
      observer.update(entry);
    }
  }

  detach(observer: Observer<T>): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('Subject: Nonexistent observer.');
    }

    this.observers.splice(observerIndex, 1);
    console.log('Subject: Detached an observer.');
  }

  notify(value: T): void {
    console.log('Subject: Notifying observers...');

    this.history.push(value);

    if (this.history.length > this.historyLength) {
      this.history.splice(0, 1);
    }

    for (const observer of this.observers) {
      observer.update(value);
    }
  }
}
