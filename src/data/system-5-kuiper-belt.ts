import { Region } from '../types/data';
import * as D from './text/descriptions-5-kuiper-belt';

export const KuiperBelt: Region = {
  name: 'Kuiper Belt',
  description: D.KuiperBelt,
  notableObjects: [
    {
      name: 'Pluto',
      description: D.Pluto,
      diameter: 2_377,
      mass: 1.303e22,
      density: 1_854,
      surfaceGravity: 0.620,
      escapeVelocity: 1_212,
      orbit: {
        radius: {
          min: 29.658,
          max: 49.305,
          avg: 39.482
        },
        period: 247.94,
        speed: 4.743
      }
    },
    {
      name: 'Haumea',
      description: D.Haumea,
      diameter: 1_560,
      mass: 4e21,
      density: 2_018,
      surfaceGravity: {min: 0.24,  max: 0.93},
      escapeVelocity: {min: 710,  max: 1000},
      orbit: {
        radius: {
          min: 34.647,
          max: 51.585,
          avg: 43.116
        },
        period: 283.12,
        speed: 4.53
      }
    },
    {
      name: 'Makemake',
      description: D.Makemake,
      diameter: 1_430,
      mass: 3.1e21,
      density: 2_000,
      surfaceGravity: 0.57,
      escapeVelocity: 910,
      orbit: {
        radius: {
          min: 38.104,
          max: 52.756,
          avg: 45.430
        },
        period: 306.21,
        speed: 4.419
      }
    },
    {
      name: 'Quaoar',
      description: D.Quaoar,
      diameter: 1_090,
      mass: 1.2e21,
      density: 1_715,
      surfaceGravity: {min: 0.19,  max: 0.37},
      escapeVelocity: {min: 500,  max: 590},
      orbit: {
        radius: {
          min: 41.900,
          max: 45.488,
          avg: 43.694
        },
        period: 288.83,
        speed: 4.6
      }
    },
    {
      name: 'Orcus',
      description: D.Orcus,
      diameter: 910,
      mass: 6.348e20,
      density: 1_400,
      surfaceGravity: 0.2,
      escapeVelocity: 430,
      orbit: {
        radius: {
          min: 30.281,
          max: 48.067,
          avg: 39.174
        },
        period: 245.19,
        speed: 4.76
      }
    }
  ]
}