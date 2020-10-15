import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyB-SZ8O4PgSPny0uUgUrKyOobYNiwwN-hw",
  authDomain: "consolidacion-7c9eb.firebaseapp.com",
  databaseURL: "https://consolidacion-7c9eb.firebaseio.com",
  projectId: "consolidacion-7c9eb",
  storageBucket: "consolidacion-7c9eb.appspot.com",
  messagingSenderId: "727696279153",
  appId: "1:727696279153:web:4ee8f5a86e22bb098fbdd0"
};

firebase.initializeApp(firebaseConfig);


Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
