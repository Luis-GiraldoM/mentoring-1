export class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Trabajando en (${a}.)`)
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Trabajando en esta otra cosa (${b}.)`)
  }
}
