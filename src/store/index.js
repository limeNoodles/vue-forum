import Vue from "vue";
import Vuex from "vuex";
import getters from '../store/getters';
import mutations from '../store/mutations';
import actions from '../store/actions';
Vue.use(Vuex);

//全局状态管理，相当于一个公共变量，并且是响应式的，任何一个组件更改其内容，可以响应式更新页面

// const moduleA = {
//   state: {
//   name:"dddd"
// },
//   getters: {},
//   actions: {},
//   mutations:{}
// }

export default new Vuex.Store({

  state: {
    isLogin: window.sessionStorage.getItem('isLogin' || '[]') == null ? '' : true,
    user: {
      id: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).id,
      user_name: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).user_name,
      user_account: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).user_account,
      avatar_url: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).avatar_url,
      gender: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).gender,
      phone: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).phone,
      email: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).email,
      user_role: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).user_role,
      user_status: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).user_status,
      creat_time: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).creat_time,
      token: window.sessionStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.sessionStorage.getItem('user' || '[]')).token,
    },
    info: [
      {
          post_id: 0,
          post_type: "",
          post_title: "",
          post_content: "",
          post_userid: 0,
          post_star: 0,
          post_like: 0,
          post_reply: 0,
          post_status: 0,
          creat_time: "",
        user: {
          id: 0,
          user_name: "",
          user_account: "",
          avatar_url: "",
          gender: 0,
          phone: 0,
          email: "",
          user_role: 0,
          user_status: 0,
          creat_time: "",
          is_delete: 0,
          token: "",
        }
      }
    ],
    hotuser:[{
        user_id: 0,
        user_fans: 0,
        user_posts: 0,
        user_follow: 0,
        user: {
          id: 0,
          user_name: "",
          user_account: "",
          avatar_url: "",
          gender: 0,
          phone: 0,
          email: "",
          user_role: 0,
          user_status: 0,
          creat_time: "",
          token: ""

    }}],
    total: 10,
    registeruser: {
      userName: "",
      userEmail: "",
      userSex: "",
      userShow: "",
      userPhone: "",
      userPassword: ""
    }
  },
  mutations,
  actions,
  modules: {},
  getters
});
