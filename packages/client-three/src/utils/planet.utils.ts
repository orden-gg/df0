import { WORLD_SIZE } from '../shared';
import { PLANET_CHANCE } from '../shared/constants/planet.constants';
import { PlanetCoords } from '../shared/models/planet';
import { CommonUtils } from './common.utils';

export class PlanetUtils {

  static getRandomCoords(planets: number): number[][] {
    const result: number[][] = []
    
    for (let index = 0; index < planets; index++) {
      result.push([
        CommonUtils.getRandomNumber(-1, 1),
        CommonUtils.getRandomNumber(-1, 1),
        CommonUtils.getRandomNumber(-1, 1)
      ])
    }

    return result;
  }

  static generatePlanetData(): PlanetCoords[] {
    const planetCoordinates: PlanetCoords[] = [];
  
    for (let x = 0; x < WORLD_SIZE; x++) {
      for (let y = 0; y < WORLD_SIZE; y++) {
        const random = Math.random();
  
        if (random < PLANET_CHANCE) {
          planetCoordinates.push({ x, y });
        }
      }
    }
  
    return planetCoordinates;
  }
}