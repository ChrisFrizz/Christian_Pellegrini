import type { IProficiency } from "./TProficiency"
import type { IRace } from "./TRaces"
import type { ISubrace } from "./TSubrace"

export type ITraits = ITrait[]

export interface ITrait{
    index: string
    name: string
    desc: string[]
    races: IRace[]
    subraces: ISubrace[]
    proficiencies: IProficiency[]
    proficiancy_choises:{
        desc: string
        choose: number
        type: string
        from: IProficiency[]
    }
    language_options:{
        desc: string
        choose: number
        type: string
        from: {
            index: string
            name: string
        }[]
    }
}