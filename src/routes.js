const routes = [
   {
      path: '/',
      name: 'Home',
      component: () => import("./components/HomePage"),
   },
   {
      path: '/btlcndpt',
      name: 'Home',
      component: () => import("./components/HomePage"),
   },
   {
      path: '/btlcndpt/introducepeople',
      name: 'introduce',
      component: () => import('./components/IntroducePeople')
   },
   {
      path: '/btlcndpt/videomain',
      name: 'videomain',
      component: () => import('./components/VideoMain')
   }
]

export default routes