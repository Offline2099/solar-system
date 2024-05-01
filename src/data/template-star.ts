import { Star } from '../types/data';
import { CelestialObjectDataSection } from '../types/ui';
import * as Hint from './text/hints';
import * as Units from './measurement/units';
import * as Convert from './measurement/conversion';

export const fillStarDataTemplate = (star: Star): CelestialObjectDataSection[] => {
  return [
    {
      name: 'Physical Characteristics',
      groups: [
        {
          name: '',
          rows: [
            {
              name: 'Radius', hint: [Hint.radius], 
              value: {value: star.radius, unit: Units.km},
              altValues: [Convert.km_to_mi(star.radius)]
            },
            {
              name: 'Mass', hint: [Hint.mass], 
              value: {value: star.mass, unit: Units.earths}, 
              altValues: [Convert.earths_to_kg(star.mass), Convert.earths_to_lb(star.mass)]
            },
            {
              name: 'Density', hint: [Hint.density],
              value: {value: star.density, unit: Units.kgpm3}
            },
            {
              name: 'Surface Gravity', hint: [Hint.surfaceGravity],
              value: {value: star.surfaceGravity, unit: Units.mps2},
              altValues: [Convert.mps2_to_g(star.surfaceGravity)]
            },
            {
              name: 'Escape Velocity', hint: [Hint.escapeVelocity],
              value: {value: star.escapeVelocity, unit: Units.kmps},
              altValues: [Convert.kmps_to_mips(star.escapeVelocity)]
            }
          ]
        }
      ]
    },
    {
      name: 'Motion',
      groups: [
        {
          name: 'Axial Rotation Period',
          rows: [
            {
              name: 'Equator', hint: [Hint.axialRotationPeriod],
              value: {value: star.axialRotation.equator, unit: Units.d}
            },
            {
              name: 'Poles', hint: [Hint.axialRotationPeriod],
              value: {value: star.axialRotation.poles, unit: Units.d}
            }
          ]
        },
        {
          name: 'Galactic Orbit',
          rows: [
            {
              name: 'Radius', hint: [Hint.galacticOrbitRadius, Hint.lightYear],
              value: {value: star.galacticOrbit.radius, unit: Units.ly},
              altValues: [
                Convert.range_ly_to_km(star.galacticOrbit.radius),
                Convert.range_ly_to_mi(star.galacticOrbit.radius)
              ]
            },
            {
              name: 'Period', hint: [Hint.galacticOrbitPeriod],
              value: {value: star.galacticOrbit.period, unit: Units.my}
            },
            {
              name: 'Speed', hint: [Hint.galacticOrbitSpeed],
              value: {value: star.galacticOrbit.speed, unit: Units.kmps},
              altValues: [Convert.kmps_to_mips(star.galacticOrbit.speed)]
            }
          ]
        }
      ]
    }
  ]
}