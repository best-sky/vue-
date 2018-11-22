import Home from '@/components/home.vue'
import versionSee from '@/components/nav1/versionSee'
import maintenance from '@/components/nav1/maintenance'
import index from '@/components/charts/index'
import index2 from '@/components/base/edit'
import Login from '@/components/login'
import Test from '@/components/nav1/test'

const routes = [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: Home,
      children:[
      	{
      		path: 'application/versionSee',
          component: versionSee
      	},
      	{
      		path: 'application/maintenance',
          component: maintenance
        },
        {
      		path: 'index',
          component: index
        },
        {
      		path: 'application/index',
          component: index2
        },
        {
      		path: 'application/test',
          component: Test
      	}
      ]
    },
];
export default routes;
