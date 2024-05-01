import { NotableObject } from '../types/data';
import { CelestialObjectDataSection } from '../types/ui';
import * as Hint from './text/hints';
import * as Units from './measurement/units';
import * as Convert from './measurement/conversion';

export const fillNotableObjectDataTemplate = (object: NotableObject): CelestialObjectDataSection[] => {
  return [
    {
      name: 'Physical Characteristics',
      groups: [
        {
          name: '',
          rows: [
            {
              name: 'Diameter', hint: [Hint.radius],
              value: {value: object.diameter, unit: Units.km},
              altValues: [Convert.km_to_mi(object.diameter)]
            },
            {
              name: 'Mass', hint: [Hint.mass],
              value: {value: object.mass, unit: Units.kg},
              altValues: [Convert.kg_to_lb(object.mass)]
            },
            {
              name: 'Density', hint: [Hint.density],
              value: {value: object.density, unit: Units.kgpm3}
            },
            {
              name: 'Surface Gravity', hint: [Hint.surfaceGravity],
              value: {value: object.surfaceGravity, unit: Units.mps2},
              altValues: [Convert.mps2_to_g(object.surfaceGravity)]
            },
            {
              name: 'Escape Velocity', hint: [Hint.escapeVelocity],
              value: {value: object.escapeVelocity, unit: Units.mps},
              altValues: [
                Convert.mps_to_kmph(object.escapeVelocity),
                Convert.mps_to_miph(object.escapeVelocity)
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Orbital Characteristics',
      groups: [
        {
          name: 'Orbit',
          rows: [
            {
              name: 'Semi-major Axis', hint: [Hint.semiMajorAxis, Hint.astronomicalUnit],
              value: {value: object.orbit.radius.avg, unit: Units.au},
              altValues: [
                Convert.au_to_km(object.orbit.radius.avg),
                Convert.au_to_mi(object.orbit.radius.avg)
              ]
            },          
            {
              name: 'Perihelion', hint: [Hint.perihelion, Hint.astronomicalUnit],
              value: {value: object.orbit.radius.min, unit: Units.au},
              altValues: [
                Convert.au_to_km(object.orbit.radius.min),
                Convert.au_to_mi(object.orbit.radius.min)
              ]
            },
            {
              name: 'Aphelion', hint: [Hint.aphelion, Hint.astronomicalUnit],
              value: {value: object.orbit.radius.max, unit: Units.au},
              altValues: [
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
              name: 'Period', hint: [Hint.orbitalPeriod],
              value: {value: object.orbit.period, unit: Units.y},
              altValues: [Convert.y_to_d(object.orbit.period)]
            },
            {
              name: 'Speed', hint: [Hint.orbitalSpeed],
              value: {value: object.orbit.speed, unit: Units.kmps},
              altValues: [Convert.kmps_to_mips(object.orbit.speed)]
            }
          ]
        }
      ]
    }
  ]
} 
