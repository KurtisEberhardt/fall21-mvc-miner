import {ProxyState} from '../AppState.js'

class ItemService{
    buyItem(key){
        let upgrade = ProxyState.items.find(i=> i.name === key)
        if(ProxyState.totalRupees >= upgrade.price){
            upgrade.quantity++
            ProxyState.totalRupees -= upgrade.price
            upgrade.price += upgrade.price *0.10
        }else
        //@ts-ignore
        Swal.fire({
            title: "You're broke!",
            text: "Go cut more grass, idiot.",
            timer: 2000
        })
    }
    collectPassive(){
        ProxyState.items.forEach(i =>{
            if(i.type === 'Passive'){
                ProxyState.totalRupees += (i.quantity * i.multiplier)
            }
        })
    }
    startInterval(){
        let collectionInterval = setInterval(this.collectPassive, 3000)
    }
}
export const itemService = new ItemService()