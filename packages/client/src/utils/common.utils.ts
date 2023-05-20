export class CommonUtils {
  static  getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}