import { createContext, useContext } from 'react'
import EnvStore from './env'

interface Store {
  envStore: any
}

const stores = {
  envStore: EnvStore
}

const storeContext = createContext(stores)

const useStores = (): Store => {
  const store = useContext(storeContext)
  if (!store) {
    throw new Error('Empty Store')
  }
  return store
}

export { useStores }
