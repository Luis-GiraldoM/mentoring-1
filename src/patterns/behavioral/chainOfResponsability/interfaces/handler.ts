export interface Handler<C, R> {
  setNext(handler: Handler<C, R>): Handler<C, R>

  handle(request: C): R
}

export abstract class AbstractHandler<C, R> implements Handler<C, R> {
  private nextHandler: Handler<C, R> = null as any

  public setNext(handler: Handler<C, R>): Handler<C, R> {
    this.nextHandler = handler

    return handler
  }

  public handle(request: C): R {
    if (this.nextHandler) {
      return this.nextHandler.handle(request)
    }

    return null as any
  }
}
