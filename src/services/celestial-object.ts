import * as Hint from '../constants/hints';
import * as Units from '../constants/units';
import * as Convert from './conversion';
import { CelestialEntityType } from '../constants/data/celestial-entity-type.enum';
import { CelestialEntityData } from '../types/ui/celestial-entity-data.interface';
import { CelestialObjectDataSection } from '../types/ui/celestial-object-data-section.interface';
import { Star } from '../types/data/star.interface';
import { Planet } from '../types/data/planet.interface';
import { Moon } from '../types/data/moon.interface';
import { NotableObject } from '../types/data/notable-object.interface';

const physicalCharacteristics = (
  object: Star | Planet | Moon | NotableObject,
  type: CelestialEntityType
): CelestialObjectDataSection => {
  return {
    name: 'Physical Characteristics',
    groups: [
      {
        name: '',
        rows: [
          type === CelestialEntityType.notable
            ? {
                name: 'Mean Diameter',
                hint: [Hint.meanDiameter],
                value: { value: (object as NotableObject).diameter, unit: Units.km} ,
                altValues: [Convert.km_to_mi((object as NotableObject).diameter)]
              }
            : {
                name: 'Radius',
                hint: [Hint.radius], 
                value: { value: (object as Star | Planet | Moon).radius, unit: Units.km },
                altValues: [Convert.km_to_mi((object as Star | Planet | Moon).radius)]
              },
          {
            name: 'Mass',
            hint: [Hint.mass], 
            value: { 
              value: object.mass, 
              unit: type === CelestialEntityType.notable || type === CelestialEntityType.moon
               ? Units.kg 
               : Units.earths
            }, 
            altValues: type === CelestialEntityType.notable || type === CelestialEntityType.moon
              ? [Convert.kg_to_lb(object.mass)]
              : [
                  Convert.earths_to_kg(object.mass),
                  Convert.earths_to_lb(object.mass)
                ]
          },
          {
            name: 'Density',
            hint: [Hint.density],
            value: { value: object.density, unit: Units.kgpm3 }
          },
          {
            name: 'Surface Gravity',
            hint: [Hint.surfaceGravity],
            value: { value: object.surfaceGravity, unit: Units.mps2 },
            altValues: [Convert.mps2_to_g(object.surfaceGravity)]
          },
          {
            name: 'Escape Velocity',
            hint: [Hint.escapeVelocity],
            value: {
              value: object.escapeVelocity,
              unit: type === CelestialEntityType.star || type === CelestialEntityType.planet 
                ? Units.kmps
                : Units.mps
            },
            altValues: [
              type === CelestialEntityType.star || type === CelestialEntityType.planet 
                ? Convert.kmps_to_mips(object.escapeVelocity)
                : Convert.mps_to_kmph(object.escapeVelocity),
                  Convert.mps_to_miph(object.escapeVelocity)
            ]
          }
        ]
      }
    ]
  };
}

const orbitalCharacteristics = (
  object: Planet | Moon | NotableObject,
  type: CelestialEntityType
): CelestialObjectDataSection => {
  return {
    name: 'Orbital Characteristics',
    groups: [
      {
        name: 'Orbit',
        rows: [
          {
            name: 'Semi-major Axis',
            hint: [Hint.semiMajorAxis, Hint.astronomicalUnit],
            value: {
              value: object.orbit.radius.avg,
              unit: type === CelestialEntityType.moon ? Units.km : Units.au
            },
            altValues: type === CelestialEntityType.moon
              ? [Convert.km_to_mi(object.orbit.radius.avg)]
              : [
                  Convert.au_to_km(object.orbit.radius.avg),                
                  Convert.au_to_mi(object.orbit.radius.avg)
                ]
          },          
          {
            name: type === CelestialEntityType.moon ? 'Periapsis' : 'Perihelion',
            hint: type === CelestialEntityType.moon
              ? [Hint.periapsis]
              : [Hint.perihelion, Hint.astronomicalUnit],
            value: { 
              value: object.orbit.radius.min,
              unit: type === CelestialEntityType.moon ? Units.km : Units.au
            },
            altValues: type === CelestialEntityType.moon
              ? [Convert.km_to_mi(object.orbit.radius.min)]
              : [
                  Convert.au_to_km(object.orbit.radius.min),
                  Convert.au_to_mi(object.orbit.radius.min)
                ]
          },
          {
            name: type === CelestialEntityType.moon ? 'Apoapsis' : 'Aphelion',
            hint: type === CelestialEntityType.moon
              ? [Hint.apoapsis]
              : [Hint.aphelion, Hint.astronomicalUnit],
            value: { 
              value: object.orbit.radius.max,
              unit: type === CelestialEntityType.moon ? Units.km : Units.au
            },
            altValues: type === CelestialEntityType.moon
              ? [Convert.km_to_mi(object.orbit.radius.max)]
              : [
                  Convert.au_to_km(object.orbit.radius.max),
                  Convert.au_to_mi(object.orbit.radius.max)
                ]
          }
        ]
      },
      {
        name: '',
        rows: [
          {
            name: 'Period',
            hint: [Hint.orbitalPeriod],
            value: { 
              value: object.orbit.period,
              unit: type === CelestialEntityType.moon ? Units.d : Units.y
            },
            altValues: type === CelestialEntityType.moon 
              ? [Convert.d_to_h(object.orbit.period)]
              : [Convert.y_to_d(object.orbit.period)]
          },
          {
            name: 'Speed',
            hint: [Hint.orbitalSpeed],
            value: { value: object.orbit.speed, unit: Units.kmps },
            altValues: [Convert.kmps_to_mips(object.orbit.speed)]
          }
        ]
      }
    ]
  };
}

const planetAxialRotation = (planet: Planet): CelestialObjectDataSection => {
  return {
    name: 'Axial Rotation',
    groups: [
      {
        name: '',
        rows: [
          {
            name: 'Sidereal Period',
            hint: [Hint.siderealPeriod],
            value: { value: planet.rotation.sidereal, unit: Units.d },
            altValues: [Convert.d_to_h(planet.rotation.sidereal)]
          },
          {
            name: 'Synodic Period',
            hint: [Hint.synodicPeriod],
            value: { value: planet.rotation.synodic, unit: Units.d },
            altValues: [Convert.d_to_h(planet.rotation.synodic)]
          },
          {
            name: 'Axial Tilt',
            hint: [Hint.axialTilt],
            value: { value: planet.rotation.tilt, unit: Units.deg }
          }
        ]
      }
    ]
  };
}

const starMotion = (star: Star): CelestialObjectDataSection => {
  return {
    name: 'Motion',
    groups: [
      {
        name: 'Axial Rotation Period',
        rows: [
          {
            name: 'Equator',
            hint: [Hint.axialRotationPeriod],
            value: { value: star.axialRotation.equator, unit: Units.d }
          },
          {
            name: 'Poles',
            hint: [Hint.axialRotationPeriod],
            value: { value: star.axialRotation.poles, unit: Units.d }
          }
        ]
      },
      {
        name: 'Galactic Orbit',
        rows: [
          {
            name: 'Radius',
            hint: [Hint.galacticOrbitRadius, Hint.lightYear],
            value: { value: star.galacticOrbit.radius, unit: Units.ly },
            altValues: [
              Convert.ly_to_km(star.galacticOrbit.radius),
              Convert.ly_to_mi(star.galacticOrbit.radius)
            ]
          },
          {
            name: 'Period',
            hint: [Hint.galacticOrbitPeriod],
            value: { value: star.galacticOrbit.period, unit: Units.my }
          },
          {
            name: 'Speed',
            hint: [Hint.galacticOrbitSpeed],
            value: { value: star.galacticOrbit.speed, unit: Units.kmps },
            altValues: [Convert.kmps_to_mips(star.galacticOrbit.speed)]
          }
        ]
      }
    ]
  };
}

export const objectData = (data: CelestialEntityData): CelestialObjectDataSection[] => {
  switch (data.type) {
    case CelestialEntityType.star:
      return [
        physicalCharacteristics(data.entity as Star, data.type),
        starMotion(data.entity as Star)
      ];
    case CelestialEntityType.planet:
      return [
        physicalCharacteristics(data.entity as Planet, data.type),
        orbitalCharacteristics(data.entity as Planet, data.type),
        planetAxialRotation(data.entity as Planet)
      ];
    case CelestialEntityType.moon:
      return [
        physicalCharacteristics(data.entity as Moon, data.type),
        orbitalCharacteristics(data.entity as Moon, data.type)
      ];
    case CelestialEntityType.notable:
      return [
        physicalCharacteristics(data.entity as NotableObject, data.type),
        orbitalCharacteristics(data.entity as NotableObject, data.type)
      ];
    default:
      return [];
  }
}
