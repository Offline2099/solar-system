import { Star } from '../types/data';
import { CelestialObjectDataSection } from '../types/ui';

export const StarDataTemplate = (star: Star): CelestialObjectDataSection[] => {
  return [
    {
      name: 'Physical Characteristics',
      groups: [
        {
          name: '',
          rows: [
            {name: 'Radius', value: star.radius, unit: 'km'},
            {name: 'Mass', value: star.mass, unit: 'Earth Masses'},
            {name: 'Density', value: star.density, unit: 'AU'},
            {name: 'Surface Gravity', value: star.surfaceGravity, unit: 'm/s2'},
            {name: 'Escape Velocity', value: star.escapeVelocity, unit: 'km/s'}
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
            {name: 'Equator', value: star.axialRotation.equator, unit: 'days'},
            {name: 'Poles', value: star.axialRotation.poles, unit: 'days'}
          ]
        },
        {
          name: 'Galactic Orbit',
          rows: [
            {name: 'Radius', value: star.galacticOrbit.radius, unit: 'light-years'},
            {name: 'Period', value: star.galacticOrbit.period, unit: 'million years'},
            {name: 'Speed', value: star.galacticOrbit.speed, unit: 'km/s'}
          ]
        }
      ]
    }    
  ]
} 