import { VideoConverter } from './interfaces/videoConverter'

export const runFacadePattern = () => {
  const convertor = new VideoConverter()
  const mp4 = convertor.convert('funny-cats-video.mp4', 'ogg')
  mp4.save()
}
