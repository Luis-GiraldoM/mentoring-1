import { MPEG4CompressionCodec } from './mpeg4CompressionCodec'
import { OggCompressionCodec } from './oggCompressionCodec'
import { VideoFile } from './videoFile'

export interface Codec {}

export class CodecFactory {
  extract(file: VideoFile): Codec | null {
    const [, extension] = file.name.split('.')
    if (extension === 'mp4') {
      return new MPEG4CompressionCodec()
    }

    if (extension === 'ogg') {
      return new OggCompressionCodec()
    }

    return null
  }
}
