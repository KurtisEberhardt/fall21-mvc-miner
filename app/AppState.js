import Item from './Models/Item.js'
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
items = [
  new Item({
    name: 'Wooden Sword',
    price: 25,
    quantity: 0,
    multiplier: 1,
    type: 'Active'
  }),
  new Item({
    name: 'Kokiri Sword',
    price: 50,
    quantity: 0,
    multiplier: 5,
    type: 'Active'
  }),
  new Item({
    name: 'Master Sword',
    price: 75, 
    quantity: 0, 
    multiplier: 7,
    type: 'Active'
  }),
  new Item({
    name: 'Goron Bracelet',
    price: 100,
    quantity: 0,
    multiplier: 5,
    type: 'Passive'
  }),
  new Item({
    name: 'Bomb',
    price : 150, 
    quantity: 0,
    multiplier: 10,
    type: 'Passive'
  }),
  new Item({
    name: 'Bunny Hood',
    price: 200, 
    quantity: 0,
    multiplier: 15,
    type: 'Passive'
  })
]
totalRupees=0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
