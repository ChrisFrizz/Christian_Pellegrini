import type { IClass } from "./TClass"
import type { ISpell } from "./TSpell"

export type ISubclasses = ISubclass[]

export interface ISubclass{
    index: string
    name: string
    desc: string[]
    class: IClass[]
    subclass_flavor: string
    subclass_levels: string
    spells: ISpell[]
}