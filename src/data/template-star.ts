import { Star } from '../types/data';
import { CelestialObjectDataSection } from '../types/ui';
import * as Units from './units';
import * as Hint from './hints';
import * as Convert from './conversion';

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
              value: {value: {n: star.radius}, unit: Units.km},
              altValues: [Convert.km_to_mi(star.radius)]
            },
            {
              name: 'Mass', hint: [Hint.mass], 
              value: {value: {n: star.mass}, unit: Units.earths}, 
              altValues: [Convert.earths_to_kg(star.mass), Convert.earths_to_lb(star.mass)]
            },
            {
              name: 'Density', hint: [Hint.density],
              value: {value: {n: star.density}, unit: Units.kgpm3}
            },
            {
              name: 'Surface Gravity', hint: [Hint.surfaceGravity],
              value: {value: {n: star.surfaceGravity}, unit: Units.kmps2}
            },
            {
              name: 'Escape Velocity', hint: [Hint.escapeVelocity],
              value: {value: {n: star.escapeVelocity}, unit: Units.kmps},
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
              value: {value: {n: star.axialRotation.equator}, unit: Units.d}
            },
            {
              name: 'Poles', hint: [Hint.axialRotationPeriod],
              value: {value: {n: star.axialRotation.poles}, unit: Units.d}
            }
          ]
        },
        {
          name: 'Galactic Orbit',
          rows: [
            {
              name: 'Radius', hint: [Hint.galacticOrbitRadius, Hint.lightYear],
              value: {value: {n: star.galacticOrbit.radius}, unit: Units.ly}
            },
            {
              name: 'Period', hint: [Hint.galacticOrbitPeriod],
              value: {value: {n: star.galacticOrbit.period}, unit: Units.my}
            },
            {
              name: 'Speed', hint: [Hint.galacticOrbitSpeed],
              value: {value: {n: star.galacticOrbit.speed}, unit: Units.kmps},
              altValues: [Convert.kmps_to_mips(star.galacticOrbit.speed)]
            }
          ]
        }
      ]
    }
  ]
}