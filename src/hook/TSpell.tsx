import type { IClass } from "./TClass"
import type { ISubclass } from "./TSubClass"

export type ISpells = ISpell[]

export interface ISpell{
    index: string
    name: string
    desc: string[]
    higher_level: string[]
    range: string
    components: string[]
    material: string | null
    area_of_effect: {
        type: string
        size: number
    } | null
    ritual: boolean
    duration: string
    concentration: boolean
    casting_time: string
    level: number
    attack_type: string | null
    damage: {
        damage_type: {
            index: string
            name: string
        }
        damage_at_slot_level: {
            [key: number]: string
        }
    } | null
    school: {
        index: string
        name: string
    }
    classes: IClass[]
    subclasses: ISubclass[]
}