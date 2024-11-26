const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/HomeComp.vue') }, // Default route
      { path: '/fav', component: () => import('src/pages/FaV.vue') },
      { path: '/explore', component: () => import('src/pages/ExploreComp.vue') },
      { path: '/recommended', component: () => import('src/pages/ReccomendPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
