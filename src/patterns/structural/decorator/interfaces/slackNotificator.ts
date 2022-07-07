import { NotificatorDecorator } from './notificatorDecorator'

export class SlackNotificatorDecorator extends NotificatorDecorator {
  send(message: string): void {
    super.send(message)

    console.log('Enviando mensaje a través del api de Slack:', message)
  }
}
