import { Tuple } from "../../../collection/immutable/Tuple"
import type { Option } from "../../../data/Option"
import type { IO } from "../../Effect"
import type { XFiberRef } from "../definition"

/**
 * Atomically modifies the `XFiberRef` with the specified partial function.
 * If the function is undefined on the current value it doesn't change it.
 *
 * @tsplus fluent ets/XFiberRef updateSome
 * @tsplus fluent ets/XFiberRefRuntime updateSome
 */
export function updateSome_<EA, EB, A>(
  self: XFiberRef<EA, EB, A, A>,
  f: (a: A) => Option<A>,
  __tsplusTrace?: string
): IO<EA | EB, void> {
  return self.modify((v) => {
    const result = f(v)
    return Tuple(undefined, result._tag === "Some" ? result.value : v)
  })
}

/**
 * Atomically modifies the `XFiberRef` with the specified partial function.
 * If the function is undefined on the current value it doesn't change it.
 *
 * @ets_data_first updateSome_
 */
export function updateSome<A>(f: (a: A) => Option<A>, __tsplusTrace?: string) {
  return <EA, EB>(self: XFiberRef<EA, EB, A, A>): IO<EA | EB, void> =>
    self.updateSome(f)
}
