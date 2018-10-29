import Vue from 'vue'
import Router from 'vue-router'
import letter from '@/pages/letter'
import inboxMail from '@/pages/inbox-mail'
import starMail from '@/pages/star-mail'
import draftsMail from '@/pages/drafts-mail'
import sentMail from '@/pages/sent-mail'
import writeMail from '@/pages/write'
import mailDetails from '@/pages/mail-details'
import addressList from '@/pages/address-list'

import notfind from '@/pages/notfind'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'letter',
      path: '/',
      redirect: '/letter'
      // component: letter
    },
    {
      path: '/letter',
      redirect: '/letter/inbox',
      component: letter,
      children: [
        {
          name: 'inbox',
          path: 'inbox',
          component: inboxMail
        },
        {
          name: 'star',
          path: 'star',
          component: starMail
        },
        {
          name: 'drafts',
          path: 'drafts',
          component: draftsMail
        },
        {
          name: 'sent',
          path: 'sent',
          component: sentMail
        },
        {
          name: 'write',
          path: 'write',
          redirect: '/write'
        }
      ]
    },
    {
      path: '/mailDetails/:id',
      component: mailDetails
    },
    {
      path: '/write',
      component: writeMail
    },
    {
      path: '/addressList',
      component: addressList
    },
    {
      path: '*',
      // redirect: '/',
      component: notfind
    }
  ]
})
