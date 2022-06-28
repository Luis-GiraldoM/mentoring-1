import { Notificator } from './notificator'

export class NotificatorDecorator implements Notificator {
  constructor(private notificator: Notificator) {}

  send(message: string): void {
    this.notificator.send(message)
  }
}
