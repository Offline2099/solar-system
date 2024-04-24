import { SystemPart, Range } from './data';

export interface PageSectionData extends SystemPart {
  id: number;
  collapsed: boolean;
}

export interface CelestialObjectDataSection {
  name: string;
  groups: {
    name: string;
    rows: {
      name: string;
      value: number | Range;
      unit: string;
    }[];
  }[]
}
