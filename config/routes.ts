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
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                icon: 'BarChartOutlined',
                name: 'Dashboard',
                component: './pages/Welcome',
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
