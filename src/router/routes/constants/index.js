import HomeView from '@/views/OneView'

export const PATH_HOME = {
  path: '/',
  name: 'home',
  component: HomeView
}

export const PATH_ONE = {
  path: '/one',
  name: 'one',
  component: () => import(/* webpackChunkName: "one" */ '@/views/OneView')
}

export const PATH_TWO = {
  path: '/two',
  name: 'two',
  component: () => import(/* webpackChunkName: "one" */ '@/views/TwoView')
}

export const PATH_THREE = {
  path: '/three',
  name: 'three',
  component: () => import(/* webpackChunkName: "one" */ '@/views/ThreeView')
}