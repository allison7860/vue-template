import Vue from 'vue'
import Router from 'vue-router'
import comp1 from '@/components/comp1'
import articles from '@/views/articles'
import about from '@/views/about'
import tag from '@/views/tag'
import post from '@/views/post'
import contact from '@/views/contact'
import single from '@/views/single'
import faq from '@/views/faq'
import you from '@/views/you'


Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
  },
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'comp1',
      component: comp1
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles,
      children: [
        {
          path: '/tag/:tag',
          name: 'tag',
          component: tag,
        }
      ]
    },
    {
      path: '/single/:id',
      name: 'single',
      component: single,
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    },
    {
      path: '/you',
      name: 'you',
      component: you
    }
  ]
})
