import { DataValue } from "../../types/ui";
import * as Units from './units';

interface Value {
  n: number;
  exp?: number;
}

const formatValue = (data: Value): Value  => {

  let value = data.n;
  let exp = data.exp;

  const round = (val: number): number => {
    if (val > 1000) return Math.round(val);
    return Number(val.toPrecision(3));
  }

  if (!exp) return {n: round(value)}

  while (value < 1) {
    value *= 10;
    exp--;
  }

  while (value > 10) {
    value /= 10;
    exp++;
  }

  return {n: round(value), exp: exp}
}

export const earths_to_kg =(mass: number): DataValue => {
  return {
    value: formatValue({n: 5.972 * mass, exp: 24}),
    unit: Units.kg
  }
}

export const earths_to_lb = (mass: number): DataValue => {
  return {
    value: formatValue({n: 1.317 * mass, exp: 25}),
    unit: Units.lb
  }
}

export const au_to_km = (distance: number): DataValue => {
  return {
    value: formatValue({n: 1.496 * distance, exp: 8}),
    unit: Units.km
  }
}

export const au_to_mi = (distance: number): DataValue => {
  return {
    value: formatValue({n: 9.296 * distance, exp: 7}),
    unit: Units.mi
  }
}

export const km_to_mi = (distance: number): DataValue => {
  return {
    value: formatValue({n: distance / 1.609}),
    unit: Units.mi
  }
}

export const kmps_to_mips = (speed: number): DataValue => {
  return {
    value: formatValue({n: speed / 1.609}),
    unit: Units.mips
  }
}

export const y_to_d = (time: number): DataValue => {
  return {
    value: formatValue({n: 365.25 * time}),
    unit: Units.d
  }
}

export const d_to_h = (time: number): DataValue => {
  return {
    value: formatValue({n: 24 * time}),
    unit: Units.h
  }
}
