export default class Dimensions {
  constructor(
    readonly x: number,
    readonly y: number,
    readonly z: number
  ) {
    this.validate();
  }
  validate() {
    const someDimensionInvalid = [this.x, this.y, this.z].some(dimension => dimension < 0);
    if (someDimensionInvalid) throw Error('Invalid Dimension');
  }
}