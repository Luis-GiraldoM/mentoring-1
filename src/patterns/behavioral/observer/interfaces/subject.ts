import { Observer } from './observer';

export interface Subject<T> {
  attach(observer: Observer<T>): void;

  detach(observer: Observer<T>): void;

  notify(value: T): void;
}
