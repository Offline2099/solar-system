import * as Units from '../constants/units';
import { Range } from '../types/general/range.interface';
import { DataUnit } from '../types/ui/data-unit.interface';
import { DataValue } from '../types/ui/data-value.interface';

const convertDataValue = (value: number | Range, ratio: number, unit: DataUnit): DataValue => {
  return {
    value: typeof value !== 'number' 
      ? {
          min: ratio * (value as Range).min,
          max: ratio * (value as Range).max
        }
      : ratio * (value as number),
    unit
  };
}

//=============================================================================
//  Time 
//=============================================================================

export const y_to_d = (time: number | Range): DataValue => {
  return convertDataValue(time, 365.25, Units.d);
}

export const d_to_h = (time: number | Range): DataValue => {
  return convertDataValue(time, 24, Units.h);
}

//=============================================================================
//  Distance 
//=============================================================================

export const ly_to_km = (distance: number | Range): DataValue => {
  return convertDataValue(distance, 9.461e12, Units.km);
}

export const ly_to_mi = (distance: number | Range): DataValue => {
  return convertDataValue(distance, 5.879e12, Units.mi);
}

export const au_to_km = (distance: number | Range): DataValue => {
  return convertDataValue(distance, 1.496e8, Units.km);
}

export const au_to_mi = (distance: number | Range): DataValue => {
  return convertDataValue(distance, 9.296e7, Units.mi);
}

export const km_to_mi = (distance: number | Range): DataValue => {
  return convertDataValue(distance, 0.6215, Units.mi);
}

//=============================================================================
//  Speed 
//=============================================================================

export const kmps_to_mips = (speed: number | Range): DataValue => {
  return convertDataValue(speed, 0.6215, Units.mips);
}

export const mps_to_kmph = (speed: number | Range): DataValue => {
  return convertDataValue(speed, 3.6, Units.kmph);
}

export const mps_to_miph = (speed: number | Range): DataValue => {
  return convertDataValue(speed, 2.237, Units.miph);
}

//=============================================================================
//  Acceleration 
//=============================================================================

export const mps2_to_g = (acceleration: number | Range): DataValue => {
  return convertDataValue(acceleration, 0.1019, Units.g);
}

//=============================================================================
//  Mass 
//=============================================================================

export const earths_to_kg = (mass: number | Range): DataValue => {
  return convertDataValue(mass, 5.972e24, Units.kg);
}

export const earths_to_lb = (mass: number | Range): DataValue => {
  return convertDataValue(mass, 1.317e25, Units.lb);
}

export const kg_to_lb =(mass: number | Range): DataValue => {
  return convertDataValue(mass, 2.205, Units.lb);
}
