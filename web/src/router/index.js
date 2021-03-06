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
  console.log("ð")
  const auth = createAuth0();
  console.log(auth)
  // console.log(to.matched.some(record => record.meta.authority))

  if (!to.matched.some(record => record.meta.authority)) { next() }

  //æ¨©éã®åå¾
  // Dashboard > Applications > APIs > Auth0 Mannagement API > API Explorer:GUIä¸ã§ãã¼ã¯ã³ãçºè¡å¯
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
    //æ¨©éããªãã®ã§ãªãã¤ã¬ã¯ã
    next({
      path: '/redirect',
    })
  }


})

export default router

