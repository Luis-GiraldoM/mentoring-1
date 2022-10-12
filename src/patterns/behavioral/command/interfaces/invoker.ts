import { Command } from './command'

export class Invoker {
  private onStart: Command = null as any

  private onFinish: Command = null as any

  public setOnStart(command: Command): void {
    this.onStart = command
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command
  }

  public doSomethingImportant(): void {
    console.log('Invoker: Qué hay que hacer con el paciente?')
    if (this.isCommand(this.onStart)) {
      this.onStart.execute()
    }

    console.log('Invoker: ...agendar cita oftalmólogo...')

    console.log('Invoker: Que debe hacer ahora el paciente?')
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute()
    }
  }

  private isCommand(object: any): object is Command {
    return object.execute !== undefined
  }
}
