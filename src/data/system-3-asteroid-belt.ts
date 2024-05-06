import { Region } from '../types/data';
import * as D from './text/descriptions-3-asteroid-belt';

export const AsteroidBelt: Region = {
  name: 'Asteroid Belt',
  description: D.AsteroidBelt,
  notableObjects: [
    {
      name: 'Ceres',
      description: D.Ceres,
      diameter: 939.4,
      mass: 9.3839e20,
      density: 2_162,
      surfaceGravity: 0.284,
      escapeVelocity: 516,
      orbit: {
        radius: {
          min: 2.55,
          max: 2.98,
          avg: 2.77
        },
        period: 4.60,
        speed: 17.9
      }
    },
    {
      name: 'Vesta',
      description: D.Vesta,
      diameter: 525.4,
      mass: 2.59e20,
      density: 3_456,
      surfaceGravity: 0.25,
      escapeVelocity: 360,
      orbit: {
        radius: {
          min: 2.15,
          max: 2.57,
          avg: 2.36
        },
        period: 3.63,
        speed: 19.34
      }
    },
    {
      name: 'Pallas',
      description: D.Pallas,
      diameter: 512,
      mass: 2.04e20,
      density: 2_890,
      surfaceGravity: 0.21,
      escapeVelocity: 324,
      orbit: {
        radius: {
          min: 2.13,
          max: 2.77,
          avg: 3.41
        },
        period: 4.611,
        speed: 35.5
      }
    },
    {
      name: 'Hygiea',
      description: D.Hygiea,
      diameter: 433,
      mass: 8.74e19,
      density: 2_060,
      surfaceGravity: 0.034,
      escapeVelocity: 260,
      orbit: {
        radius: {
          min: 2.7882,
          max: 3.4948,
          avg: 3.1415
        },
        period: 5.57,
        speed: 16.76
      }
    }
  ]
}