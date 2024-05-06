import { Region } from '../types/data';
import * as D from './text/descriptions-6-scattered-disc';

export const ScatteredDisc: Region = {
  name: 'Scattered Disc',
  description: D.ScatteredDisc,
  notableObjects: [
    {
      name: 'Eris',
      description: D.Eris,
      diameter: 2_326,
      mass: 1.647e22,
      density: 2_430,
      surfaceGravity: 0.82,
      escapeVelocity: 1_380,
      orbit: {
        radius: {
          min: 38.271,
          max: 97.457,
          avg: 67.864
        },
        period: 559.07,
        speed: 3.434
      }
    },
    {
      name: 'Gonggong',
      description: D.Gonggong,
      diameter: 1_230,
      mass: 1.75e21,
      density: 1_740,
      surfaceGravity: 0.31,
      escapeVelocity: 620,
      orbit: {
        radius: {
          min: 33.781,
          max: 101.190,
          avg: 67.485
        },
        period: 554.37,
        speed: 1.1
      }
    }
  ]
}