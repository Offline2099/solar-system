import { Planet } from '../types/data';
import * as D from './text/descriptions-4-outer-panets';

export const Jupiter: Planet = {
  name: 'Jupiter',
  description: D.Jupiter,
  radius: 69_911,
  mass: 317.8,
  density: 1_326,
  surfaceGravity: 24.79,
  escapeVelocity: 59.5,
  orbit: {
    radius: {
      min: 4.9506,
      max: 5.4570,
      avg: 5.2038
    },
    period: 11.862,
    speed: 47.05
  },
  rotation: {
    sidereal: .414,
    synodic: .414,
    tilt: 3.13
  },
  moons: [
    {
      name: 'Ganymede',
      description: D.Ganymede,
      radius: 2_634,
      mass: 1.482e23,
      density: 1_936,
      surfaceGravity: 1.428,
      escapeVelocity: 2_741,
      orbit: {
        radius: {
          min: 1_069_200,
          max: 1_071_600,
          avg: 1_070_400
        },
        period: 7.155,
        speed: 10.88
      }
    },
    {
      name: 'Callisto',
      description: D.Callisto,
      radius: 2_410,
      mass: 1.076e23,
      density: 1_834,
      surfaceGravity: 1.235,
      escapeVelocity: 2_441,
      orbit: {
        radius: {
          min: 1_869_000,
          max: 1_897_000,
          avg: 1_882_700
        },
        period: 16.689,
        speed: 8.204
      }
    },
    {
      name: 'Io',
      description: D.Io,
      radius: 1_822,
      mass: 8.931e22,
      density: 3_528,
      surfaceGravity: 1.797,
      escapeVelocity: 2_558,
      orbit: {
        radius: {
          min: 420_000,
          max: 423_400,
          avg: 421_700
        },
        period: 1.769,
        speed: 17.334
      }
    },
    {
      name: 'Europa',
      description: D.Europa,
      radius: 1_561,
      mass: 4.8e22,
      density: 3_013,
      surfaceGravity: 1.314,
      escapeVelocity: 2_025,
      orbit: {
        radius: {
          min: 664_862,
          max: 676_938,
          avg: 670_900
        },
        period: 3.551,
        speed: 13.743
      }
    }    
  ]
}

export const Saturn: Planet = {
  name: 'Saturn',
  description: D.Saturn,
  radius: 58_232,
  mass: 95.2,
  density: 687,
  surfaceGravity: 10.44,
  escapeVelocity: 35.5,
  orbit: {
    radius: {
      min: 9.0412,
      max: 10.1238,
      avg: 9.5826
    },
    period: 29.447,
    speed: 34.82
  },
  rotation: {
    sidereal: .440,
    synodic: .439,
    tilt: 26.73
  },
  moons: []
}

export const Uranus: Planet = {
  name: 'Uranus',
  description: D.Uranus,
  radius: 25_362,
  mass: 14.536,
  density: 1_270,
  surfaceGravity: 8.69,
  escapeVelocity: 21.3,
  orbit: {
    radius: {
      min: 18.286,
      max: 20.097,
      avg: 19.191
    },
    period: 84.02,
    speed: 24.61
  },
  rotation: {
    sidereal: .718,
    synodic: .718,
    tilt: 82.23
  },
  moons: []
}

export const Neptune: Planet = {
  name: 'Neptune',
  description: D.Neptune,
  radius: 24_622,
  mass: 17.147,
  density: 1_638,
  surfaceGravity: 11.15,
  escapeVelocity: 23.5,
  orbit: {
    radius: {
      min: 29.81,
      max: 30.33,
      avg: 30.07
    },
    period: 164.8,
    speed: 5.43
  },
  rotation: {
    sidereal: .671,
    synodic: .671,
    tilt: 28.32
  },
  moons: []
}