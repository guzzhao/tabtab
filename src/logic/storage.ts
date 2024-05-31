import { useWebExtensionStorage } from '~/composables/useWebExtensionStorage'

export const storageDemo = useWebExtensionStorage('webext-demo', 'Storage Demo')
export const search_config = useWebExtensionStorage('searchHistory', {
  search_engine: 'baidu',
})

export const fullscreen = useWebExtensionStorage('fullscreen', false)
