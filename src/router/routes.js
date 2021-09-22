const routes = [
  {
    path: '/',
    component: () => import('layouts/layouts.vue'),
    children: [
      /* aLLPAGES Page */
      {
        path: "",
        component: () => import('pages/Allpages.vue'),
      },
      {
        path: "home",
        name: 'home',
        component: () => import('pages/Home.vue'),
      },
      {
        path: "/About",
        name: '/About',
        component: () => import('pages/About.vue'),
      },
      {
        path: "/Products",
        name: '/Products',
        component: () => import('pages/Products.vue'),
      },
    ],
  },




  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
