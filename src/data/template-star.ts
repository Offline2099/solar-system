import { Star } from '../types/data';
import { CelestialObjectDataSection } from '../types/ui';
import * as Units from './units';

export const fillStarDataTemplate = (star: Star): CelestialObjectDataSection[] => {
  return [
    {
      name: 'Physical Characteristics',
      groups: [
        {
          name: '',
          rows: [
            {name: 'Radius', value: {value: {n: star.radius}, unit: Units.km}},
            {name: 'Mass', value: {value: {n: star.mass}, unit: Units.earths}},
            {name: 'Density', value: {value: {n: star.density}, unit: Units.kgpm3}},
            {name: 'Surface Gravity', value: {value: {n: star.surfaceGravity}, unit: Units.kmps2}},
            {name: 'Escape Velocity', value: {value: {n: star.escapeVelocity}, unit: Units.kmps}}
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
            {name: 'Equator', value: {value: {n: star.axialRotation.equator}, unit: Units.d}},
            {name: 'Poles', value: {value: {n: star.axialRotation.poles}, unit: Units.d}}
          ]
        },
        {
          name: 'Galactic Orbit',
          rows: [
            {name: 'Radius', value: {value: {n: star.galacticOrbit.radius}, unit: Units.ly}},
            {name: 'Period', value: {value: {n: star.galacticOrbit.period}, unit: Units.my}},
            {name: 'Speed', value: {value: {n: star.galacticOrbit.speed}, unit: Units.kmps}}
          ]
        }
      ]
    }    
  ]
} 