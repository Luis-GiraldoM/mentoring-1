import { NotificatorDecorator } from './notificatorDecorator'

export class SMSNotificatorDecorator extends NotificatorDecorator {
  send(message: string): void {
    super.send(message)

    console.log('Enviando mensaje a +57 310 000 0000:', message)
  }
}
