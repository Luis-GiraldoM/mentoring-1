import { Command } from './command'
import { Receiver } from './receiver'

export class ComplexCommand implements Command {
  private receiver: Receiver

  private a: string

  private b: string

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver
    this.a = a
    this.b = b
  }

  public execute(): void {
    // console.log('ComplexCommand: Las cosas complejas se deben hacer a través de un Receiver')
    this.receiver.doSomething(this.a)
    this.receiver.doSomethingElse(this.b)
  }
}
