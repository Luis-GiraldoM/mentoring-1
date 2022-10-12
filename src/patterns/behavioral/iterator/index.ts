import { Iterator } from './interfaces/iterator'
import { WordsCollection } from './interfaces/wordsCollection'

const clientClass = (collection: Iterator<string>) => {
  while (collection.valid()) {
    const element = collection.next()
    console.log(element)
  }
}

export const runIteratorPattern = () => {
  const myCollection = new WordsCollection()

  myCollection.addItem('Hola')
  myCollection.addItem('mundo')
  myCollection.addItem('este')
  myCollection.addItem('es')
  myCollection.addItem('el')
  myCollection.addItem('patrón')
  myCollection.addItem('iterador')

  clientClass(myCollection.getIterator())
  clientClass(myCollection.getReverseIterator())
}
