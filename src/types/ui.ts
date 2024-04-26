import { NumberRange } from './utility';
import { SystemPart, CelestialObject } from './data';

export interface SystemPartData extends SystemPart {
  id: number;
  collapsed: boolean;
}

export interface CelestialObjectData extends CelestialObject {
  id: number;
  collapsed: boolean;
}

export interface CelestialObjectDataSection {
  name: string;
  groups: {
    name: string;
    rows: {
      name: string;
      value: number | NumberRange;
      unit: string;
    }[];
  }[]
}
