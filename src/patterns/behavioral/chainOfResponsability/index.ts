import { CreateBackup } from './interfaces/createBackup'
import { Handler } from './interfaces/handler'
import { ResponseEntity } from './interfaces/responseEntity'
import { SendMessage } from './interfaces/sendMensaje'
import { UpdateBackup } from './interfaces/updateBackup'

class MessageService {
  constructor(private client: Handler<string, ResponseEntity>) {}

  sendMessage(message: string) {
    return this.client.handle(message)
  }
}

export const runChainOfResponsibilityPattern = () => {
  const client: Handler<string, ResponseEntity> = new CreateBackup()

  client.setNext(new SendMessage()).setNext(new UpdateBackup())

  const messageService = new MessageService(client)

  let result = messageService.sendMessage('¡Hola mundo!')

  console.log(result)
  console.log('************************************************************')

  result = messageService.sendMessage('Estas son las metorías con Lucho')

  console.log(result)
  console.log('************************************************************')
}
