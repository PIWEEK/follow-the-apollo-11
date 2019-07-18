import Vue from 'vue'
import Router from 'vue-router'

import Game from './views/Game/Game.vue'
import Intro from './views/Intro/Intro.vue'
import Find from './views/Find/Find.vue'
import HelmetQuestion from './views/HelmetQuestion/HelmetQuestion.vue'
import RocketQuestion from './views/RocketQuestion/RocketQuestion.vue'
import TrajectoryQuestion from './views/TrajectoryQuestion/TrajectoryQuestion.vue'
import EagleQuestion from './views/EagleQuestion/EagleQuestion.vue'
import MapQuestion from './views/MapQuestion/MapQuestion.vue'

import Object3D from './views/Object3D.vue'
import Certificate from './views/Certificate/Certificate.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
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
          path: 'helmet-question',
          name: 'game:helmet:question',
          component: HelmetQuestion
        },
        {
          path: 'rocket-question',
          name: 'game:rocket:question',
          component: RocketQuestion
        },
        {
          path: 'trajectory-question',
          name: 'game:trajectory:question',
          component: TrajectoryQuestion
        },
        {
          path: 'eagle-question',
          name: 'game:eagle:question',
          component: EagleQuestion
        },
        {
          path: 'map-question',
          name: 'game:map:question',
          component: MapQuestion
        }
      ]
    },
    {
      path: '/object3D',
      name: 'object3D',
      component: Object3D
    },
    {
      path: '/certificate',
      name: 'certificate',
      component: Certificate
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
