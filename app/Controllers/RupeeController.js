import {ProxyState} from '../AppState.js'
import {rupeeService} from '../Services/RupeeService.js'

function _draw(){
    document.getElementById('Rupees').innerText = ProxyState.totalRupees
}

export default class RupeeController{
    constructor(){
        _draw()
        ProxyState.on('totalRupees', _draw)
    }

    cutGrass(){
        rupeeService.cutGrass()
    }
}