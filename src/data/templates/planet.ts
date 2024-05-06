import { Planet } from '../../types/data';
import { CelestialObjectDataSection } from '../../types/ui';
import * as Hint from '../text/hints';
import * as Units from '../measurement/units';
import * as Convert from '../measurement/conversion';

export const fillPlanetDataTemplate = (planet: Planet): CelestialObjectDataSection[] => {
  return [
    {
      name: 'Physical Characteristics',
      groups: [
        {
          name: '',
          rows: [
            {
              name: 'Radius', hint: [Hint.radius],
              value: {value: planet.radius, unit: Units.km},
              altValues: [Convert.km_to_mi(planet.radius)]
            },
            {
              name: 'Mass', hint: [Hint.mass],
              value: {value: planet.mass, unit: Units.earths},
              altValues: [
                Convert.earths_to_kg(planet.mass),
                Convert.earths_to_lb(planet.mass)
              ]
            },
            {
              name: 'Density', hint: [Hint.density],
              value: {value: planet.density, unit: Units.kgpm3}
            },
            {
              name: 'Surface Gravity', hint: [Hint.surfaceGravity],
              value: {value: planet.surfaceGravity, unit: Units.mps2},
              altValues: [Convert.mps2_to_g(planet.surfaceGravity)]
            },
            {
              name: 'Escape Velocity', hint: [Hint.escapeVelocity],
              value: {value: planet.escapeVelocity, unit: Units.kmps},
              altValues: [Convert.kmps_to_mips(planet.escapeVelocity)]
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
              value: {value: planet.orbit.radius.avg, unit: Units.au},
              altValues: [
                Convert.au_to_km(planet.orbit.radius.avg),                
                Convert.au_to_mi(planet.orbit.radius.avg)
              ]
            },          
            {
              name: 'Perihelion', hint: [Hint.perihelion, Hint.astronomicalUnit],
              value: {value: planet.orbit.radius.min, unit: Units.au},
              altValues: [
                Convert.au_to_km(planet.orbit.radius.min),
                Convert.au_to_mi(planet.orbit.radius.min)
              ]
            },
            {
              name: 'Aphelion', hint: [Hint.aphelion, Hint.astronomicalUnit],
              value: {value: planet.orbit.radius.max, unit: Units.au},
              altValues: [
                Convert.au_to_km(planet.orbit.radius.max),
                Convert.au_to_mi(planet.orbit.radius.max)
              ]
            }
          ]
        },
        {
          name: '',
          rows: [
            {
              name: 'Period', hint: [Hint.orbitalPeriod],
              value: {value: planet.orbit.period, unit: Units.y},
              altValues: [Convert.y_to_d(planet.orbit.period)]
            },
            {
              name: 'Speed', hint: [Hint.orbitalSpeed],
              value: {value: planet.orbit.speed, unit: Units.kmps},
              altValues: [Convert.kmps_to_mips(planet.orbit.speed)]
            }
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
            {
              name: 'Sidereal Period', hint: [Hint.siderealPeriod],
              value: {value: planet.rotation.sidereal, unit: Units.d},
              altValues: [Convert.d_to_h(planet.rotation.sidereal)]
            },
            {
              name: 'Synodic Period', hint: [Hint.synodicPeriod],
              value: {value: planet.rotation.synodic, unit: Units.d},
              altValues: [Convert.d_to_h(planet.rotation.synodic)]
            },
            {
              name: 'Axial Tilt', hint: [Hint.axialTilt],
              value: {value: planet.rotation.tilt, unit: Units.deg}
            }
          ]
        }
      ]
    }    
  ]
} 
