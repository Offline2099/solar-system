import { DataValue } from "../../types/ui";
import * as Units from './units';

export const earths_to_kg =(mass: number): DataValue => {
  return {
    value: 5.972e24 * mass,
    unit: Units.kg
  }
}

export const earths_to_lb = (mass: number): DataValue => {
  return {
    value: 1.317e25 * mass,
    unit: Units.lb
  }
}

export const au_to_km = (distance: number): DataValue => {
  return {
    value: 1.496e8 * distance,
    unit: Units.km
  }
}

export const au_to_mi = (distance: number): DataValue => {
  return {
    value: 9.296e7 * distance,
    unit: Units.mi
  }
}

export const km_to_mi = (distance: number): DataValue => {
  return {
    value: distance / 1.609,
    unit: Units.mi
  }
}

export const kmps_to_mips = (speed: number): DataValue => {
  return {
    value: speed / 1.609,
    unit: Units.mips
  }
}

export const y_to_d = (time: number): DataValue => {
  return {
    value: 365.25 * time,
    unit: Units.d
  }
}

export const d_to_h = (time: number): DataValue => {
  return {
    value: 24 * time,
    unit: Units.h
  }
}

export const mps2_to_g = (acceleration: number): DataValue => {
  return {
    value: acceleration / 9.81,
    unit: Units.g
  }
}
