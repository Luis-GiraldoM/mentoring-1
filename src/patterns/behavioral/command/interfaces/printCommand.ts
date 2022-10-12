import { Command } from './command'

export class PrintCommand implements Command {
  private payload: string

  constructor(payload: string) {
    this.payload = payload
  }

  public execute(): void {
    console.log(`Print Command: Puedo hacer cosas simples como imprimir en consola: (${this.payload})`)
  }
}
