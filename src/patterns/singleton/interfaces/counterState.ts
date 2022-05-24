export class CounterState {
  private static instance: CounterState

  static getInstance() {
    if (!this.instance) {
      this.instance = new CounterState()
    }

    return this.instance
  }

  private constructor() {
    // No instanciable desde afuera
  }

  private count: number = 0

  getCount() {
    return this.count
  }

  add() {
    this.count += 1
  }

  rest() {
    this.count -= 1
  }
}
