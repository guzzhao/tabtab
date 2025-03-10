import { createApp } from 'vue'
import App from './NewTab.vue'
import { setupApp } from '~/module/logic/common-setup'

import '../../styles'

const app = createApp(App)
setupApp(app)
app.mount('#app')
