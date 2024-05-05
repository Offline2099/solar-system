import { NumberRange } from "./utility";

export const enum SystemPartTypes {
  star = 'star',
  planets = 'planets',
  region = 'region'
}

export interface SystemPart {
  name: string;
  type: `${SystemPartTypes }`
  content: Star | Planet[] | Region;
}

export const enum CelestialObjectTypes {
  star = 'star',
  planet = 'planet',
  moon = 'moon',
  region = 'region',
  notable = 'notable-object'
}

export interface CelestialObject {
  type: `${CelestialObjectTypes }`
  body: Star | Planet | Moon | Region | NotableObject;
}

export interface Star {
  name: string;
  description: string[];
  radius: number;
  mass: number;
  density: number;
  surfaceGravity: number;
  escapeVelocity: number;
  axialRotation: {
    equator: number;
    poles: number;
  }
  galacticOrbit: {
    radius: NumberRange;
    period: NumberRange;
    speed: number;
  }
}

export interface Planet {
  name: string;
  description: string[];
  radius: number;
  mass: number;
  density: number;
  surfaceGravity: number;
  escapeVelocity: number;
  orbit: {
    radius: {
      min: number;
      max:  number;
      avg: number;
    }
    period: number;
    speed: number;
  }
  rotation: {
    sidereal: number;
    synodic: number;
    tilt: number;
  },
  moons: Moon[];
}

export interface Moon {
  name: string;
  description: string[];
  radius: number;
  mass: number;
  density: number;
  surfaceGravity: number;
  escapeVelocity: number;
  orbit: {
    radius: {
      min: number;
      max:  number;
      avg: number;
    }
    period: number;
    speed: number;
  }
}

export interface Region {
  name: string;
  description: string[];
  notableObjects: NotableObject[];
}

export interface NotableObject {
  name: string;
  description: string[];
  diameter: number;
  mass: number;
  density: number;
  surfaceGravity: number | NumberRange;
  escapeVelocity: number | NumberRange;
  orbit: {
    radius: {
      min: number;
      max:  number;
      avg: number;
    }
    period: number;
    speed: number;
  }
}
