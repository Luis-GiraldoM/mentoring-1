import { AbstractHandler } from './handler'
import { ResponseEntity } from './responseEntity'

export class UpdateBackup extends AbstractHandler<string, ResponseEntity> {
  public handle(request: string): ResponseEntity {
    console.log('Actualizando en BD...', request)
    console.log('¡Mensaje Actualizado!')

    return { status: '201', message: 'Mensaje enviado con éxito' }
  }
}
