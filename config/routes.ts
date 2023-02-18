export default [
  {
    path: '/',
    component: './layouts/RootLayout',
    routes: [
      {
        path: '/',
        routes: [
          {
            path: '/',
            component: './layouts/BasicLayout',
            routes: [
              {
                path: '/',
                redirect: '/add-meal',
              },
              {
                path: '/ant-design',
                icon: 'star',
                name: 'Ant Design',
                component: './pages/AntDesign',
              },
              {
                path: '/add-meal',
                icon: 'star',
                name: 'Add Meal',
                component: './pages/meal/add-meal.page',
              },
            ],
          },
          {
            component: './pages/404',
          },
        ],
      },
      {
        component: './pages/404',
      },
    ],
  },
  {
    component: './pages/404',
  },
]
