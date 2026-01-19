import type { IClass } from "./TClass"
import type { IRace } from "./TRaces"

export type IProficiencies = IProficiency[]

export interface IProficiency{
    index: string
    type: string
    classes: IClass[]
    races: IRace[]
}