export default class Delivery {
  constructor(
    readonly distance: number,
    readonly volume: number,
    readonly density: number
  ) {
  }
  get price(){
    const total = this.distance * this.volume * (this.density/100)
    return total > 10 ? total : 10;
  }
}