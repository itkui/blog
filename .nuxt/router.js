import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71e290b5 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _4eb6a49f = () => interopDefault(import('..\\pages\\guestbook.vue' /* webpackChunkName: "pages_guestbook" */))
const _3e1f7707 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _a414678c = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _3f5dedee = () => interopDefault(import('..\\pages\\admin\\article-edit.vue' /* webpackChunkName: "pages_admin_article-edit" */))
const _3f9c94c9 = () => interopDefault(import('..\\pages\\admin\\article-manage.vue' /* webpackChunkName: "pages_admin_article-manage" */))
const _2038b392 = () => interopDefault(import('..\\pages\\admin\\category-manage.vue' /* webpackChunkName: "pages_admin_category-manage" */))
const _275da7c0 = () => interopDefault(import('..\\pages\\admin\\comment-manage.vue' /* webpackChunkName: "pages_admin_comment-manage" */))
const _2ddd36de = () => interopDefault(import('..\\pages\\admin\\guestbook-manage.vue' /* webpackChunkName: "pages_admin_guestbook-manage" */))
const _27383fb4 = () => interopDefault(import('..\\pages\\admin\\profile-settings.vue' /* webpackChunkName: "pages_admin_profile-settings" */))
const _1a59e8a4 = () => interopDefault(import('..\\pages\\admin\\system-settings.vue' /* webpackChunkName: "pages_admin_system-settings" */))
const _ab478964 = () => interopDefault(import('..\\pages\\auth\\change-password.vue' /* webpackChunkName: "pages_auth_change-password" */))
const _2a14579f = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages_auth_login" */))
const _13f23609 = () => interopDefault(import('..\\pages\\blog\\_category\\index.vue' /* webpackChunkName: "pages_blog__category_index" */))
const _2246c6d0 = () => interopDefault(import('..\\pages\\blog\\_category\\_article.vue' /* webpackChunkName: "pages_blog__category__article" */))
const _d69119a0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _71e290b5,
    name: "admin"
  }, {
    path: "/guestbook",
    component: _4eb6a49f,
    name: "guestbook"
  }, {
    path: "/profile",
    component: _3e1f7707,
    name: "profile"
  }, {
    path: "/search",
    component: _a414678c,
    name: "search"
  }, {
    path: "/admin/article-edit",
    component: _3f5dedee,
    name: "admin-article-edit"
  }, {
    path: "/admin/article-manage",
    component: _3f9c94c9,
    name: "admin-article-manage"
  }, {
    path: "/admin/category-manage",
    component: _2038b392,
    name: "admin-category-manage"
  }, {
    path: "/admin/comment-manage",
    component: _275da7c0,
    name: "admin-comment-manage"
  }, {
    path: "/admin/guestbook-manage",
    component: _2ddd36de,
    name: "admin-guestbook-manage"
  }, {
    path: "/admin/profile-settings",
    component: _27383fb4,
    name: "admin-profile-settings"
  }, {
    path: "/admin/system-settings",
    component: _1a59e8a4,
    name: "admin-system-settings"
  }, {
    path: "/auth/change-password",
    component: _ab478964,
    name: "auth-change-password"
  }, {
    path: "/auth/login",
    component: _2a14579f,
    name: "auth-login"
  }, {
    path: "/blog/:category?",
    component: _13f23609,
    name: "blog-category"
  }, {
    path: "/blog/:category?/:article",
    component: _2246c6d0,
    name: "blog-category-article"
  }, {
    path: "/",
    component: _d69119a0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
