import type { IAbilityScore } from "./TAbilityScore"
import type { IProficiency } from "./TProficiency"
import type { ISubclass } from "./TSubClass"

export type IClasses = IClass[]

export interface IClass{
    index: string
    name: string
    hit_die: number
    class_levels: string
    multi_classing: Multiclassing
    spellcasting: Spellcasting | null
    spells: string
    starting_equipment: {
        quantity: number
        equipment: {
            index: string
        }
    }[]
    starting_equipment_options: {
        desc: string
        choose: number
        type: string
        from: {
            quantity: number
            equipment: {
                index: string
            }
        }[]
    }[]
    proficiency_choices: {
        desc: string
        choose: number
        type: string
        from: IProficiency[]
    }[]
    proficiencies: IProficiency[]
    saving_throws: {
        index: string
        name: string
    }[]
    subclasses: ISubclass[]
}

export interface Multiclassing{
    prerequisites: {
        ability_score: IAbilityScore[]
        minumum_score: number
    }[]
    prerequisite_options: {
        desc: string[]
        choose: number
        type: string
        from: IAbilityScore[]
    }[]
    proficiencies: IProficiency[]
    proficiency_choices: {
        desc: string
        choose: number
        type: string
        from: IProficiency[]
    }[]
}

export interface Spellcasting{
    level: number
    info : {
        name: string
        desc: string[]
    }[]
    spellcasting_ability: {
        index: string
    }
}