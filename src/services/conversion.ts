import * as Units from '../constants/units';
import { Range } from '../types/general/range.interface';
import { DataUnit } from '../types/ui/data-unit.interface';
import { DataValue } from '../types/ui/data-value.interface';

const convertValue = (value: number | Range, ratio: number, outputUnit: DataUnit): DataValue => {
  return {
    value: typeof value !== 'number'
      ? {
          min: ratio * (value as Range).min,
          max: ratio * (value as Range).max
        }
      : ratio * (value as number),
    unit: outputUnit
  };
};

const convertDataValue = convertValue;

//=============================================================================
//  Time
//=============================================================================

const yearsToDays = (time: number | Range): DataValue => {
  return convertValue(time, 365.25, Units.d);
};

const daysToHours = (time: number | Range): DataValue => {
  return convertValue(time, 24, Units.h);
};

export const yearsToAltUnits = (time: number | Range): DataValue[] => {
  return [yearsToDays(time)];
};

export const daysToAltUnits = (time: number | Range): DataValue[] => {
  return [daysToHours(time)];
};

//=============================================================================
//  Distance
//=============================================================================

const kilometersToMiles = (distance: number | Range): DataValue => {
  return convertValue(distance, 0.6215, Units.mi);
};

const lightYearsToKilometers = (distance: number | Range): DataValue => {
  return convertValue(distance, 9.461e12, Units.km);
};

const lightYearsToMiles = (distance: number | Range): DataValue => {
  return convertValue(distance, 5.879e12, Units.mi);
};

const astronomicalUnitsToKilometers = (distance: number | Range): DataValue => {
  return convertValue(distance, 1.496e8, Units.km);
};

const astronomicalUnitsToMiles = (distance: number | Range): DataValue => {
  return convertValue(distance, 9.296e7, Units.mi);
};

export const kilometersToAltUnits = (distance: number | Range): DataValue[] => {
  return [kilometersToMiles(distance)];
};

export const lightYearsToAltUnits = (distance: number | Range): DataValue[] => {
  return [lightYearsToKilometers(distance), lightYearsToMiles(distance)];
};

export const astronomicalUnitsToAltUnits = (distance: number | Range): DataValue[] => {
  return [astronomicalUnitsToKilometers(distance), astronomicalUnitsToMiles(distance)];
};

//=============================================================================
//  Speed
//=============================================================================

const kilometersPerSecondToKilometersPerHour = (speed: number | Range): DataValue => {
  return convertValue(speed, 3600, Units.kmph);
};


const kilometersPerSecondToMilesPerSecond = (speed: number | Range): DataValue => {
  return convertValue(speed, 0.6215, Units.mips);
};

const kilometersPerSecondToMilesPerHour = (speed: number | Range): DataValue => {
  return convertValue(speed, 2236.936292, Units.miph);
};

const metersPerSecondToKilometersPerHour = (speed: number | Range): DataValue => {
  return convertValue(speed, 3.6, Units.kmph);
};

const metersPerSecondToMilesPerHour = (speed: number | Range): DataValue => {
  return convertValue(speed, 2.237, Units.miph);
};

export const kilometersPerSecondToAltUnits = (speed: number | Range): DataValue[] => {
  return [
    kilometersPerSecondToMilesPerSecond(speed),
    kilometersPerSecondToMilesPerHour(speed),
    kilometersPerSecondToKilometersPerHour(speed)
  ];
};

export const metersPerSecondToAltUnits = (speed: number | Range): DataValue[] => {
  return [metersPerSecondToKilometersPerHour(speed), metersPerSecondToMilesPerHour(speed)];
};

//=============================================================================
//  Acceleration
//=============================================================================

const metersPerSecondSquaredToG = (acceleration: number | Range): DataValue => {
  return convertValue(acceleration, 0.10197162, Units.g);
};

export const metersPerSecondSquaredToAltUnits = (acceleration: number | Range): DataValue[] => {
  return [metersPerSecondSquaredToG(acceleration)];
};

//=============================================================================
//  Mass
//=============================================================================

const kilogramsToPounds = (mass: number | Range): DataValue => {
  return convertDataValue(mass, 2.205, Units.lb);
};

const earthsToKilograms = (mass: number | Range): DataValue => {
  return convertDataValue(mass, 5.972e24, Units.kg);
};

const earthsToPounds = (mass: number | Range): DataValue => {
  return convertDataValue(mass, 1.317e25, Units.lb);
};

export const kilogramsToAltUnits = (mass: number | Range): DataValue[] => {
  return [kilogramsToPounds(mass)];
};

export const earthsToAltUnits = (mass: number | Range): DataValue[] => {
  return [earthsToKilograms(mass), earthsToPounds(mass)];
};
