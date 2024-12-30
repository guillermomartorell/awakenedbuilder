export interface IStat {
    label: string;
    type: string;
    val: string[];
    description?: string;
    possessed?: string;
    specialty?: string
  }

  export enum EStat {
    ATTRIBUTE = 'attributes',
    SKILL = 'skills',
    SPHERE = 'spheres'
  }

  export const isGroupedCounter = (type: EStat) => type === EStat.SKILL || type === EStat.ATTRIBUTE ? true : false