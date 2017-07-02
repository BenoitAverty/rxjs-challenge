import { curry } from 'ramda'

export const vector = (x, y) => ({ x, y })
export const add = curry(({ x: x1, y: y1 }, { x: x2, y: y2 }) => ({
  x: x1 + x2,
  y: y1 + y2
}))
export const isInBox = curry(
  (x1, y1, x2, y2, { x, y }) => x > x1 && x < x2 && y > y1 && y < y2
)
