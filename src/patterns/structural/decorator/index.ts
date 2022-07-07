import { EmailNotificator } from './interfaces/emailNotificator'
import { FacebookNotificatorDecorator } from './interfaces/facebookNotificator'
import { Notificator } from './interfaces/notificator'
import { SlackNotificatorDecorator } from './interfaces/slackNotificator'
import { SMSNotificatorDecorator } from './interfaces/SMSNotificator'

const FACEBOOK = 'FACEBOOK'
const SLACK = 'SLACK'
const SMS = 'SMS'

const enabledNotifiers = [FACEBOOK, SLACK, SMS]

export const runDecoratorPattern = () => {
  let notificatorStack: Notificator = new EmailNotificator()

  if (enabledNotifiers.includes(FACEBOOK)) {
    notificatorStack = new FacebookNotificatorDecorator(notificatorStack)
  }

  if (enabledNotifiers.includes(SLACK)) {
    notificatorStack = new SlackNotificatorDecorator(notificatorStack)
  }

  if (enabledNotifiers.includes(SMS)) {
    notificatorStack = new SMSNotificatorDecorator(notificatorStack)
  }

  notificatorStack.send('¡Hola mundo!')
}
