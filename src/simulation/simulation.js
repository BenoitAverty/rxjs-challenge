import { Observable } from 'rxjs'
import { defaultTo, reject, isNil, ifElse, always, objOf, equals } from 'ramda'

import { leftToRightCar, topToRightCar } from 'simulation/cars'

/**
 * Construct a simulation state with all the given elements. Returns an empty simulation
 * state if no parameters.
 */
function SimulationState (cars) {
  console.log('Building state')
  return {
    cars: defaultTo([], cars),
    started: true
  }
}

/**
 * Create the simulation as an observable that emits the state of the simulation each time it changes.
 * The simulation will start when the given Observable emits.
 */
export function createSimulation (startRequest$, resetRequest$) {
  console.log('Creating simulation')

  const onOffSwitch$ = Observable.merge(
    startRequest$.mapTo(true),
    resetRequest$.mapTo(false)
  )

  const cars$ = Observable.combineLatest(
    leftToRightCar(),
    leftToRightCar().delay(500).startWith(null),
    topToRightCar(),
    (...cars) => reject(isNil, cars)
  )

  const simulation$ = cars$.map(SimulationState)

  return onOffSwitch$
    .switchMap(
      ifElse(equals(true), always(simulation$), () =>
        Observable.of({ started: false })
      )
    )
    .startWith({ started: false })
}
