import {Observable} from 'rxjs'
import {defaultTo, reject, isNil} from 'ramda'

import {ANIMATION_SIZE, CARS_LENGTH, CARS_SPEED, DIRECTION_RIGHT} from 'simulation/constants'

/**
 * Construct a simulation state with all the given elements. Returns an empty simulation
 * state if no parameters.
 */
function SimulationState(cars) {
  console.log('Building state')
  return {
    cars: defaultTo([], cars),
    started: true,
  }
}

/**
 * Create the simulation as an observable that emits the state of the simulation each time it changes.
 * The simulation will start when the given Observable emits.
 */
export function createSimulation(startRequest$, resetRequest$) {
  console.log('Creating simulation')

  const reset$ = resetRequest$
    .do(e => console.log('Reset request received'))
    .mapTo({ started: false })

  const leftToRightMovement$ = Observable.interval(1000/60)
    .startWith({ x: -CARS_LENGTH/2, y: 435})
    .scan(({ x, y }) => ({ x: x+CARS_SPEED, y }))

  const leftToRightCar$ = leftToRightMovement$
    .takeWhile(({ x }) => x < ANIMATION_SIZE+CARS_LENGTH)
    .map(coord => ({ ...coord, direction: DIRECTION_RIGHT }))
    .concat(Observable.of(null))

  const cars$ = Observable.combineLatest(
    leftToRightCar$,
    leftToRightCar$.delay(500).startWith(null),
    (c1, c2) => reject(isNil, [c1, c2])
  )

  return startRequest$
    .flatMapTo(cars$)
    .map(SimulationState)
    .startWith({ started: false })
    .takeUntil(reset$)
    .merge(reset$)
}
