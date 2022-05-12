import { UserProfileBuilder } from './interfaces/userProfileBuilder'

export const runBuilderPattern = () => {
  const userProfileBuilder = new UserProfileBuilder()

  const firstLoginUser = userProfileBuilder.email('myemail@expe.co').build()

  const basicInformationUser = userProfileBuilder.name('Luis').lastName('Giraldo').email('myemail@expe.co').build()

  const fullUserInformation = userProfileBuilder
    .name('Luis')
    .lastName('Giraldo')
    .identification('1035...')
    .identificationType('CC')
    .email('myemail@expe.co')
    .birthDate(new Date(1996, 2, 11))
    .address('Bello - Ant')
    .build()

  console.log(firstLoginUser, basicInformationUser, fullUserInformation)
}
