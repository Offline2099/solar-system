import { Planet } from '../types/data';
import * as D from './text/descriptions-2-inner-planets';

export const Mercury: Planet = {
  name: 'Mercury',
  description: D.Mercury,
  radius: 2_440,
  mass: .055,
  density: 5_427,
  surfaceGravity: 3.7,
  escapeVelocity: 4.25,
  orbit: {
    radius: {
      min: .3075,
      max: .4667,
      avg: .3871
    },
    period: .3175,
    speed: 47.36
  },
  rotation: {
    sidereal: 59,
    synodic: 176,
    tilt: 0.034
  },
  moons: []
}

export const Venus: Planet = {
  name: 'Venus',
  description: D.Venus,
  radius: 6_052,
  mass: .815,
  density: 5_243,
  surfaceGravity: 8.87,
  escapeVelocity: 10.36,
  orbit: {
    radius: {
      min: .7184,
      max: .7282,
      avg: .7233
    },
    period: 0.6156,
    speed: 35.02
  },
  rotation: {
    sidereal: 243,
    synodic: 117,
    tilt: 177.36
  },
  moons: []
}

export const Earth: Planet = {
  name: 'Earth',
  description: D.Earth,
  radius: 6_371,
  mass: 1,
  density: 5_513,
  surfaceGravity: 9.81,
  escapeVelocity: 11.19,
  orbit: {
    radius: {
      min: .9833,
      max: 1.0167,
      avg: 1
    },
    period: 1,
    speed: 29.78
  },
  rotation: {
    sidereal: 0.997,
    synodic: 1,
    tilt: 23.44
  },
  moons: [
    {
      name: 'Moon',
      description: D.Moon,
      radius: 1_737,
      mass: 7.342e22,
      density: 3_344,
      surfaceGravity: 1.622,
      escapeVelocity: 2_380,
      orbit: {
        radius: {
          min: 362_600,
          max: 405_400,
          avg: 384_399
        },
        period: 27.321,
        speed: 1.022
      }
    }
  ]
}

export const Mars: Planet = {
  name: 'Mars',
  description: D.Mars,
  radius: 3_389,
  mass: 0.107,
  density: 3_934,
  surfaceGravity: 3.72,
  escapeVelocity: 5.027,
  orbit: {
    radius: {
      min: 1.3814,
      max: 1.6662,
      avg: 1.5236
    },
    period: 1.8809,
    speed: 24.07
  },
  rotation: {
    sidereal: 1.025,
    synodic: 1.027,
    tilt: 25.19
  },
  moons: [
    {
      name: 'Phobos',
      description: D.Phobos,
      radius: 11.08,
      mass: 1.06e16,
      density: 1_861,
      surfaceGravity: 0.0057,
      escapeVelocity: 11.39,
      orbit: {
        radius: {
          min: 9_234,
          max: 9_517,
          avg: 9_376
        },
        period: 0.318,
        speed: 2.138
      }
    },
    {
      name: 'Deimos',
      description: D.Deimos,
      radius: 6.27,
      mass: 1.51e15,
      density: 1_465,
      surfaceGravity: 0.003,
      escapeVelocity: 5.56,
      orbit: {
        radius: {
          min: 23_455,
          max: 23_471,
          avg: 23_463
        },
        period: 1.263,
        speed: 1.351
      }
    }
  ]
}