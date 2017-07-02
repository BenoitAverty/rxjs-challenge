import {Observable} from 'rxjs'
import {over, lensProp, and} from 'ramda'

import {ANIMATION_SIZE, ANIMATION_FRAME, CARS_LENGTH, CARS_SPEED, DIRECTION_RIGHT, DIRECTION_BOTTOM} from 'simulation/constants'
import {vector, add, isInBox} from 'geometry/vectors'

// Check if a set of coordinates corresponding to a car is inside the animation.
const carIsInside = isInBox(
  -CARS_LENGTH,
  -CARS_LENGTH,
  ANIMATION_SIZE+CARS_LENGTH,
  ANIMATION_SIZE+CARS_LENGTH,
)

// Move a set of coordinates to the right, according to the car speed.
const moveRight = add(vector(CARS_SPEED, 0))

const leftToRightMovement$ = Observable.interval(ANIMATION_FRAME)
  .startWith({ ...vector(-CARS_LENGTH/2, 435), direction: DIRECTION_RIGHT})
  .scan(moveRight)
  .takeWhile(carIsInside)

const topToRightMovement$ = Observable.interval(ANIMATION_FRAME).take(0)
  .startWith({ ...vector(365, CARS_LENGTH), direction: DIRECTION_BOTTOM })
  // .scan(topToRight)

export const leftToRightCar = () => leftToRightMovement$
  .concat(Observable.of(null))

export const topToRightCar = () => topToRightMovement$
  // .concat(Observable.of(null))
