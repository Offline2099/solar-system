import { DataValueUnit } from "../../types/ui";


// Time 

export const my: DataValueUnit  = {
  single: [{s: 'million years'}]
}

export const y: DataValueUnit  = {
  single: [{s: 'year'}],
  plural: [{s: 'years'}]
}

export const d: DataValueUnit  = {
  single: [{s: 'day'}],
  plural: [{s: 'days'}]
}

export const h: DataValueUnit  = {
  single: [{s: 'hour'}],
  plural: [{s: 'hours'}]
}


// Distance

export const km: DataValueUnit  = {
  single: [{s: 'km'}]
}

export const mi: DataValueUnit  = {
  single: [{s: 'mi'}]
}

export const au: DataValueUnit  = {
  single: [{s: 'AU'}]
}

export const ly: DataValueUnit  = {
  single: [{s: 'light-year'}],
  plural: [{s: 'light-years'}]
}


// Speed

export const kmps: DataValueUnit  = {
  single: [{s: 'km/s'}]
}

export const mips: DataValueUnit  = {
  single: [{s: 'mi/s'}]
}


// Acceleration 

export const g: DataValueUnit  = {
  single: [{s: 'g'}]
}

export const kmps2: DataValueUnit  = {
  single: [{s: 'm/s'}, {s: '2', sup: true}]
}


// Mass

export const kg: DataValueUnit  = {
  single: [{s: 'kg'}]
}

export const lb: DataValueUnit  = {
  single: [{s: 'lb'}]
}

export const earths: DataValueUnit  = {
  single: [{s: 'Earth Mass'}],
  plural: [{s: 'Earth Masses'}]
}


// Density

export const kgpm3: DataValueUnit  = {
  single: [{s: 'kg/m'}, {s: '3', sup: true}]
}


// Angle

export const deg: DataValueUnit  = {
  single: [{s: '°'}],
  noSpace: true
}
