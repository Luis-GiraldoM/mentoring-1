export class AudioMixer {
  fix(buffer: number[]): number[] {
    return buffer.map((bytes) => {
      const maximum = bytes % 450

      return bytes - maximum
    })
  }
}
