import { AudioMixer } from './audioMixer'
import { BitrateReader } from './bitrateReader'
import { CodecFactory } from './codecFactory'
import { VideoFile } from './videoFile'

export class VideoConverter {
  convert(filename: string, format: string) {
    const fileToConvert: VideoFile = new VideoFile(filename)

    const codecFactory = new CodecFactory()

    const sourceCodec = codecFactory.extract(fileToConvert)
    const destinationCodec = codecFactory.getFromFormat(format)

    if (!sourceCodec || !destinationCodec) {
      throw new Error('Codec not supported')
    }

    const bitrateReader = new BitrateReader()

    const buffer = bitrateReader.read(filename, sourceCodec)
    let result = bitrateReader.convert(buffer, destinationCodec)
    result = new AudioMixer().fix(result)

    console.log('Resulting bytes', result)

    const convertedVideoFile = new VideoFile(filename.split('.')[0] + '.' + format)
    convertedVideoFile.fromBytes(result)

    return convertedVideoFile
  }
}
