import {curry, forEach} from 'ramda'

import {
  ANIMATION_SIZE,
  ROAD_WIDTH,
  SIDEWAY_WIDTH,
  CROSSWALK_WIDTH,
  CROSSWALK_LINES_COUNT,
  CROSSWALK_LINES_GAP_RATIO,
  CROSSWALK_OFFSET,
  MARKINGS_WIDTH,
  MARKINGS_LENGTH,
  MARKINGS_LINES_GAP_RATIO,
  BACKGROUND_COLOR,
  ROAD_COLOR,
  SIDEWAY_COLOR,
  MARKINGS_COLOR,
  CARS_WIDTH,
  CARS_LENGTH,
  CARS_COLOR,
} from 'simulation/constants'

/**
 * Draw the crossroad. This should be drawn on a separate canvas of the simulation because it's not going to move.
 */
export function drawCrossroad(context) {
  // Draw the background
  context.fillStyle = BACKGROUND_COLOR
  context.fillRect(0,0,ANIMATION_SIZE,ANIMATION_SIZE)

  // Draw the sidewaw
  context.fillStyle = SIDEWAY_COLOR
  context.fillRect(0, (ANIMATION_SIZE-ROAD_WIDTH-2*SIDEWAY_WIDTH) / 2, ANIMATION_SIZE, ROAD_WIDTH + 2*SIDEWAY_WIDTH)
  context.fillRect((ANIMATION_SIZE-ROAD_WIDTH-2*SIDEWAY_WIDTH) / 2, 0, ROAD_WIDTH + 2*SIDEWAY_WIDTH, ANIMATION_SIZE)

  // Draw the road
  context.fillStyle = ROAD_COLOR
  context.fillRect(0, (ANIMATION_SIZE-ROAD_WIDTH) / 2, ANIMATION_SIZE, ROAD_WIDTH)
  context.fillRect((ANIMATION_SIZE-ROAD_WIDTH) / 2, 0, ROAD_WIDTH, ANIMATION_SIZE)

  // Draw the markings
  const lineWidth = (CROSSWALK_LINES_GAP_RATIO*ROAD_WIDTH) / (CROSSWALK_LINES_GAP_RATIO*CROSSWALK_LINES_COUNT+CROSSWALK_LINES_COUNT+1)
  const gapWidth = lineWidth/CROSSWALK_LINES_GAP_RATIO
  const crosswalk = [
    (ANIMATION_SIZE-ROAD_WIDTH) / 2 - CROSSWALK_LINES_GAP_RATIO - CROSSWALK_WIDTH/2 - CROSSWALK_OFFSET,
    (ANIMATION_SIZE-ROAD_WIDTH) / 2 + gapWidth,
    (ANIMATION_SIZE-ROAD_WIDTH) / 2 - CROSSWALK_LINES_GAP_RATIO - CROSSWALK_WIDTH/2 - CROSSWALK_OFFSET,
    (ANIMATION_SIZE-ROAD_WIDTH) / 2 + gapWidth + ROAD_WIDTH - 2*gapWidth,
  ]
  const crosswalkDash = [lineWidth, gapWidth]

  const midline = [
    0,
    ANIMATION_SIZE/2,
    (ANIMATION_SIZE-ROAD_WIDTH) / 2 - CROSSWALK_WIDTH - 2*CROSSWALK_OFFSET,
    ANIMATION_SIZE/2
  ]
  const midlineDash = [MARKINGS_LENGTH, MARKINGS_LENGTH/MARKINGS_LINES_GAP_RATIO]

  context.save()
  for(let i = 0; i < 4; ++i) {
    context.strokeStyle = MARKINGS_COLOR
    context.lineWidth = MARKINGS_WIDTH
    context.setLineDash(midlineDash)

    const [midlineX1, midlineY1, midlineX2, midlineY2] = midline
    context.beginPath()
    context.moveTo(midlineX1, midlineY1)
    context.lineTo(midlineX2, midlineY2)
    context.stroke()

    context.lineWidth = CROSSWALK_WIDTH
    context.setLineDash(crosswalkDash)

    const [crosswalkX1, crosswalkY1, crosswalkX2, crosswalkY2] = crosswalk
    context.beginPath()
    context.moveTo(crosswalkX1, crosswalkY1)
    context.lineTo(crosswalkX2, crosswalkY2)
    context.stroke()

    context.rotate(Math.PI/2)
    context.translate(0, -ANIMATION_SIZE)
  }
  context.restore()
}

/**
 * Draw a single car. The car is an object with x,y coordinates and a direction in radians.
 */
const drawCar = curry(function(context, { x, y, direction }) {
  context.fillStyle = CARS_COLOR
  context.save()
  context.translate(x,y)
  context.rotate(direction)
  context.fillRect(-CARS_LENGTH/2, -CARS_WIDTH/2, CARS_LENGTH, CARS_WIDTH)
  context.restore()
})

/**
 * Draw the given simulation state on a canvas context. See the destructuring at the begining of
 * the function to see what's contained in the simulation.
 */
export const drawSimulation = curry(function(context, simulation) {
  const {
    cars // An array containing cars objects.
  } = simulation

  // Clear the previously rendered simulation
  context.clearRect(0, 0, ANIMATION_SIZE, ANIMATION_SIZE)

  forEach(drawCar(context), cars)
})
