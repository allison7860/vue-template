import Vue from 'vue'
import Router from 'vue-router'
import comp1 from '@/components/comp1'
import articles from '@/views/articles'
import about from '@/views/about'
import tag from '@/views/tag'
import post from '@/views/post'
import contact from '@/views/contact'
import single from '@/views/single'



Vue.use(Router)

export default new Router({
  mode: 'history',
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
          path: 'tag/:tag',
          name: 'tag',
          component: tag,
        },
        {
          path: 'single',
          name: 'single',
          component: single,
        }
      ]
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
    }
  ]
})
