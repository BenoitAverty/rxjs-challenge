import React from 'react'
import Rx from 'rxjs'

import {ANIMATION_SIZE} from 'simulation/constants'
import {drawCrossroad, drawSimulation, drawLoadingIndicator} from 'simulation/rendering'

export default class Simulation extends React.Component {
  componentDidMount() {
    this.updateCanvas()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.simulation !== this.props.simulation) {
      if(this.subscription) {
        this.subscription.unsubscribe()
      }
      this.updateCanvas()
    }
  }

  updateCanvas() {
    drawCrossroad(this.backgroundCanvas.getContext('2d'))
    if(this.props.simulation !== null) {
      console.log("Subscribing to a new simulation")
      this.subscription = this.props.simulation
        // .observeOn(Rx.Scheduler.animationFrame)
        .subscribe(drawSimulation(this.animationCanvas.getContext('2d')))
    }
    else {
      drawLoadingIndicator(this.animationCanvas.getContext('2d'))
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
