import { NotificatorDecorator } from './notificatorDecorator'

export class FacebookNotificatorDecorator extends NotificatorDecorator {
  send(message: string): void {
    super.send(message)

    console.log('Notificando a través del api de Facebook:', message)
  }
}
