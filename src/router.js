import Vue from 'vue'
import Router from 'vue-router'
// import { mapGetters } from 'vuex'
// import store from './store'

Vue.use(Router)

import Home from '@/components/Home'
import CreateProject from '@/components/Project/CreateProject'
import Projects from '@/components/Project/Projects'
import Project from '@/components/Project/Project';
import Hackers from '@/components/User/Hackers'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'




const router = new Router({
  // data() {
  //   return {
  //     store
  //   }
  // },
  mode: 'history',
  base: process.env.BASE_URL,
  // scrollBehavior: () => ({ x: 0, y: 0 }),
  // ...mapGetters(["user","profile"]),
  routes: [
     {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project/new',
      name: 'CreateProject',
      component: CreateProject
    },
    {
      path: '/project/:id',
      name: 'Project',
      props: true,
      component: Project
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/hackers',
      name: 'Hackers',
      component: Hackers
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
    // {
    //   path: '*',
    //   component: Home,
    // },
  ] 
})



// //! this is probably wrong
// router.beforeEach((to, from, next) => {
//   // store.dispatch('fetchProfile');
//   if (to.fullPath === '/users') {
//     console.table({to: to, to_fullPath: to.fullPath, from: from, next: next, storeLoggedIn: store.state.user.loggedIn})
//     if (!store.state.user.loggedIn) {
//       next('/login');
//     }
//   }
//   if (to.fullPath === '/login') {
//     if (store.state.user.loggedIn) {
//       next('/profile');
//     }
//   }
//   next();
// })

export default router