import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'flatpickr/dist/flatpickr.min.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";


import App from './App.vue'
import router from './router/index.js'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCalendar, faCarCrash, faCreditCard, faGear, faPlus, faRightFromBracket, faUser, faUserEdit,faPenToSquare,faTrash,faList,faHandshake,faGlobe,faFile,faUserTie,faHashtag, faCircleUser, faHouse, faDiagramProject, faListCheck, faLayerGroup, faPaperPlane, faCaretDown, faEllipsisV,faMagnifyingGlass, faBarsProgress, faBinoculars, faCoins, faPaperclip, faStar, faPhone, faEnvelope, faLocation, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faSlack } from '@fortawesome/free-brands-svg-icons'

library.add(faUserEdit, faCarCrash, faPlus, faRightFromBracket, faGear, faCreditCard, faCalendar, faUser,faPenToSquare,faTrash,faList,faHandshake,faGlobe,faFile,faHashtag,faUserTie,faCircleUser,faHouse,faDiagramProject, faListCheck,faLayerGroup, faPaperPlane,faListCheck,faCaretDown,faEllipsisV,faGlobe,faMagnifyingGlass,faBarsProgress,faLayerGroup,faBinoculars,faCreditCard,faCoins,faSlack,faPaperclip,faStar,faPhone,faEnvelope,faLocationDot);

const app = createApp(App)
app.component('ficon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)


app.mount('#app')