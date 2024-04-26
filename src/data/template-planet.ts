import { Planet } from '../types/data';
import { CelestialObjectDataSection } from '../types/ui';
import * as Units from './units';

export const fillPlanetDataTemplate = (planet: Planet): CelestialObjectDataSection[] => {
  return [
    {
      name: 'Physical Characteristics',
      groups: [
        {
          name: '',
          rows: [
            {name: 'Radius', value: {value: {n: planet.radius}, unit: Units.km}},
            {name: 'Mass', value: {value: {n: planet.mass}, unit: Units.earths}},
            {name: 'Density', value: {value: {n: planet.density}, unit: Units.kgpm3}},
            {name: 'Surface Gravity', value: {value: {n: planet.surfaceGravity}, unit: Units.kmps2}},
            {name: 'Escape Velocity', value: {value: {n: planet.escapeVelocity}, unit: Units.kmps}}
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
            {name: 'Semi-major axis', value: {value: {n: planet.orbit.radius.avg}, unit: Units.au}},
            {name: 'Perihelion', value: {value: {n: planet.orbit.radius.min}, unit: Units.au}},
            {name: 'Aphelion', value: {value: {n: planet.orbit.radius.max}, unit: Units.au}}
          ]
        },
        {
          name: '',
          rows: [
            {name: 'Period', value: {value: {n: planet.orbit.period}, unit: Units.y}},
            {name: 'Speed', value: {value: {n: planet.orbit.speed}, unit: Units.kmps}}
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
            {name: 'Sidereal Period', value: {value: {n: planet.rotation.sidereal}, unit: Units.d}},
            {name: 'Synodic Period', value: {value: {n: planet.rotation.synodic}, unit: Units.d}},
            {name: 'Axial Tilt', value: {value: {n: planet.rotation.tilt}, unit: Units.deg}}
          ]
        }
      ]
    }    
  ]
} 
