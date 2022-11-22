<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-8">
      <article class="tile is-child box">
        <p align="right">
          <button class="button is-info" @click="getAll">全部帖子</button>
        </p>

        <ul
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="limit"
            style="height: 100vh;
    overflow-y: auto;"
        >
          <div class="box" v-for="(content,index) in contents" :key="index">
            <!--            <div v-if="content.user.id!==null">-->
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img :src="(`${content.user.avatar_url}`)" class="el-avatar--circle"
                       onerror="this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
                  <!--                  <img :src="require(`../../assets/${content.user.userImg}`)" class="size" />-->
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>发帖人用户名:{{ content.user.user_name }}</strong>

                    <br/>
                    发帖标题:{{ content.post_title }}
                  </p>
                </div>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small">
                        <i class="fab fa-hotjar"></i>
                      </span>
                      {{ content.post_star }}
                    </a>

                    <a class="level-item">
                      <span class="icon is-small">
                        <i class="fas fa-comment-dots"></i>
                      </span>
                      {{ content.post_reply }}
                    </a>

                    <a class="level-item" @click="postLike(index)">
                      <span class="icon is-small">
                        <i class="fas fa-heart"></i>
                      </span>
                      {{ content.post_like }}
                    </a>
                  </div>
                  <small class="gray">发布时间: {{content.creat_time}}</small>
                </nav>
              </div>
              <div class="media-right">
                <a class="navbar-item" slot="trigger" role="button">
                  <b-button type="is-info" outlined @click="detail(index)">查看详情</b-button>
                </a>
              </div>
            </article>
          </div>
          <!--          </div>-->
          <div v-if="flag===1">没有更多了</div>

          <b-notification :closable="false" v-if="flag===2">
            <div style="text-align:center">正在加载</div>
            <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
          </b-notification>
        </ul>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="subtitle">所有板块</p>

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">板块名</p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <section>
                <b-tooltip
                    v-for="(ArticleType,index) in ArticleTypes"
                    :key="index"
                    :label="ArticleType.type_description"
                    class="is-info"
                >
                  <button
                      class="button is-info is-outlined"
                      @click="getTypeArticle(ArticleType.type_id)"
                  >{{ ArticleType.type_name }}
                  </button>
                </b-tooltip>
              </section>
              <br/>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">点击你感兴趣的板块</a>
          </footer>
        </div>
      </article>
    </div>
  </div>
</template>


<script>
import {getAllArticle, PostLike} from "@/api";
import {getAllArticleType} from "@/api";
import {getArticleByTypeId} from "@/api";
import {SnackbarProgrammatic as Snackbar} from "buefy";

export default {
  data() {
    return {
      isLoading: false,
      isFullPage: false,
      btnFlag: false,
      busy: false,
      limit: 20,
      flag: 0,

      // test: [],
      contents: [
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
      test: [],
      ArticleTypes: [
        {
          type_id: 0,
          type_name: "",
          creat_time: "",
          type_description: "",
          post_num: 0
        }
      ],
      number: 1,
      totalPages: 5
    };
  },
  mounted() {
    getAllArticle(0)
        .then(res => {
          this.contents.shift();
          this.contents = res.data.list;
          this.totalPages = res.data.pages;
          this.number = 1;
          this.flag=0;
        })
        .catch(() => {
        });
    getAllArticleType()
        .then(res => {
          this.ArticleTypes = res.data;
        })
        .catch(() => {
        });
  },

  methods: {
    postLike(i){
      const detaildata = this.contents[i];
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
    loadMore() {
      this.busy = true;
      if (this.number - 1 === this.totalPages) {
        this.flag = 1;
        this.busy =false;
      } else {
        this.flag = 2;
        this.isLoading = true;

        setTimeout(() => {
          getAllArticle(++this.number)
              .then(res => {
                const append = res.data.list;
                this.totalPages = res.data.pages;
                if(this.number-1!== this.totalPages){
                  this.contents = this.contents.concat(append);}
                this.busy = false;
              })
              .catch(() => {
                this.busy = false;
              });
        }, 1000);
      }
    },
    getTypeArticle(typeId) {
      getArticleByTypeId(typeId)
          .then(res => {
            this.contents = res.data;
            this.totalPages = 1;
            this.number = this.totalPages+1;
            this.flag=1;
            //console.log(this.number);
          })
          .catch(() => {
          });
    },
    getAll() {
      getAllArticle(0)
          .then(res => {
            this.contents = res.data.list;
            this.totalPages = res.data.pages;
            this.number = 1;
            this.flag = 2;
          })
          .catch(() => {
          });
    },
    detail(index) {
      const detaildata = this.contents[index];
      this.$router.push({
        path: "/details",
        query: {
          detaildata: JSON.stringify(detaildata)
        }
      });
    }
  },
  created() {
    // this.loadMore();
  }
};
</script>

<style scoped>
.size {
  width: 64px;
  height: 64px;
}

.fuck {
  text-align: center;
}

.tile.is-ancestor {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
}
</style>