import type { IAbilityScore } from "./TAbilityScore"

export type ISkills = ISkill[]

export interface ISkill{
    index: string
    desc: string[]
    ability_score: IAbilityScore[]
}