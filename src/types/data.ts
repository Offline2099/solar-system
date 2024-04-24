export interface Range {
  min: number;
  max: number;
}

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
  planet = 'planet'
}

export interface CelestialObject {
  type: `${CelestialObjectTypes }`
  body: Star | Planet;
}

export interface Star {
  name: string;
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
    radius: Range;
    period: Range;
    speed: number;
  }
}

export interface Planet {
  name: string;
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
  }
}

export interface Region {

}
