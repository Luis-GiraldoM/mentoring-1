import { EmailNotificator } from './interfaces/EmailNotificator'
import { Notificator } from './interfaces/notificator'
const FACEBOOK = 'FACEBOOK'
const SLACK = 'SLACK'
const SMS = 'SMS'

const enabledNotifiers = [FACEBOOK, SLACK, SMS]

export const runDecoratorPattern = () => {
  let notificatorStack: Notificator = new EmailNotificator()

  notificatorStack.send('¡Hola mundo!')
}
