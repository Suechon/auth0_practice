/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import { createAuth0 } from '@auth0/auth0-vue';
import publicRouter from './publicRouter'
import privateRouter from './privateRouter'
import axios from 'axios'



const routes = [...publicRouter, ...privateRouter]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log("😍")
  const auth = createAuth0();
  console.log(auth)
  // console.log(to.matched.some(record => record.meta.authority))

  if (!to.matched.some(record => record.meta.authority)) { next() }

  //権限の取得
  // Dashboard > Applications > APIs > Auth0 Mannagement API > API Explorer:GUI上でトークンを発行可
  var options = {
    method: 'GET',
    url: 'https://DOMAIN/api/v2/users/USER_ID/roles',
    headers: { authorization: "Bearer MGMT_API_ACCESS_TOKEN" }
  };
  let roleId = ""
  await axios.request(options).then(function (response) {
    roleId = response.data[0].id
  }).catch(function (error) {
    console.error(error);
  });
  if (roleId == "ROLE_ID") {
    next()
  } else {
    //権限がないのでリダイレクト
    next({
      path: '/redirect',
    })
  }


})

export default router

