// imports always go at the top
import LogInPage from './modules/LoginPage.js';
import HomePage from './modules/HomePage.js';
import ErrorPage from './modules/ErrorPage.js';

const { createApp } = Vue; //import the createApp method from the Vue library

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes: [
        //the vue router will try to match these routes
        //this is what you put in the location bar in the brower
        //when you get a match, vue will render the specified component
        //into the router-view tag in index.html
        { 
            path: '/', //brower location bar looks like this
            name: 'login', //for programmatiuc navigation
            component: LogInPage // the component to render
        },

        { 
            path: '/home', //brower location bar looks like this
            name: 'home', //for programmatiuc navigation
            component: HomePage // the component to render
        },

        //put a catch-all for broken routes at the very bottom of your routes stack
        //if vue router cant match a give route, itll display a generic error component
        { 
            path: '/:pathMatch(.*)*', //brower location bar looks like this
            name: 'error', //for programmatiuc navigation
            component: ErrorPage // the component to render
        }
    ] // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.
  const app = Vue.createApp({
    methods: {
        tryRouterPush() {
            //programmatic routing
            this.$router.push({
                name: 'home'
            })
        }
    }
  });
  // Make sure to _use_ the router instance to make the
  // whole app router-aware.
  app.use(router);
  
  app.mount('#app');