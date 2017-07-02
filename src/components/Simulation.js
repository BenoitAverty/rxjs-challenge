import React from 'react'
import Rx from 'rxjs'

import {ANIMATION_SIZE} from 'simulation/constants'
import {drawCrossroad, drawSimulation} from 'simulation/rendering'

export default class Simulation extends React.Component {
  componentDidMount() {
    drawCrossroad(this.backgroundCanvas.getContext('2d'))
    this.subscription = this.props.simulation
      .observeOn(Rx.Scheduler.animationFrame)
      .subscribe(drawSimulation(this.animationCanvas.getContext('2d')))
  }

  componentDidUpdate(prevProps) {
    if(prevProps.simulation !== this.props.simulation) {
      this.subscription.unsubscribe()
      this.subscription = this.props.simulation
        .observeOn(Rx.Scheduler.animationFrame)
        .subscribe(drawSimulation(this.animationCanvas.getContext('2d')))
    }
  }

  render() {
    return (
      <div>
        <canvas width={ANIMATION_SIZE} height={ANIMATION_SIZE} ref={c => this.backgroundCanvas = c} style={{position: 'absolute'}}></canvas>
        <canvas width={ANIMATION_SIZE} height={ANIMATION_SIZE} ref={c => this.animationCanvas = c} style={{position: 'absolute'}}></canvas>
      </div>
    )
  }
}
