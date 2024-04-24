import { Planet } from '../types/data';
import { CelestialObjectDataSection } from '../types/ui';

export const PlanetDataTemplate = (planet: Planet): CelestialObjectDataSection[] => {
  return [
    {
      name: 'Physical Characteristics',
      groups: [
        {
          name: '',
          rows: [
            {name: 'Radius', value: planet.radius, unit: 'km'},
            {name: 'Mass', value: planet.mass, unit: 'Earth Masses'},
            {name: 'Density', value: planet.density, unit: 'AU'},
            {name: 'Surface Gravity', value: planet.surfaceGravity, unit: 'm/s2'},
            {name: 'Escape Velocity', value: planet.escapeVelocity, unit: 'km/s'}
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
            {name: 'Semi-major axis', value: planet.orbit.radius.avg, unit: 'AU'},
            {name: 'Perihelion', value: planet.orbit.radius.min, unit: 'AU'},
            {name: 'Aphelion', value: planet.orbit.radius.max, unit: 'AU'}
          ]
        },
        {
          name: '',
          rows: [
            {name: 'Period', value: planet.orbit.period, unit: 'years'},
            {name: 'Speed', value: planet.orbit.speed, unit: 'km/s'}
          ]
        }
      ]
      
    },
    {
      name: 'Axial Rotation',
      groups: [
        {
          name: '',
          rows: [
            {name: 'Sidereal Period', value: planet.rotation.sidereal, unit: 'days'},
            {name: 'Synodic Period', value: planet.rotation.synodic, unit: 'days'},
            {name: 'Axial Tilt', value: planet.rotation.tilt, unit: 'degree'}
          ]
        }
      ]
    }    
  ]
} 
