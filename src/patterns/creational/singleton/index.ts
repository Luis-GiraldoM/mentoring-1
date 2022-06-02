import { CounterState } from './interfaces/counterState'
export const runSingletonPattern = () => {
  setTimeout(() => {
    const myState = CounterState.getInstance()

    myState.add()

    console.log(myState.getCount())
  }, 200)

  setTimeout(() => {
    const myState = CounterState.getInstance()

    myState.add()

    console.log(myState.getCount())
  }, 50)
}
