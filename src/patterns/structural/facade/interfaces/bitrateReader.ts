import { Codec } from './codecFactory'
export class BitrateReader {
  public read(filename: string, sourceCode: Codec): number[] {
    console.log('Reader bytes from', filename, 'using codec', sourceCode)

    return [3213, 324, 324432, 32432, 4324, 32432]
  }

  public convert(buffer: number[], destinationCode: Codec) {
    console.log('Reading buffer', buffer, 'using codec', destinationCode)

    return buffer.map((bytes) => bytes * 2)
  }
}
