<template>
  <div>
    <Top/>
    <div class="Wrapper">
      <div class="content">
        <div class="Leftbar"></div>
<!--        v-if="$store.state.isLogin"-->
        <div class="Rightbar" >
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="48" valign="top">
                      <a href="#">
<!--                        <img
                          :src="require(`@/assets/${$store.state.user.userImg}`)"
                          class="avatar"
                          border="0"
                          align="default"
                          style="max-width: 48px; max-height: 48px;"
                        />-->
                        <img :src="(`${info.user.avatar_url}`)" class="el-avatar--circle" onerror="this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
                      </a>
                    </td>
                    <td width="10" valign="top"></td>
                    <td width="auto" align="left">
                      <span class="bigger">
                        <a href="#">{{info.user.user_name}}</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="sep10"></div>
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="33%" align="center">
                      <a href="#" class="dark" style="display: block;">
                        <span class="bigger">{{author.user_fans}}</span>
                        <div class="sep3"></div>
                        <span class="fade">ta的粉丝数</span>
                      </a>
                    </td>
                    <td
                      width="34%"
                      style="border-left: 1px solid rgba(100, 100, 100, 0.4); border-right: 1px solid rgba(100, 100, 100, 0.4);"
                      align="center"
                    >
                      <a href="#" class="dark" style="display: block;">
                        <span class="bigger">{{author.user_posts}}</span>
                        <div class="sep3"></div>
                        <span class="fade">ta的帖子</span>
                      </a>
                    </td>
                    <td width="33%" align="center">
                      <a href="/my/following" class="dark" style="display: block;">
                        <span class="bigger">{{author.user_follow}}</span>
                        <div class="sep3"></div>
                        <span class="fade">ta关注的人数</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="cell" id="member-activity">
              <div class="member-activity-bar">
                <div class="member-activity-start" style="width: 15px;"></div>
              </div>
            </div>
            <div class="cell" style="padding: 5px;">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="28">
                      <a href="/new">
                        <img src width="28" border="0" />
                      </a>
                    </td>
                    <td width="10"></td>
                    <td width="auto" valign="middle" align="left">
                      <!-- <a @click="newcomment">在此贴发表评论</a> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="inner">
              <div class="fr" id="money" style="margin: -3px 0px 0px 0px"></div>
              <a class="fade" @click="Post">去发帖</a>
            </div>
          </div>
        </div>
<!--        <div id="Rightbar" v-else>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">
              <strong>Say what u want 2 say</strong>
              <div class="sep5"></div>
              <span class="fade">这是一个关于分享和探索的地方</span>
            </div>
            <div class="inner">
              <div class="sep5"></div>
              <div align="center">
                <a href="/registerhome" class="super normal button">现在注册</a>
                <div class="sep5"></div>
                <div class="sep10"></div>已注册用户请 &nbsp;
                <a href="/login">登录</a>
              </div>
            </div>
          </div>
          <div class="sep20"></div>
        </div>-->
        <div class="Main">
          <div class="sep20"></div>
          <div class="box" style="border-bottom:0px;">
            <div class="header">
              <div class="fr">
<!--                <img :src="require(`../../assets/${info.user.userImg}`)" class="size" />-->
                <img :src="(`${info.user.avatar_url}`)" class="el-avatar--circle" onerror="this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
              </div>
              <div class="sep10"></div>
              <h3>{{info.post_title}}</h3>
              <h5 class="gray">用户:{{info.user.user_name}}                          </h5>
              <small class="gray">发布时间:{{info.creat_time}}</small>
            </div>
            <div class="cell">{{info.post_content}}</div>
          </div>
          <div class="sep20"></div>
          <div class="box">
            <div class="cell">回复</div>
            <div class="fuck"></div>
            <div class="cell" v-for="(c, index) in comments" :key="index">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                  <tr>
                    <td width="48" valign="top" align="center">
<!--                      <img :src="require(`@/assets/${c.user.userImg}`)" />-->
                      <img :src="(`${c.user.avatar_url}`)" class="el-avatar--circle" onerror="this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
                    </td>
                    <td width="10" valign="top"></td>
                    <td width="auto" valign="top" align="left">
                      <div class="fr">
                        &nbsp; &nbsp;
                        <span class="no"></span>
                      </div>
                      <div class="sep3"></div>
                      <strong>
                        <a href="#" class="dark">{{c.user.user_name}}</a>
                      </strong>&nbsp; &nbsp;
                      <span class="ago">{{c.creat_time}}</span>
                      <div class="sep5"></div>
                      <div class="reply_content">{{c.reply_content}}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="sep20"></div>
          <div class="box" v-show="$store.state.isLogin">
            <div class="cell">
              <div class="fr">
                <a>
                  <strong>↑</strong> 注意用语规范
                </a>
              </div>添加一条新回复
            </div>
            <div class="cell">
              <form>
                <textarea
                  v-model="text"
                  name="content"
                  maxlength="10000"
                  class="mll"
                  id="reply_content"
                  style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 112px;"
                ></textarea>
                <div class="sep10"></div>
                <div class="fr">
                  <div class="sep5"></div>
                  <span class="gray">请尽量让自己的回复能够对别人有帮助</span>
                </div>
                <input type="hidden" value="41475" name="once" />
                <input type="button" value="回复" class="super normal button" @click="newcomment" />
              </form>
            </div>
            <div class="inner">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Bottom">
      <div class="content">
        <div class="inner">
          <div class="sep10"></div>
          <div class="fr"></div>
          <strong>
            <a href="#" class="dark" target="_self">社区分享热爱</a> &nbsp;
<!--            <span class="snow">·</span> &nbsp;
            <a href="/faq" class="dark" target="_self">FAQ</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/p/7v9TEc53" class="dark" target="_self">API</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/mission" class="dark" target="_self">我们的愿景</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/advertise" class="dark" target="_self">广告投放</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/advertise/2017.html" class="dark" target="_self">感谢</a> &nbsp;
            <span class="snow">·</span> &nbsp;
            <a href="/tools" class="dark" target="_self">实用小工具</a>-->
          </strong>
          <div class="sep20"></div>微趣--发现美
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getUserMsg, newcomment} from "@/api";
import { getcomment } from "@/api";
import Top from "@/components/articlehome/Top";
export default {
  inject: ["reload"],
  data() {
    return {
      author:{
        user_id: 0,
        user_fans: 0,
        user_posts: 0,
        user_follow: 0,
        creat_time: "",
        update_time: "",
        is_delete: 0
      },
     // myartnum: 0,
      text: "",
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
      comments: [
        {
          reply_id: 0,
          post_id: 0,
          reply_userid: 0,
          reply_isfather: 0,
          reply_content: "I",
          reply_status: 0,
          creat_time: "",
          update_time: "",
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
  created() {
    this.info = JSON.parse(this.$route.query.detaildata);
    console.log(this.info);
    getUserMsg(this.info.post_userid)
        .then(res =>{
             this.author = res.data;
        });
    getcomment(this.info.post_id)
      .then(res => {
        this.comments = res.data;

        for (let i = 0; i < this.comments.length; i++) {
          this.comments[i].creat_time = this.$moment(
            this.comments[i].creat_time,
            /*"YYYY-MM-DD hh:mm:ss"*/
          ).fromNow();
        }
      })
      .catch({});

/*    findartbyuserid(this.$store.state.user.userId).then(res => {
      console.log(res);
      this.myartnum = res.data.length;
    });*/
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    Post() {
      this.$router.push("/postarticle");
    },
    newcomment() {
      console.log(this.text);
      console.log(this.$store.state.user.token);
      newcomment(
        this.info.post_id,
        this.text,
        this.$store.state.user.id,
        this.$store.state.user.token
      )
        .then(res => {
          if (res.code === 2000) {
            const h = this.$createElement;
            this.$message({
              message: h('p', null, [
                h('span', null, ''),
                h('i', { style: 'color: teal' }, '评论成功')
              ])
            });
            this.reload();
          }
        })
        .catch({});
    }

  }, components: {
    Top}

  //通过query传参，将参数拼接在地址栏中
};
</script>

<style scoped>
textarea {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textarea;
  background-color: -internal-light-dark-color(white, black);
  -webkit-rtl-ordering: logical;
  flex-direction: column;
  resize: auto;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  margin: 0em;
  font: 400 13.3333px Arial;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(169, 169, 169);
  border-image: initial;
  padding: 2px;
  width: 720px;
}
form {
  display: block;
  margin-top: 0em;
}
#Rightbar {
  width: 270px;
  float: right;
  margin-right: 20px;
}
.bigger {
  text-align: center;
  font-size: 20px;
}
.sep20 {
  height: 20px;
}
.Wrapper {
  background-color: #e2e2e2;
  background-repeat: repeat-x, repeat-x;
  text-align: center;
}
.content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
}
.Leftbar {
  width: 0;
  float: left;
}
.Rightbar {
  width: 270px;
  float: right;
  margin-right: 20px;
}
.Main {
  width: auto;
  margin: 0 310px 0 20px;
}
.div {
  display: block;
}
.box {
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e2e2;
}
.header {
  padding: 10px;
  font-size: 15px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
  overflow: auto;
}
.cell {
  padding: 10px;
  font-size: 14px;
  line-height: 120%;
  text-align: left;
  border-bottom: 1px solid #e2e2e2;
}
.table {
  display: table;
  border-collapse: separate;
  border-color: grey;
}

.tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.fuck {
  border-bottom: 1px solid #e2e2e2;
}
.fr {
  float: right;
  text-align: right;
}
.sep10 {
  height: 10px;
}
.h1 {
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  margin: 0 0 10px;
  padding: 0;
}
.gray {
  color: #999;
}
.small {
  font-size: smaller;
}
#Bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.22);
  background-color: var(--box-background-color);
  text-align: center;
  color: #999;
  padding: 0 10px;
}
:root {
  --box-background-color: #fff;
  --box-background-alt-color: #f9f9f9;
  --box-background-hover-color: #fafafa;
  --box-foreground-color: #000;
  --box-border-color: #e2e2e2;
  --box-border-radius: 3px;
}
.inner {
  padding: 10px;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}
strong {
  font-weight: bold;
}
a.dark:active,
a.dark:link,
a.dark:visited {
  color: gray;
  text-decoration: none;
}
a:active,
a:link,
a:visited {
  color: #778087;
  text-decoration: none;
  word-break: break-word;
}
a {
  color: #000;
}
</style>