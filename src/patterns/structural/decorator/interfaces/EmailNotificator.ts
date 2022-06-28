import { Notificator } from './notificator'

export class EmailNotificator implements Notificator {
  send(message: string) {
    console.log('Enviando mensaje:', message, ' a los correos: pepito@gmail.com, junito@gmail.com, peranito@gmail.com')
  }
}
