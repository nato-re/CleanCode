export default class OrderCode {
  CODE_LENGTH = 8;
  readonly prefix: string;
  readonly suffix: string;
  constructor(id: number){
    this.prefix = this.generatePrefix()
    this.suffix = this.sequentialToString(id)
  }

  get value (){
    return `${this.prefix}${this.suffix}`
  }

  generatePrefix(){
    const year = new Date().getFullYear();
     return String(year);
  }

  sequentialToString(id: number):string{
    const idLength = String(id).length
    const preId = Array(this.CODE_LENGTH - idLength).fill(0).join('');
    return `${preId}${id}`
  }
}