import type { ISkill } from "./TSkill"

export type IAbilityScores = IAbilityScore[]

export interface IAbilityScore{
    index: string
    full_name: string
    desc: string[]
    skills: ISkill[]
}

