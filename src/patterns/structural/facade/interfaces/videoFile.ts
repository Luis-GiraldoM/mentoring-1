export class VideoFile {
  private bytes: number[] = []
  constructor(public name: string) {
    // Leer archivo name
  }

  save() {
    console.log('Saving file with name:', this.name)
  }

  fromBytes(bytes: number[]) {
    this.bytes = bytes
  }
}
