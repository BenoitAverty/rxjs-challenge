import {Observable, Scheduler} from 'rxjs'
import {prop} from 'ramda'

import Layout from 'components/Layout'
import Simulation from 'components/Simulation'
import {createSimulation} from 'simulation/simulation'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      simulation: null,
      simulationStarted: false,
    }
  }

  componentDidMount() {
    const simulation = createSimulation(
      Observable.fromEvent(this.startButton, 'click'),
      Observable.fromEvent(this.resetButton, 'click'),
    )
    .do(s => console.log('new simulation state : ', s))
    .share()

    simulation
      .map(prop('started'))
      .subscribeOn(Scheduler.async)
      .subscribe(s => this.setState({ simulationStarted: s }))

    this.setState({ simulation })
  }

  render() {
    return (
      <Layout>
        <button disabled={this.state.simulationStarted} ref={b => this.startButton = b}>Start</button>
        <button disabled={!this.state.simulationStarted} ref={b => this.resetButton = b}>Reset</button>
        <Simulation simulation={this.state.simulation} />
      </Layout>
    )
  }
}
