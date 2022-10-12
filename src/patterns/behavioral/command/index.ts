import { ComplexCommand } from './interfaces/complexCommand'
import { Invoker } from './interfaces/invoker'
import { PrintCommand } from './interfaces/printCommand'
import { Receiver } from './interfaces/receiver'

export const runCommandPattern = () => {
  const invoker = new Invoker()
  invoker.setOnStart(new PrintCommand('Estoy ciego'))

  const receiver = new Receiver()
  const onFinishCommand = new ComplexCommand(
    receiver,
    'Siendo atendido por el oftalmólogo',
    'mandando operación de ojos'
  )

  invoker.setOnFinish(onFinishCommand)

  invoker.doSomethingImportant()
}
