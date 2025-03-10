
import { createPinia } from 'pinia'

export function setupApp(app) {

  const pinia = createPinia()
  pinia.use(piniaPlugin)
  app.use(pinia)
}


export function piniaPlugin({ store, options }) {


  if (!options.persist) {
    return
  }
  let fromStorage = localStorage.getItem(store.$id);
  if (fromStorage) {
    store.$patch(JSON.parse(fromStorage))
  }

  store.$subscribe((mutation, state,) => {
    localStorage.setItem(mutation.storeId, JSON.stringify(state));
  },
    {
      detached: true,
    },
  )

}
