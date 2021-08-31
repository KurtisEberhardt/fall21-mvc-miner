import {ProxyState} from '../AppState.js'
import {itemService} from '../Services/ItemService.js'

function _draw(){
    let template = ''

    ProxyState.items.forEach(i=> {
        template += /*html*/`
        <button onclick="app.itemController.buyItem('${i.name}')">${i.name} - ${i.price}</button>
        `
    })
    document.getElementById('Shop').innerHTML = template
}

export default class ItemController{
    constructor(){
        _draw()
        itemService.startInterval()
        ProxyState.on("items", _draw)
    }

    buyItem(key){
        itemService.buyItem(key)
        _draw()
    }
}