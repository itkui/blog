import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _73794524 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _a11242e0 = () => interopDefault(import('..\\pages\\guestbook.vue' /* webpackChunkName: "pages_guestbook" */))
const _6cd77938 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages_profile" */))
const _020c3fe9 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages_search" */))
const _7191a2c2 = () => interopDefault(import('..\\pages\\admin\\article-edit.vue' /* webpackChunkName: "pages_admin_article-edit" */))
const _36286d3a = () => interopDefault(import('..\\pages\\admin\\article-manage.vue' /* webpackChunkName: "pages_admin_article-manage" */))
const _6a5a4834 = () => interopDefault(import('..\\pages\\admin\\category-manage.vue' /* webpackChunkName: "pages_admin_category-manage" */))
const _1de98031 = () => interopDefault(import('..\\pages\\admin\\comment-manage.vue' /* webpackChunkName: "pages_admin_comment-manage" */))
const _9e5691e2 = () => interopDefault(import('..\\pages\\admin\\guestbook-manage.vue' /* webpackChunkName: "pages_admin_guestbook-manage" */))
const _aba08036 = () => interopDefault(import('..\\pages\\admin\\profile-settings.vue' /* webpackChunkName: "pages_admin_profile-settings" */))
const _156dc35a = () => interopDefault(import('..\\pages\\admin\\system-settings.vue' /* webpackChunkName: "pages_admin_system-settings" */))
const _be2fd882 = () => interopDefault(import('..\\pages\\auth\\change-password.vue' /* webpackChunkName: "pages_auth_change-password" */))
const _5badd950 = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages_auth_login" */))
const _223d2890 = () => interopDefault(import('..\\pages\\blog\\_category\\index.vue' /* webpackChunkName: "pages_blog__category_index" */))
const _7542027e = () => interopDefault(import('..\\pages\\blog\\_category\\_article.vue' /* webpackChunkName: "pages_blog__category__article" */))
const _5d8764be = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _73794524,
    name: "admin"
  }, {
    path: "/guestbook",
    component: _a11242e0,
    name: "guestbook"
  }, {
    path: "/profile",
    component: _6cd77938,
    name: "profile"
  }, {
    path: "/search",
    component: _020c3fe9,
    name: "search"
  }, {
    path: "/admin/article-edit",
    component: _7191a2c2,
    name: "admin-article-edit"
  }, {
    path: "/admin/article-manage",
    component: _36286d3a,
    name: "admin-article-manage"
  }, {
    path: "/admin/category-manage",
    component: _6a5a4834,
    name: "admin-category-manage"
  }, {
    path: "/admin/comment-manage",
    component: _1de98031,
    name: "admin-comment-manage"
  }, {
    path: "/admin/guestbook-manage",
    component: _9e5691e2,
    name: "admin-guestbook-manage"
  }, {
    path: "/admin/profile-settings",
    component: _aba08036,
    name: "admin-profile-settings"
  }, {
    path: "/admin/system-settings",
    component: _156dc35a,
    name: "admin-system-settings"
  }, {
    path: "/auth/change-password",
    component: _be2fd882,
    name: "auth-change-password"
  }, {
    path: "/auth/login",
    component: _5badd950,
    name: "auth-login"
  }, {
    path: "/blog/:category?",
    component: _223d2890,
    name: "blog-category"
  }, {
    path: "/blog/:category?/:article",
    component: _7542027e,
    name: "blog-category-article"
  }, {
    path: "/",
    component: _5d8764be,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
