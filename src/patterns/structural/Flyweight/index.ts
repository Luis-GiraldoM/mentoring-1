import { Inventory } from './interfaces/inventory'
export const runFlyweightPattern = () => {
  const inventory: Inventory = new Inventory()

  inventory.executeOrder('AlienWare laptop', 2500)
  inventory.executeOrder('SkullCandy HeadPhones', 150)
  inventory.executeOrder('Playstation 5', 500)
  inventory.executeOrder('SkullCandy HeadPhones', 130)
  inventory.executeOrder('AlienWare laptop', 3000)
  inventory.executeOrder('Playstation 5', 600)

  inventory.process()
  console.log('The total number of products is:', inventory.getTotalProducts())
}
