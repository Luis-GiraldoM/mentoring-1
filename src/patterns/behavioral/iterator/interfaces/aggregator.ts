import { Iterator } from './iterator'

export interface Aggregator<T> {
  getIterator(): Iterator<T>
}
