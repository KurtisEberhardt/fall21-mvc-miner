import { ProxyState } from "../AppState.js"

class RupeeService{
    cutGrass(){
        ProxyState.totalRupees++
        ProxyState.items.forEach(i => ProxyState.totalRupees += (i.quantity * i.multiplier))
    }
}

export const rupeeService = new RupeeService()