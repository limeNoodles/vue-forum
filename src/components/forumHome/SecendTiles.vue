<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-0-fullhd"><!--is-8-->
      <progress class="progress is-whrite is-small" value="100%" max="30">30%</progress>
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child box" >
              <p class="title">最新发布的帖子</p>
              <div class="box" v-for="(item, i) in info" :key="i">
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-64x64">
                      <img :src="(`${item.user.avatar_url}`)" class="el-avatar--circle" onerror="this.src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>{{ item.user.user_name }}</strong>
                        <br />
                        {{ item.post_title }}
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fab fa-hotjar"></i>
                          </span>
                          {{ item.post_star }}
                        </a>

                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-comment-dots"></i>
                          </span>
                          {{ item.post_reply }}
                        </a>

                        <a class="level-item" @click="postLike(i)">
                          <span class="icon is-small">
                            <i class="fas fa-heart"></i>
                          </span>
                          {{ item.post_like }}
                        </a>
                        <small class="gray">发布时间: {{item.creat_time}}</small>
                      </div>
                    </nav>
                  </div>
                  <div class="media-right">
                    <a class="navbar-item" slot="trigger" role="button">
                      <b-button type="is-info" @click="detail(i)">查看详情</b-button>
                    </a>
                  </div>
                </article>
              </div>
          </article>
        </div>

<!--        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">放学校风景图</p>
            <b-carousel>
              <b-carousel-item v-for="(carousel, i) in 6" :key="i">
                <section :class="`hero is-medium `">
                  <div class="hero-body has-text-centered">
                    <span class="image">
                      <img :src="getImgUrl(i)" />
                    </span>
                  </div>
                </section>
              </b-carousel-item>
            </b-carousel>
          </article>
        </div>-->
      </div>
<!--      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">友情链接</p>
          <hr />
          <div class="content">
            <a href="https://stackoverflow.com/">StackOverflow</a>&nbsp;
            <a href="https://github.com/">GitHub</a>&nbsp;
            <a href="https://www.youtube.com/">YouTube</a>&nbsp;
            <a href="https://tuna.moe/">清华大学TUNA协会</a>
          </div>
        </article>
      </div>-->
    </div>
<!--    <div class="tile is-parent">
      <article class="tile is-child box">
        <div class="content">
          <p class="title">用户人气榜</p>

          <div class="card" v-for="(userItem,k) in users" :key="k">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
&lt;!&ndash;                    <img :src="require(`@/assets/${user.user.avatar_url}`)" class="size" />&ndash;&gt;
                    <img :src="(`${userItem.user.avatar_url}`)" class="el-avatar&#45;&#45;circle" onerror="this.src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
                    &lt;!&ndash; <img src="../../assets/user1.jpg" alt /> &ndash;&gt;
                  </figure>
                </div>
                <div class="media-content">
&lt;!&ndash;                  <p class="title is-4" v-if="user.user.gender==='女'">
                    大名：{{user.user.user_name}}
                    <i class="fas fa-female"></i>
                  </p>&ndash;&gt;
&lt;!&ndash;
                  <p class="title is-4" v-else>
                    大名：{{user.user.user_name}}
                    <i class="fas fa-male"></i>
                  </p>&ndash;&gt;
                  <p class="title is-4" >
                    昵称：{{userItem.user.user_name}}
                    <i class="fas fa-male"></i>
                  </p>
                </div>
              </div>

              <div class="content">
&lt;!&ndash;                <p>格言：{{user.userShow}}</p>&ndash;&gt;
                <i class="far fa-hand-point-right">个人主页</i>
                <br />粉丝数：
                <i class="fab fa-gratipay">{{userItem.user_fans}}</i>
                <br />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>-->
  </div>
</template>

<script>
import {getnew, PostLike} from "@/api";
import {SnackbarProgrammatic as Snackbar} from "buefy";
/*import { gethotuser } from "@/api";*/

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
      ],
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
      ]
    };
  },
  methods: {
    postLike(i){
      const detaildata = this.info[i];
      const postid=detaildata.post_id;
      PostLike(postid,this.$store.state.user.token).then(res=>{
        if(res.code===2000){
          Snackbar.open({message:"点赞成功!",position: 'is-top'});
          detaildata.post_like+=1;
        }else {
          Snackbar.open({message:res.description,position: 'is-top'});
        }
      });
    },
    detail(i) {
      const detaildata = this.info[i];
      this.$router.push({
        path: "/details",
        query: {
          detaildata: JSON.stringify(detaildata)
        }
      });
    }
  },
  mounted() {
    getnew().then(res => {
      console.log(res.data.list);
      this.info = res.data.list;
    });
    //this.$store.dispatch("getHotuser");
  },
/*  created() {
    gethotuser().then(res => {
      this.users = this.users.append(res.data.list);
      //this.users = res.data.list;
      console.log(this.users);
    });
  },*/
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