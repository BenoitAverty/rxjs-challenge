import React from 'react'
import {range, map, concat,reduce} from 'ramda'

const ANIMATION_SIZE = 700
const ROAD_WIDTH = 160
const SIDEWAY_WIDTH = 40
const CROSSWALK_WIDTH = 80
const CROSSWALK_LINES_COUNT = 5
const CROSSWALK_LINES_GAP_RATIO = 2
const CROSSWALK_OFFSET = 10
const MARKINGS_WIDTH = 5
const MARKINGS_LENGTH = 15
const MARKINGS_LINES_GAP_RATIO = 3
const BACKGROUND_COLOR = '#617B4B'
const ROAD_COLOR = '#969593'
const SIDEWAY_COLOR = '#5F717D'
const MARKINGS_COLOR = '#FFFFFF'

/**
 * Draw the crossroad.
 */
function drawCrossroad(context) {
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

export default class Simulation extends React.Component {
  componentDidMount() {
    const context = this.canvas.getContext('2d')
    drawCrossroad(context)
  }

  render() {
    return (
      <canvas width={ANIMATION_SIZE} height={ANIMATION_SIZE} ref={c => this.canvas = c}></canvas>
    )
  }
}
