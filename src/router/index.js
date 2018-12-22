import Vue from 'vue'
import Router from 'vue-router'

// import index from '@/components/index'
// import tags from '@/components/tags'
// import archives from '@/components/archives'
// import about from '@/components/about'
// import articles from '@/components/articles'
// import tagarticle from '@/components/tagarticle'
const index = r => require.ensure([], () => r(require('@/components/index')))
const tags = r => require.ensure([], () => r(require('@/components/tags')))
const archives = r => require.ensure([], () => r(require('@/components/archives')))
const about = r => require.ensure([], () => r(require('@/components/about')))
const articles = r => require.ensure([], () => r(require('@/components/articles')))
const tagarticle = r => require.ensure([], () => r(require('@/components/tagarticle')))

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/tags',
      name: 'tags',
      component: tags
    },
    {
      path: '/archives',
      name: 'archives',
      component: archives
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/articles/:id',
      name: 'articles',
      component: articles
    },
    {
      path: '/tags/:id',
      name: 'tagarticle',
      component: tagarticle
    }
  ]
})

export default router
