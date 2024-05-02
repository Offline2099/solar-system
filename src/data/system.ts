import { SystemPartTypes, SystemPart, Star, Planet, Region } from '../types/data';
import * as D from './text/descriptions';

const Sun: Star = {
  name: 'Sun',
  description: D.Sun,
  radius: 696_300,
  mass: 332_950,
  density: 1_408,
  surfaceGravity: 274,
  escapeVelocity: 617.7,
  axialRotation: {
    equator: 25.05,
    poles: 34.4
  },
  galacticOrbit: {
    radius: {
      min: 24_000,
      max: 28_000
    },
    period: {
      min: 225,
      max: 250
    },
    speed: 251
  }
}

const Mercury: Planet = {
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
  }  
}

const Venus: Planet = {
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
  }  
}

const Earth: Planet = {
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
  }  
}

const Mars: Planet = {
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
  }  
}

const AsteroidBelt: Region = {
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

const Jupiter: Planet = {
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
    sidereal: 0.414,
    synodic: 0.414,
    tilt: 3.13
  }  
}

const Saturn: Planet = {
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
    sidereal: 0.440,
    synodic: 0.439,
    tilt: 26.73
  }  
}

const Uranus: Planet = {
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
    sidereal: 0.718,
    synodic: 0.718,
    tilt: 82.23
  }  
}

const Neptune: Planet = {
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
    sidereal: 0.671,
    synodic: 0.671,
    tilt: 28.32
  }  
}

const KuiperBelt: Region = {
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

const ScatteredDisc: Region = {
  name: 'Scattered Disc',
  description: D.ScatteredDisc,
  notableObjects: []
}

export const System: SystemPart[] = [
  {
    name: 'Sun',
    type: SystemPartTypes.star,
    content: Sun
  },
  {
    name: 'Inner Planets',
    type: SystemPartTypes.planets,
    content: [Mercury, Venus, Earth, Mars]
  },
  {
    name: 'Asteroid Belt',
    type: SystemPartTypes.region,
    content: AsteroidBelt
  },
  {
    name: 'Outer Planets',
    type: SystemPartTypes.planets,
    content: [Jupiter, Saturn, Uranus, Neptune]
  },
  {
    name: 'Kuiper belt',
    type: SystemPartTypes.region,
    content: KuiperBelt
  },
  {
    name: 'Scattered Disc',
    type: SystemPartTypes.region,
    content: ScatteredDisc
  }
];
