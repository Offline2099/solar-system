import { Moon } from '../types/data';
import { CelestialObjectDataSection } from '../types/ui';
import * as Hint from './text/hints';
import * as Units from './measurement/units';
import * as Convert from './measurement/conversion';

export const fillMoonDataTemplate = (moon: Moon): CelestialObjectDataSection[] => {
  return [
    {
      name: 'Physical Characteristics',
      groups: [
        {
          name: '',
          rows: [
            {
              name: 'Radius', hint: [Hint.radius],
              value: {value: moon.radius, unit: Units.km},
              altValues: [Convert.km_to_mi(moon.radius)]
            },
            {
              name: 'Mass', hint: [Hint.mass],
              value: {value: moon.mass, unit: Units.kg},
              altValues: [Convert.kg_to_lb(moon.mass)]
            },
            {
              name: 'Density', hint: [Hint.density],
              value: {value: moon.density, unit: Units.kgpm3}
            },
            {
              name: 'Surface Gravity', hint: [Hint.surfaceGravity],
              value: {value: moon.surfaceGravity, unit: Units.mps2},
              altValues: [Convert.mps2_to_g(moon.surfaceGravity)]
            },
            {
              name: 'Escape Velocity', hint: [Hint.escapeVelocity],
              value: {value: moon.escapeVelocity, unit: Units.mps},
              altValues: [
                Convert.mps_to_kmph(moon.escapeVelocity),
                Convert.mps_to_miph(moon.escapeVelocity)
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
              name: 'Semi-major Axis', hint: [Hint.semiMajorAxis],
              value: {value: moon.orbit.radius.avg, unit: Units.km},
              altValues: [Convert.km_to_mi(moon.orbit.radius.avg)]
            },          
            {
              name: 'Periapsis', hint: [Hint.periapsis],
              value: {value: moon.orbit.radius.min, unit: Units.km},
              altValues: [Convert.km_to_mi(moon.orbit.radius.min)]
            },
            {
              name: 'Apoapsis', hint: [Hint.apoapsis],
              value: {value: moon.orbit.radius.max, unit: Units.km},
              altValues: [Convert.km_to_mi(moon.orbit.radius.max)]
            }
          ]
        },
        {
          name: '',
          rows: [
            {
              name: 'Period', hint: [Hint.orbitalPeriod],
              value: {value: moon.orbit.period, unit: Units.d},
              altValues: [Convert.d_to_h(moon.orbit.period)]
            },
            {
              name: 'Speed', hint: [Hint.orbitalSpeed],
              value: {value: moon.orbit.speed, unit: Units.kmps},
              altValues: [Convert.kmps_to_mips(moon.orbit.speed)]
            }
          ]
        }
      ]
    }
  ]
} 
