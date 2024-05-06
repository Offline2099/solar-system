import { SystemPartTypes, SystemPart } from '../types/data';
import { Sun } from './system-1-sun';
import { Mercury, Venus, Earth, Mars } from './system-2-inner-planets';
import { AsteroidBelt } from './system-3-asteroid-belt';
import { Jupiter, Saturn, Uranus, Neptune } from './system-4-outer-planets';
import { KuiperBelt } from './system-5-kuiper-belt';
import { ScatteredDisc } from './system-6-scattered-disc';

export const System: SystemPart[] = [
  {
    name: 'Sun',
    type: SystemPartTypes.star,
    content: Sun
  },
  {
    name: 'Inner Planets',
    type: SystemPartTypes.planets,
    content: [Mercury, Venus, Earth, Mars]
  },
  {
    name: 'Asteroid Belt',
    type: SystemPartTypes.region,
    content: AsteroidBelt
  },
  {
    name: 'Outer Planets',
    type: SystemPartTypes.planets,
    content: [Jupiter, Saturn, Uranus, Neptune]
  },
  {
    name: 'Kuiper belt',
    type: SystemPartTypes.region,
    content: KuiperBelt
  },
  {
    name: 'Scattered Disc',
    type: SystemPartTypes.region,
    content: ScatteredDisc
  }
];
