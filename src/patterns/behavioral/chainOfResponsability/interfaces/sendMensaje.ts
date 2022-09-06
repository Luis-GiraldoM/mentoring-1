import { AbstractHandler } from './handler'
import { ResponseEntity } from './responseEntity'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export class SendMessage extends AbstractHandler<string, ResponseEntity> {
  public handle(request: string): ResponseEntity {
    const isSent = getRandomInt(3) // 0 , 1

    console.log(isSent)

    if (!isSent) {
      return { status: '500', message: 'No se ha podido enviar el mensaje, desea reintentar?' }
    }

    return super.handle(request)
  }
}
