import {Depth} from '../Object/_Internal'
import {Nullable as ONullable} from '../Object/Nullable'
import {TupleOf} from '../Object/TupleOf'
import {Equals} from '../Any/Equals'
import {Cast} from '../Any/Cast'
import {Index} from '../_Internal'
import {ObjectOf} from './ObjectOf'
import {Contains} from '../Any/Contains'
import {Keys} from './Keys'

/** Make some entries of **`T`** nullable (deeply or not)
 * @param T to make nullable
 * @param K to choose entries (?=`keyof O`)
 * @param depth to do it deeply (?=`'flat'`)
 * @returns **`any[]`**
 * @example
 * ```ts
 * ```
 */
export type Nullable<T extends any[], K extends Index = keyof T, depth extends Depth = 'flat'> = {
    1: Cast<ONullable<T, K, depth>, any[]>
    0: TupleOf<ONullable<ObjectOf<T>, K, depth>>
}[Contains<K, Keys<T>>]
