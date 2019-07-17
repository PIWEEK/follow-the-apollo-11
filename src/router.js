import Vue from 'vue'
import Router from 'vue-router'

import Game from './views/Game/Game.vue'
import Intro from './views/Intro/Intro.vue'
import Find from './views/Find/Find.vue'
import HelmetQuestion from './views/HelmetQuestion/HelmetQuestion.vue'

import Object3D from './views/Object3D.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game,
      children: [
        {
          path: '',
          name: 'game:intro',
          component: Intro
        },
        {
          path: 'find',
          name: 'game:find',
          component: Find
        },
        {
          path: 'question-helmet',
          name: 'game:question:helmet',
          component: HelmetQuestion
        }
      ]
    },
    {
      path: '/object3D',
      name: 'object3D',
      component: Object3D
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
