import { DataUnit } from '../types/ui/data-unit.interface';

//=============================================================================
//  Time 
//=============================================================================

export const my: DataUnit = {
  single: [{s: 'million years'}]
}

export const y: DataUnit = {
  single: [{s: 'year'}],
  plural: [{s: 'years'}]
}

export const d: DataUnit = {
  single: [{s: 'day'}],
  plural: [{s: 'days'}]
}

export const h: DataUnit = {
  single: [{s: 'hour'}],
  plural: [{s: 'hours'}]
}

//=============================================================================
//  Distance 
//=============================================================================

export const km: DataUnit = {
  single: [{s: 'km'}]
}

export const mi: DataUnit = {
  single: [{s: 'mi'}]
}

export const au: DataUnit = {
  single: [{s: 'AU'}]
}

export const ly: DataUnit = {
  single: [{s: 'light-year'}],
  plural: [{s: 'light-years'}]
}

//=============================================================================
//  Speed 
//=============================================================================

export const mps: DataUnit = {
  single: [{s: 'm/s'}]
}

export const kmps: DataUnit = {
  single: [{s: 'km/s'}]
}

export const kmph: DataUnit = {
  single: [{s: 'km/h'}]
}

export const mips: DataUnit = {
  single: [{s: 'mi/s'}]
}

export const miph: DataUnit = {
  single: [{s: 'mph'}]
}

//=============================================================================
//  Acceleration 
//=============================================================================

export const g: DataUnit = {
  single: [{s: 'g'}]
}

export const mps2: DataUnit = {
  single: [{s: 'm/s'}, {s: '2', sup: true}]
}

//=============================================================================
//  Mass 
//=============================================================================

export const kg: DataUnit = {
  single: [{s: 'kg'}]
}

export const lb: DataUnit = {
  single: [{s: 'lb'}]
}

export const earths: DataUnit = {
  single: [{s: 'Earth Mass'}],
  plural: [{s: 'Earth Masses'}]
}

//=============================================================================
//  Density 
//=============================================================================

export const kgpm3: DataUnit  = {
  single: [{s: 'kg/m'}, {s: '3', sup: true}]
}

//=============================================================================
//  Angle 
//=============================================================================

export const deg: DataUnit  = {
  single: [{s: '°'}],
  noSpace: true
}
