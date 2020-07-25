import {Exclude} from '../Union/Exclude'
import {Match} from '../Any/_Internal'
import {Is} from '../Any/Is'
import {At} from './At'
import {Keys} from './Keys'

/**
@hidden
*/
export type _ExcludeMatch<O extends object, O1 extends object, match extends Match> = {
    [K in keyof O]-?: {
        1: never
        0: K
    }[Is<O[K], At<O1, K>, match>]
}[keyof O]

/**
@hidden
*/
type ExcludeMatch<O extends object, O1 extends object, match extends Match> =
    O extends unknown
    ? _ExcludeMatch<O, O1, match>
    : never

/**
Exclude the keys of **`O1`** out of the keys of **`O`**
(If `match = 'default'`, no type checks are done)
@param O to remove the keys from
@param O1 to remove the keys out
@param match (?=`'default'`) to change precision
@returns [[Key]]
@example
```ts
```
*/
export type ExcludeKeys<O extends object, O1 extends object, match extends Match = 'default'> = {
    'default'     : Exclude<Keys<O>, Keys<O1>>
    'contains->'  : ExcludeMatch<O,  O1, 'contains->'>
    'extends->'   : ExcludeMatch<O,  O1, 'extends->'>
    'implements->': ExcludeMatch<O,  O1, 'implements->'>
    '<-contains'  : ExcludeMatch<O,  O1, '<-contains'>
    '<-extends'   : ExcludeMatch<O,  O1, '<-extends'>
    '<-implements': ExcludeMatch<O,  O1, '<-implements'>
    'equals'      : ExcludeMatch<O,  O1, 'equals'>
}[match]
