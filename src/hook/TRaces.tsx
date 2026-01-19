import type { IAbilityScore } from "./TAbilityScore"
import type { ILanguage } from "./TLanguage"
import type { IProficiency } from "./TProficiency"
import type { ISubrace } from "./TSubrace"
import type { ITrait } from "./TTraits"

export type IRaces = IRace[]

export interface IRace{
    index: string
    speed: number
    ability_bonuses: IAbilityBonus[]
    alignment: string
    age: string
    size: string
    size_description: string
    starting_proficiencies: IProficiency[]
    language: ILanguage[]
    language_desc: string
    traits: ITrait[]
    subraces: ISubrace[]
}

export interface IAbilityBonus{
    bonus: number
    ability_score: IAbilityScore[]
}