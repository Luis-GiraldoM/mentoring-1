import { AbstractHandler } from './handler'
import { ResponseEntity } from './responseEntity'

export class CreateBackup extends AbstractHandler<string, ResponseEntity> {
  public handle(request: string): ResponseEntity {
    if (!request) {
      return { status: '400', message: 'Debe enviar un mensaje' }
    }

    console.log('Guardando mensaje en BD')

    return super.handle(request)
  }
}
