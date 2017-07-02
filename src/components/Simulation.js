import React from 'react'
import {range, map, concat,reduce} from 'ramda'

const ANIMATION_SIZE = 700
const ROAD_WIDTH = 160
const SIDEWAY_WIDTH = 40
const CROSSWALK_WIDTH = 80
const CROSSWALK_LINES_COUNT = 5
const CROSSROAD_LINES_GAP_RATIO = 2
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

  // Draw the crosswalks
  const lineWidth = (CROSSROAD_LINES_GAP_RATIO*ROAD_WIDTH) / (CROSSROAD_LINES_GAP_RATIO*CROSSWALK_LINES_COUNT+CROSSWALK_LINES_COUNT+1)
  const lineGap = lineWidth/CROSSROAD_LINES_GAP_RATIO

  context.lineWidth = lineWidth
  context.strokeStyle = MARKINGS_COLOR
  const crosswalkLeft = map(
    idx => [
      (ANIMATION_SIZE-ROAD_WIDTH) / 2 - CROSSWALK_WIDTH - CROSSWALK_OFFSET,
      (ANIMATION_SIZE-ROAD_WIDTH) / 2 + lineWidth/2 + lineGap + (lineWidth+lineGap)*idx,
      (ANIMATION_SIZE-ROAD_WIDTH) / 2 - CROSSWALK_OFFSET,
      (ANIMATION_SIZE-ROAD_WIDTH) / 2 + lineWidth/2 + lineGap + (lineWidth+lineGap)*idx,
    ],
    range(0, CROSSWALK_LINES_COUNT)
  )
  const crosswalkRight = map(([x1, y1, x2, y2]) => [x2+ROAD_WIDTH+2*CROSSWALK_OFFSET, y1, x2+CROSSWALK_WIDTH+ROAD_WIDTH+2*CROSSWALK_OFFSET, y2], crosswalkLeft)
  const crosswalkTop = map(([x1, y1, x2, y2]) => ([y1, x1, y2, x2]), crosswalkLeft)
  const crosswalkBottom = map(([x1, y1, x2, y2]) => ([y1, x1, y2, x2]), crosswalkRight)

  const crosswalk = reduce(concat, [], [crosswalkLeft, crosswalkRight, crosswalkTop, crosswalkBottom])
  crosswalk.forEach(
    ([x1, y1, x2, y2]) => {
      console.log(`drawing ${x1},${y1} ${x2},${y2}`)
      context.beginPath()
      context.moveTo(x1, y1)
      context.lineTo(x2, y2)
      context.stroke()
    }
  )

  // draw the markings
  context.lineWidth = MARKINGS_WIDTH
  context.strokeStyle = MARKINGS_COLOR
  context.setLineDash([MARKINGS_LENGTH, MARKINGS_LENGTH/MARKINGS_LINES_GAP_RATIO])

  const markingsLeft = [[0, ANIMATION_SIZE/2, (ANIMATION_SIZE-ROAD_WIDTH) / 2 - CROSSWALK_WIDTH - 2*CROSSWALK_OFFSET, ANIMATION_SIZE/2]]
  const markingsRight = map(([x1, y1, x2, y2]) => [ANIMATION_SIZE-x2, y1, ANIMATION_SIZE, y2], markingsLeft)
  const markingsTop = map(([x1, y1, x2, y2]) => ([y1, x1, y2, x2]), markingsLeft)
  const markingsBottom = map(([x1, y1, x2, y2]) => ([y1, x1, y2, x2]), markingsRight)

  const markings = reduce(concat, [], [markingsLeft, markingsRight, markingsTop, markingsBottom])
  markings.forEach(
    ([x1, y1, x2, y2]) => {
      console.log(`drawing ${x1},${y1} ${x2},${y2}`)
      context.beginPath()
      context.moveTo(x1, y1)
      context.lineTo(x2, y2)
      context.stroke()
    }
  )
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
