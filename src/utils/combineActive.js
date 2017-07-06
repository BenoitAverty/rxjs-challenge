import { Observable, Subscription } from 'rxjs'

/**
 * Custom rxjs operator that combines an observable of observables into an observable of arrays.
 * The new observable emits each time one of the inner observables emits.
 * Think of it like combineLatest(), but with an observable of observables as source instead of an
 * array of observables.
 * Credits to Ben Lesh (https://github.com/ReactiveX/RxJS/issues/1399)
 */
export default function combineActive (source) {
  return new Observable(subscriber => {
    let subs = []
    let currentValues = []
    let isComplete = false

    subscriber.add(
      source.subscribe(function (observable) {
        const sub = new Subscription()
        subscriber.add(sub)
        subs.push(sub)
        sub.add(
          observable.subscribe(
            value => {
              let index = subs.indexOf(sub)
              currentValues[index] = value
              subscriber.next(currentValues)
            },
            err => {
              subscriber.error(err)
            },
            () => {
              let index = subs.indexOf(sub)
              if (index !== -1) {
                subs.splice(index, 1)
                currentValues.splice(index, 1)
              }
              subscriber.remove(sub)
              if (isComplete) {
                subscriber.complete()
              }
            }
          )
        )
      })
    )
  })
}
