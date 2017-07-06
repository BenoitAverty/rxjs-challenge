import { Observable } from 'rxjs'
import { pipe, over, lensProp, and, set, ifElse } from 'ramda'

import {
  ANIMATION_SIZE,
  ANIMATION_FRAME,
  CARS_LENGTH,
  CARS_SPEED,
  DIRECTION_RIGHT,
  DIRECTION_TOP,
  ROAD_WIDTH
} from 'simulation/constants'
import { vector, add, isInBox } from 'geometry/vectors'

const setDirection = set(lensProp('direction'))

// Check if a set of coordinates corresponding to a car is inside the animation.
const carIsInside = isInBox(
  -CARS_LENGTH,
  -CARS_LENGTH,
  ANIMATION_SIZE + CARS_LENGTH,
  ANIMATION_SIZE + CARS_LENGTH
)

// Check if a car is on the top to bottom
const isOnVerticalRightLane = isInBox(
  ANIMATION_SIZE / 2 + ROAD_WIDTH / 4 - CARS_SPEED / 2,
  -CARS_LENGTH,
  ANIMATION_SIZE / 2 + ROAD_WIDTH / 4 + CARS_SPEED / 2,
  ANIMATION_SIZE + CARS_LENGTH
)

// Move a set of coordinates to the right, according to the car speed.
const moveRight = pipe(
  add(vector(CARS_SPEED, 0)),
  setDirection(DIRECTION_RIGHT)
)

const moveTop = pipe(add(vector(0, -CARS_SPEED)), setDirection(DIRECTION_TOP))

const leftToRightMovement$ = Observable.interval(ANIMATION_FRAME)
  .startWith({ ...vector(-CARS_LENGTH / 2, 435), direction: DIRECTION_RIGHT })
  .scan(moveRight)

const leftToTopMovement$ = Observable.interval(ANIMATION_FRAME)
  .startWith({ ...vector(-CARS_LENGTH / 2, 435), direction: DIRECTION_RIGHT })
  .scan(ifElse(isOnVerticalRightLane, moveTop, moveRight))

export const leftToRightCar = () => leftToRightMovement$.takeWhile(carIsInside)

export const leftToTopCar = () => leftToTopMovement$.takeWhile(carIsInside)
