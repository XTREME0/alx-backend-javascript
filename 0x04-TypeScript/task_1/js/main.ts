export interface Educator {
  readonly givenName: string,
  readonly familyName: string,
  isFullTime: boolean,
  yearsExperience?: number,
  city: string,
  [propName: string]: any,
}

export interface Administrator extends Educator {
  reportsCount: number,
}

export interface formatNameFunction {
  (givenName: string, familyName: string): string;
}

export function formatName(givenName: string, familyName: string): string {
  return `${givenName[0]}. ${familyName}`;
}

export interface ILearnerClassConstructor {
  new (givenName: string, familyName: string): ILearnerClass;
}

export interface ILearnerClass {
  completeHomework(): string;
  showName(): string;
}

export class LearnerClass implements ILearnerClass {
  private _givenName!: string;
  private _familyName!: string;

  constructor(givenName: string, familyName: string) {
    this._givenName = givenName;
    this._familyName = familyName;
  }

  completeHomework() {
    return 'Currently working';
  }

  showName() {
    return this._givenName;
  }
}

