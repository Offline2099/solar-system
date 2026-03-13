interface UnitPart {
  s: string;
  sup?: boolean;
  sub?: boolean;
}

export interface DataUnit {
  single: UnitPart[];
  plural?: UnitPart[];
  noSpace?: boolean;
}