<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="demo-image">
        <div class="block">
          <el-image
              style="width: 50px; height: 50px"
              :src="require('../../../public/titlelogo.png')"
              :fit="contain"></el-image>
        </div>
      </div>

      <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click="getMainPosts">首页</a>

<!--        <a class="navbar-item">热榜</a>-->

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">更多</a>

          <div class="navbar-dropdown">
            <a class="navbar-item" @click="userhome">个人主页</a>
<!--            <a class="navbar-item">全部板块</a>-->
            <a class="navbar-item" @click="allart">全部帖子</a>
            <a class="navbar-item" v-show="$store.state.user.user_role === 1" @click="manager">后台管理</a>
            <hr class="navbar-divider"/>
<!--            <a class="navbar-item">Report an issue</a>-->
          </div>
        </div>
        <div class="level-left">
          <div class="level-item">
            <p class="subtitle is-5"></p>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input class="input" type="text" placeholder="Find a post" v-model="Search"/>
              </p>
              <p class="control">
                <button class="button" @click="searchPosts">搜索</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-end" v-if="!$store.state.isLogin">
        <div class="navbar-item">
          <div class="buttons">
            <b-button type="is-info" outlined @click="register">注册</b-button>
            <div class="navbar-menu">
              <div class="navbar-end">
                <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
                  <a class="navbar-item" slot="trigger" role="button">
                    <b-button type="is-info" outlined>登录</b-button>
                  </a>

                  <b-dropdown-item aria-role="menu-item" :focusable="false" custom paddingless>
                    <div class="modal-card" style="width:300px;">
                      <section class="modal-card-body">
                        <b-field label="用户账户">
                          <b-input type="text" v-model="userAccount" placeholder="请输入您的账户" required></b-input>
                        </b-field>

                        <b-field label="密码">
                          <b-input
                              type="password"
                              password-reveal
                              placeholder="Your password"
                              required
                              v-model="userPassword"
                          ></b-input>
                        </b-field>

                        <b-checkbox>记住我</b-checkbox>
                      </section>
                      <footer class="modal-card-foot">
                        <button class="button is-primary" @click="login">登录</button>
                      </footer>
                    </div>
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-brand" v-else-if="$store.state.isLogin">
        <div  class="navbar-item">

          <el-row gutter="50">
            <el-col :span="6">
              <!--              <el-avatar :size="30" src="https://empty" @error="errorHandler">
                              <img :src="(`${$store.state.user.avatar_url}`)" class="el-avatar&#45;&#45;circle"/>
                            </el-avatar>-->
              <img :src="(`${$store.state.user.avatar_url}`)" sizes="40" class="el-avatar--circle" onerror="this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
            </el-col>
            <el-col :span="8"><h2>{{ $store.state.user.user_name }}</h2></el-col>
            <el-col :span="4">
              <el-button size="small" round type="primary" @click="logout"><i class="fas fa-sign-out-alt">登出</i></el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import {loginout, userLogin} from "@/api";

export default {
  data() {
    return {
      userAccount: "",
      userPassword: "",
      Search: ""
    };
  },
  methods: {
    getMainPosts(){
      this.$router.push("/");
    },
    errorHandler() {
      return true
    },
    searchPosts(){
      this.$router.push({
        path: "/allsearchhome",
        query: {
          search: JSON.stringify(this.Search)
        }
      });
    },
    allart() {
      this.$router.push("/allarticlehome");
    },
    manager(){
      this.$router.push("/backstagehome");
    }
    ,
    logout() {
      loginout(this.$store.state.user.token);
      this.$store.commit("logout");
    },
    userhome() {
      this.$router.push("/userhome");
    },
    login() {
      userLogin(this.userAccount, this.userPassword)
          .then(res => {
            const {data} = res;
            this.user = data;
            if (data != null) {
              this.$store.dispatch("aLogin", {
                user: data,
                message: "用户登录",
                success: () => {
                  if(this.$store.state.user.user_role===1){
                    this.$router.push("backstagehome");
                  }
                }
              });
            } else {
              alert("该用户不存在");
            }
          })
          .catch(() => {
          });
    },
    register() {
      this.$router.push("/registerhome");
    }
  }
};
</script>
