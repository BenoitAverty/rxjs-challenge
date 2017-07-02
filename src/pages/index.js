import Rx from 'rxjs'
import Layout from 'components/Layout'
import Simulation from 'components/Simulation'

const simulation = Rx.Observable.of({
  cars: [{x: 210, y: 435, direction: 0}]
})

export default () => (
  <Layout>
    <Simulation simulation={simulation} />
  </Layout>
)
