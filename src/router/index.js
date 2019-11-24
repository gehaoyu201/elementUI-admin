import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import ArticleList from '../views/ArticleList.vue'
import ArticleCreate from '../views/ArticleCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/articles/create', component: ArticleCreate },
      { path: '/articles/edit/:id', component: ArticleCreate, props: true },
      { path: '/articles/list', component: ArticleList }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
