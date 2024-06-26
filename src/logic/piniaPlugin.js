export function myPlugin({ store, options }) {


  console.log("my myPlugin")
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
