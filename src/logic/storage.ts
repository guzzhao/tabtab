import { useWebExtensionStorage } from '~/composables/useWebExtensionStorage'

export const storageDemo = useWebExtensionStorage('webext-demo', 'Storage Demo')
export const search_config = useWebExtensionStorage('searchHistory', {
  search_engine: 'baidu',
})

export const search_suggestion = useWebExtensionStorage('search_suggestion', {
  Base64: false,
})

export const fullscreen = useWebExtensionStorage('fullscreen', false)
