import { observable, makeObservable, action, configure } from 'mobx'

configure({ useProxies: 'ifavailable' })

export class EnvStore {
  constructor () {
    makeObservable(this)
  }

  @observable
    testId: string = ''

  @action
  setTestId (id: string): void {
    this.testId = id
  }
}

export default new EnvStore()
