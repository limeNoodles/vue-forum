<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <div class="content">
          <p class="title">用户人气榜</p>

          <div class="card" v-for="(userItem,k) in users" :key="k">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
<!--                    <img :src="require(`@/assets/${user.user.avatar_url}`)" class="size" />-->
                    <img :src="(`${userItem.user.avatar_url}`)" class="el-avatar--circle" onerror="this.src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
                    <!-- <img src="../../assets/user1.jpg" alt /> -->
                  </figure>
                </div>
                <div class="media-content">
<!--                  <p class="title is-4" v-if="user.user.gender==='女'">
                    大名：{{user.user.user_name}}
                    <i class="fas fa-female"></i>
                  </p>-->
<!--
                  <p class="title is-4" v-else>
                    大名：{{user.user.user_name}}
                    <i class="fas fa-male"></i>
                  </p>-->
                  <p class="title is-4" >
                    昵称：{{userItem.user.user_name}}
                    <i class="fas fa-male"></i>
                  </p>
                </div>
              </div>

              <div class="content">
<!--                <p>格言：{{user.userShow}}</p>-->
                <i class="far fa-hand-point-right">个人主页</i>
                <br />粉丝数：
                <i class="fab fa-gratipay">{{userItem.user_fans}}</i>
                <br />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
//import { gethotuser } from "@/api";

import {gethotuser} from "@/api";

export default {
  data() {
    return {
      users: [
        {
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
          }
        }
      ]
    };
  },
  methods: {
  },
  mounted() {
    gethotuser().then(res => {
      this.users = res.data.list;
      //this.users = res.data.list;
      console.log(this.users);
    });
  },
  components: {}
};
</script>


<style scoped>
.hero.is-medium .hero-body {
  padding-top: 0rem;
  padding-bottom: 3rem;
}
.fuck {
  height: 300px;

  overflow-y: auto;
}
</style>