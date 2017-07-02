import {Observable} from 'rxjs'
import {defaultTo} from 'ramda'

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

  const cars$ = startRequest$
    .do(e => console.log('Start request received'))
    .mapTo([{x: 210, y: 435, direction: 0}])

  const reset$ = resetRequest$
    .do(e => console.log('Reset request received'))
    .mapTo({ started: false })

  return cars$
    .map(SimulationState)
    .startWith({ started: false })
    .merge(reset$)
}
