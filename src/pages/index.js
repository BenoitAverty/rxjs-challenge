import Rx from 'rxjs'
import Layout from 'components/Layout'
import Simulation from 'components/Simulation'

const simulation = Rx.Observable.of({
  cars: [{x: 130, y: 390}]
})

export default () => (
  <Layout>
    <Simulation simulation={simulation} />
  </Layout>
)
