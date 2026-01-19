import type { ILanguage } from "./TLanguage"
import type { IProficiency } from "./TProficiency"
import type { IAbilityBonus, IRace } from "./TRaces"

export type ISubraces = ISubrace[]

export interface ISubrace{
    index: string
    name: string
    desc: string
    race: IRace[]
    ability_bonuses: IAbilityBonus[]
    starting_proficiencies: IProficiency[]
    languages: ILanguage[]
    language_options: {
        desc: string
        choose: number
        type: string
        from: ILanguage[]
    }
    racial_traits: {
        index: string
        name: string
    }
}