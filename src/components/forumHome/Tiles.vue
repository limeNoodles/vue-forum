<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <p class="subtitle">热门板块</p>

        <b-carousel>
          <b-carousel-item v-for="(content, index) in contents" :key="index">
            <section>
              <div class="hero-body has-text-centered">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">板块名:{{ content.type_name }}</p>
                    <a href="#" class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-content">
                    <el-table-column prop="model" label="板块简介" width="180">
                        <el-popover trigger="hover" placement="top" :open-delay="800">
                          <div class="text_overflow" slot="reference">
                            <span>{{ content.type_description| typefacelength }}</span>
                          </div>
                          <div class="pup_card">
                            {{ content.type_description }}
                          </div>
                        </el-popover>
                    </el-table-column>

<!--                    <div class="content">
                      板块简介:{{ content.type_description }}
                      <br/>
                    </div>-->
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">关注</a>
                    <a href="#" class="card-footer-item">进入板块</a>
                  </footer>
                </div>
              </div>
            </section>
          </b-carousel-item>
        </b-carousel>
      </article>
    </div>
    <div class="tile is-parent is-8">
      <article class="tile is-child box">
        <p align="right">
          <b-button type="button is-info" outlined @click="Post">去发帖</b-button>
          &emsp;&emsp;&emsp;
          <b-button type="button is-info" outlined @click="allart">全部帖子</b-button>
        </p>

        <p class="subtitle">热门帖子</p>

        <div class="box" v-for="(item, i) in $store.state.info" :key="i">
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
<!--                <el-avatar :size="70" src="https://empty" @error="errorHandler">
                  <img :src="`${item.user.avatar_url}`" class="el-avatar&#45;&#45;circle"/>
                </el-avatar>-->
                <img :src="(`${item.user.avatar_url}`)" class="el-avatar--circle" onerror="this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
<!--                <img :src="(`${item.user.avatar_url}`)" class="size"/>-->
                <!-- <img src="../../assets/user1.jpg" alt /> -->
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ item.user.user_name }}</strong>
                  <br/>
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

                  <a class="level-item">
                    <span class="icon is-small">
                      <i class="fas fa-heart"></i>
                    </span>
                    {{ item.post_like }}
                  </a>
                </div>
                <small class="gray">发布时间: {{item.creat_time}}</small>
              </nav>
            </div>
            <div class="media-right">
              <a class="navbar-item" slot="trigger" role="button">
                <b-button type="is-info" outlined @click="details(i)">查看详情</b-button>
              </a>
            </div>
          </article>
        </div>

        <div class="block" >
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="change"
              :current-page.sync="currentPage1"
              :page-size="5"
              layout="total, prev, pager, next"
              :total="this.total"
          >
          </el-pagination>
        </div>

      </article>
    </div>
  </div>
</template>

<script>
import {getHotArticleType, getPageMain} from "@/api";
// import { getPageMain } from "@/api";
//import Pageination from "../forumHome/Pageination.vue";



export default {
  data() {
    return {
      total:0,
      contents: {
        type_id: 0,
        type_name: "",
        creat_time: "",
        type_description: "",
        post_num: 0
      }
    };
  },
  mounted() {

    getHotArticleType()
        .then(res => {
          const {data} = res;
          this.contents = data.list;
        })
        .catch(() => {
        });
     getPageMain()
       .then(res => {
         const { data } = res;
         this.total = data.total;
       })
       .catch(() => {});
    this.$store.dispatch("getpagemain");
    //bug，应该用action异步处理，再提交commit状态，明日更新（已解决）
    // getPageMain()
    //   .then(res => {
    //     const { data } = res;
    //     this.info = data.content;
    //   })
    //   .catch(() => {});
  },
  methods: { Post() {
      this.$router.push("/postarticle");
    },
    handleCurrentChange(currentPage){
      this.pagination.currentpage=currentPage;//传入参数变成当前页面 在调取查询操作
      this.getpage();
    },
    change(number) {
      this.$store.dispatch("changepage", number);
    },
    allart() {
      this.$router.push("/allarticlehome");
    },
    details(i) {
      const detaildata = this.$store.state.info[i];
      console.log(detaildata);
      this.$router.push({
        path: "/details",
        query: {
          detaildata: JSON.stringify(detaildata)
        }
      });
    }
  },
  filters:{
     typefacelength(value) {
      if (!value) return '';
      if (value.length > 40) {
        return value.slice(0,40) + '...';
      }
      return value;
    }
  },
  components: {
    //Pageination
  }
};
</script>

<style scoped>
.subtitle {
  text-align: left;
}

.button {
  text-align: center;
  margin: 0 auto;
}

.size {
  width: 64px;
  height: 64px;
}
</style>
