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
 * Draw the crossroad.
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

const drawCar = curry(function(context, { x, y }) {
  context.strokeStyle = CARS_COLOR
  context.lineWidth = CARS_WIDTH
  context.beginPath()
  context.moveTo(x-CARS_LENGTH/2, y)
  context.lineTo(x+CARS_LENGTH/2, y)
  context.stroke()
})

export const drawSimulation = curry(function(context, simulation) {
  const {
    cars
  } = simulation

  // Clear the previously rendered simulation
  context.clearRect(0, 0, ANIMATION_SIZE, ANIMATION_SIZE)

  forEach(drawCar(context), cars)
})
