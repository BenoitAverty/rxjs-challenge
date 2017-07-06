import { Observable } from 'rxjs'
import { defaultTo, reject, isNil, ifElse, always, objOf, equals } from 'ramda'

import { leftToRightCar, leftToTopCar } from 'simulation/cars'
import combineActive from 'utils/combineActive'

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

  // Every 400ms, 1/2 probability of a random car appearing.
  const randomCars$ = Observable.interval(400)
    .map(Math.random)
    .filter(n => n < 0.5)
    .map(n => (n < 0.25 ? leftToRightCar() : leftToTopCar()))

  const cars$ = combineActive(randomCars$)

  const simulation$ = cars$.map(SimulationState).startWith(SimulationState([]))

  return onOffSwitch$
    .switchMap(
      ifElse(equals(true), always(simulation$), () =>
        Observable.of({ started: false })
      )
    )
    .startWith({ started: false })
}
