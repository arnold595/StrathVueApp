
import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Icons
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
          mdi
        }},
  components,
  directives,
})

//const app = createApp(App)

//app.use(router)

//app.mount('#app')

createApp(App).use(router).use(vuetify).mount('#app')