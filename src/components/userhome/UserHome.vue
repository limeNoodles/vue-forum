<template>
  <div>
<!--    <div id="Top">
      <div class="content">
        <div style="padding-top: 6px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
              <tr>
                <td width="570" align="left" style="padding-top: 2px;">
                  <a href="/" class="top">首页</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>-->
    <Top/>
    <div id="Wrapper">
      <div class="content">
        <div id="Leftbar"></div>
        <div id="Rightbar">
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">&nbsp;{{this.$store.state.user.user_name}} 个人信息</div>

            <nav class="level is-mobile">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">发帖数</p>
                  <p>{{mypostnum}}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">粉丝</p>
                  <p>{{userPosts.user_fans}}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">关注的人数</p>
                  <p>{{userPosts.user_follow}}</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">获赞数</p>
                  <p>{{userPosts.user_posts}}</p>
                </div>
              </div>
            </nav>
          </div>
          <div class="sep20"></div>
        </div>
        <div id="Main">
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="73" valign="top" align="center">
<!--                      <img
                        :src="require(`@/assets/${$store.state.user.userImg}`)"
                        class="avatar"
                        border="0"
                        align="default"
                      />-->
                      <img :src="(`${$store.state.user.avatar_url}`)" class="el-avatar--circle" onerror="this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
                      <!-- <img
                        src="//cdn.v2ex.com/gravatar/873548b247e76e0e16ac5f8280c0004c?s=73&amp;d=retro"
                        class="avatar"
                        border="0"
                        align="default"
                      />-->
                      <div class="sep10"></div>
                      <strong class="online">ONLINE</strong>
                    </td>
                    <td width="10"></td>
                    <td width="auto" valign="top" align="left">
                      <div class="fr"></div>
                      <h1 style="margin-bottom: 5px;">{{this.$store.state.user.user_name}}</h1>
<!--                      <span class="gray">
                        <div class="sep5"></div>
                        {{$store.state.user.userShow}}
                      </span>-->
                      <div class="sep10"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="sep5"></div>
            </div>
          </div>
          <div class="sep20"></div>

          <div class="sep20"></div>
          <div class="box">
            <div class="inner">
              <span class="gray">你的帖子</span>
            </div>
            <div class="inner">
              <span class="chevron">»</span>
              <div class="box" v-for="(item, i) in mypost" :key="i">
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>{{item.post_title}}</strong>
                        <br />
                        {{item.post_content}}
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fab fa-hotjar"></i>
                          </span>
                          {{item.post_star}}
                        </a>

                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-comment-dots"></i>
                          </span>
                          {{item.post_reply}}
                        </a>

                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fas fa-heart"></i>
                          </span>
                          {{item.post_like}}
                        </a>
                      </div>
                      <small class="gray">发布时间: {{item.creat_time}}</small>
                      <div class="media-right">
                        <a class="navbar-item" slot="trigger" role="button">
                          <b-button type="is-info" outlined @click="details(i)">查看详情</b-button>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="c"></div>
      <div class="sep20"></div>
    </div>
  </div>
</template>


<script>
import {findartbyuserid, get_userposts_by_userId} from "@/api";
import Top from "@/components/articlehome/Top";


export default {
  data() {
    return {
      mypostnum: 0,
      mypost: [
        {
          creat_time: "",
          is_delete: 0,
          post_content: 0,
          post_id: 0,
          post_like: 0,
          post_reply: 0,
          post_star: 0,
          post_status: 0,
          post_title: "",
          post_type: 0,
          post_userid: 0,
          update_time:""
        }
      ],
      userPosts:{
        creat_time:"" ,
        update_time:"",
        user_fans:0,
        user_follow: 0 ,
        user_id: 0 ,
        user_posts: 0,
      }
    };
  },
  created() {
    findartbyuserid(this.$store.state.user.id).then(res => {
      this.mypost = res.data;
      this.mypostnum = res.data.length;
    });
    get_userposts_by_userId(this.$store.state.user.id).then(res => {
      this.userPosts = res.data;
    });
  },
  methods:{
    details(i) {
      const detaildata =         {
        post_id: this.mypost[i].post_id,
        post_type: this.mypost[i].post_type,
        post_title: this.mypost[i].post_title,
        post_content: this.mypost[i].post_content,
        post_userid: this.mypost[i].post_userid,
        post_star: this.mypost[i].post_star,
        post_like: this.mypost[i].post_like,
        post_reply: this.mypost[i].post_reply,
        post_status: this.mypost[i].post_status,
        creat_time: this.mypost[i].creat_time,
        user: {
          id: this.$store.state.user.id,
          user_name: this.$store.state.user.user_name,
          user_account: this.$store.state.user.user_account,
          avatar_url: this.$store.state.user.avatar_url,
          gender: this.$store.state.user.gender,
          phone: this.$store.state.user.phone,
          email: this.$store.state.user.email,
          user_role: this.$store.state.user.user_role,
          user_status: this.$store.state.user.user_status,
          creat_time: this.$store.state.user.creat_time,
          is_delete: this.$store.state.user.is_delete,
          token: this.$store.state.user.token,
        }
      };
      //console.log(detaildata);
      this.$router.push({
        path: "/details",
        query: {
          detaildata: JSON.stringify(detaildata)
        }
      });
    }
  },
  components:{
    Top
  }
};
</script>


<style scoped>
.gray {
  color: #999;
}
.inner {
  padding: 10px;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}
#Wrapper {
  text-align: center;
  background-color: #e2e2e2;
  background-image: url(/static/img/shadow_light.png);
  background-repeat: repeat-x;
}
#Rightbar {
  width: 270px;
  float: right;
  margin-right: 20px;
}
.box {
  background-color: var(--box-background-color);
  border-radius: var(--box-border-radius);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e2e2;
}
table[Attributes] {
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  width: 100%;
}
user agent stylesheet table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
.cell_tabs {
  padding: 10px 10px 0;
  border-bottom: 1px solid var(--box-border-color);
  text-align: center;
}
.cell_tab:link,
.cell_tab:visited {
  font-size: 14px;
  border-bottom: 3px solid transparent;
  display: inline-block;
  text-decoration: none;
  margin-right: 15px;
  padding: 0 5px 5px;
  color: #99a;
}

a:active,
a:link,
a:visited {
  color: #778087;
  text-decoration: none;
  word-break: break-word;
}
user agent stylesheet a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
.cell_tabs {
  padding: 10px 10px 0;
  border-bottom: 1px solid var(--box-border-color);
  text-align: center;
}
user agent stylesheet a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
.fl {
  float: left;
}
img[Attributes] {
  width: 18px;
  vertical-align: middle;
}
.cell {
  padding: 10px;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
}
.box {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e2e2;
}
#Main {
  width: auto;
  margin: 0 310px 0 20px;
}
#Leftbar {
  width: 0;
  float: left;
}
.c {
  clear: both;
}
.sep20 {
  height: 20px;
}
.content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
}
#Top {
  text-align: center;
  background-color: #fff;
  height: 44px;
  font-size: 15px;
  font-weight: 500;
  background-size: 44px 44px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
  padding: 0 20px;
}
user agent stylesheet div {
  display: block;
}
body {
  padding: 0px;
  margin: 0px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", "Segoe UI",
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
}
:root {
  --box-background-color: #fff;
  --box-background-alt-color: #f9f9f9;
  --box-background-hover-color: #fafafa;
  --box-foreground-color: #000;
  --box-border-color: #e2e2e2;
  --box-border-radius: 3px;
}
user agent stylesheet html {
  color: -internal-root-color;
}
#Top > .content {
  max-width: 1060px;
}
.content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
}
table[Attributes] {
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  width: 100%;
}
table {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td[Attributes] {
  width: 110px;
  text-align: -webkit-left;
}
user agent stylesheet td {
  display: table-cell;
  vertical-align: inherit;
}
a:active,
a:link,
a:visited {
  color: #778087;
  text-decoration: none;
  word-break: break-word;
}
user agent stylesheet a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
#Logo {
  width: 94px;
  height: 30px;
  background-image: url(/static/img/v2ex@2x.png);
  background-size: 94px 30px;
  background-repeat: no-repeat;
  display: inline-block;
}
</style>