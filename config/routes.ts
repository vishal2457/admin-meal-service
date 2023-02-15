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
                redirect: '/ant-design',
              },
              {
                path: '/ant-design',
                icon: 'star',
                name: 'Ant Design',
                component: './pages/AntDesign',
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
