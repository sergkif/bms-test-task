
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Person.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    name: "404",
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
