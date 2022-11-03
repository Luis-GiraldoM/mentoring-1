export interface Memento<T> {
  getState(): T;

  getDate(): Date;
}
