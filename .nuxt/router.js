import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _734e1d8e = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _35c4dc28 = () => interopDefault(import('../pages/guestbook.vue' /* webpackChunkName: "pages/guestbook" */))
const _ed900660 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _2c40e951 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _1b16b0ea = () => interopDefault(import('../pages/admin/article-edit.vue' /* webpackChunkName: "pages/admin/article-edit" */))
const _103088c5 = () => interopDefault(import('../pages/admin/article-manage.vue' /* webpackChunkName: "pages/admin/article-manage" */))
const _31ce31bb = () => interopDefault(import('../pages/admin/category-manage.vue' /* webpackChunkName: "pages/admin/category-manage" */))
const _101cc888 = () => interopDefault(import('../pages/admin/comment-manage.vue' /* webpackChunkName: "pages/admin/comment-manage" */))
const _29441bda = () => interopDefault(import('../pages/admin/guestbook-manage.vue' /* webpackChunkName: "pages/admin/guestbook-manage" */))
const _229f24b0 = () => interopDefault(import('../pages/admin/profile-settings.vue' /* webpackChunkName: "pages/admin/profile-settings" */))
const _5c447428 = () => interopDefault(import('../pages/admin/system-settings.vue' /* webpackChunkName: "pages/admin/system-settings" */))
const _558981cc = () => interopDefault(import('../pages/auth/change-password.vue' /* webpackChunkName: "pages/auth/change-password" */))
const _de392b2a = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _b28242c8 = () => interopDefault(import('../pages/blog/_category/index.vue' /* webpackChunkName: "pages/blog/_category/index" */))
const _589bf15d = () => interopDefault(import('../pages/blog/_category/_article.vue' /* webpackChunkName: "pages/blog/_category/_article" */))
const _5ace518e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _734e1d8e,
    name: "admin"
  }, {
    path: "/guestbook",
    component: _35c4dc28,
    name: "guestbook"
  }, {
    path: "/profile",
    component: _ed900660,
    name: "profile"
  }, {
    path: "/search",
    component: _2c40e951,
    name: "search"
  }, {
    path: "/admin/article-edit",
    component: _1b16b0ea,
    name: "admin-article-edit"
  }, {
    path: "/admin/article-manage",
    component: _103088c5,
    name: "admin-article-manage"
  }, {
    path: "/admin/category-manage",
    component: _31ce31bb,
    name: "admin-category-manage"
  }, {
    path: "/admin/comment-manage",
    component: _101cc888,
    name: "admin-comment-manage"
  }, {
    path: "/admin/guestbook-manage",
    component: _29441bda,
    name: "admin-guestbook-manage"
  }, {
    path: "/admin/profile-settings",
    component: _229f24b0,
    name: "admin-profile-settings"
  }, {
    path: "/admin/system-settings",
    component: _5c447428,
    name: "admin-system-settings"
  }, {
    path: "/auth/change-password",
    component: _558981cc,
    name: "auth-change-password"
  }, {
    path: "/auth/login",
    component: _de392b2a,
    name: "auth-login"
  }, {
    path: "/blog/:category?",
    component: _b28242c8,
    name: "blog-category"
  }, {
    path: "/blog/:category?/:article",
    component: _589bf15d,
    name: "blog-category-article"
  }, {
    path: "/",
    component: _5ace518e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
