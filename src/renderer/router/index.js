import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/login').default
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/components/LandingPage').default,
      children: [
        //  聊天指针界面
        {
          path: '/chatPointers',
          name: 'chatPointers',
          components: {
            ChatPointers: () => import('@/components/pointers/ChatPointers')
          }
        },
        // 联系人界面
        {
          path: '/ContactsPointer',
          name: 'ContactsPointer',
          components: {
            ChatPointers: () => import('@/components/pointers/ContactsPointer')
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
