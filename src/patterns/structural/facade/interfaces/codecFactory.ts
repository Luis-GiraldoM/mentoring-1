import { MPEG4CompressionCodec } from './mpeg4CompressionCodec'
import { OggCompressionCodec } from './oggCompressionCodec'
import { VideoFile } from './videoFile'

export interface Codec {}

export class CodecFactory {
  extract(file: VideoFile): Codec | null {
    const [, format] = file.name.split('.')

    return this.getFromFormat(format)
  }

  getFromFormat(format: string): Codec | null {
    if (format === 'mp4') {
      return new MPEG4CompressionCodec()
    }

    if (format === 'ogg') {
      return new OggCompressionCodec()
    }

    return null
  }
}
