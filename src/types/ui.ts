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
      hint?: Definition[];
      value: DataValue;
      altValues?: DataValue[];
    }[];
  }[]
}

export interface DataValue {
  value: {
    n: number | NumberRange;
    exp?: number;
  } 
  unit: DataValueUnit;
}

export interface DataValueUnit {
  single: {
    s: string;
    sup?: boolean;
    sub?: boolean;
  }[];
  plural?: {
    s: string;
    sup?: boolean;
    sub?: boolean;
  }[];
  noSpace?: boolean;
}

export interface Definition {
  term: string;
  explanation: string[];
}

export const enum HintContentTypes {
  definitions = 'definitions',
  values = 'values'
}

export interface HintContent {
  type: `${HintContentTypes}`;
  content: Definition[] | DataValue[];
}