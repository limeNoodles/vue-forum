(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08bc987b"],{"2c8f":function(t,s,e){},"4f83":function(t,s,e){},"93ef":function(t,s,e){"use strict";var a=e("4f83"),i=e.n(a);i.a},a16d:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar is-light",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"demo-image"},[a("div",{staticClass:"block"},[a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e("a5d2"),fit:t.contain}})],1)]),t._m(0)]),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[a("div",{staticClass:"navbar-start"},[a("a",{staticClass:"navbar-item",on:{click:t.getMainPosts}},[t._v("首页")]),a("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[a("a",{staticClass:"navbar-link"},[t._v("更多")]),a("div",{staticClass:"navbar-dropdown"},[a("a",{staticClass:"navbar-item",on:{click:t.userhome}},[t._v("个人主页")]),a("a",{staticClass:"navbar-item",on:{click:t.allart}},[t._v("全部帖子")]),a("a",{directives:[{name:"show",rawName:"v-show",value:1===t.$store.state.user.user_role,expression:"$store.state.user.user_role === 1"}],staticClass:"navbar-item",on:{click:t.manager}},[t._v("后台管理")]),a("hr",{staticClass:"navbar-divider"})])]),a("div",{staticClass:"level-left"},[t._m(1),a("div",{staticClass:"level-item"},[a("div",{staticClass:"field has-addons"},[a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Search,expression:"Search"}],staticClass:"input",attrs:{type:"text",placeholder:"Find a post"},domProps:{value:t.Search},on:{input:function(s){s.target.composing||(t.Search=s.target.value)}}})]),a("p",{staticClass:"control"},[a("button",{staticClass:"button",on:{click:t.searchPosts}},[t._v("搜索")])])])])])]),t.$store.state.isLogin?t.$store.state.isLogin?a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"navbar-item"},[a("el-row",{attrs:{gutter:"50"}},[a("el-col",{attrs:{span:6}},[a("img",{staticClass:"el-avatar--circle",attrs:{src:""+t.$store.state.user.avatar_url,sizes:"40",onerror:"this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"}})]),a("el-col",{attrs:{span:8}},[a("h2",[t._v(t._s(t.$store.state.user.user_name))])]),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"small",round:"",type:"primary"},on:{click:t.logout}},[a("i",{staticClass:"fas fa-sign-out-alt"},[t._v("登出")])])],1)],1)],1)]):t._e():a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("b-button",{attrs:{type:"is-info",outlined:""},on:{click:t.register}},[t._v("注册")]),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-end"},[a("b-dropdown",{attrs:{position:"is-bottom-left","aria-role":"menu","trap-focus":""}},[a("a",{staticClass:"navbar-item",attrs:{slot:"trigger",role:"button"},slot:"trigger"},[a("b-button",{attrs:{type:"is-info",outlined:""}},[t._v("登录")])],1),a("b-dropdown-item",{attrs:{"aria-role":"menu-item",focusable:!1,custom:"",paddingless:""}},[a("div",{staticClass:"modal-card",staticStyle:{width:"300px"}},[a("section",{staticClass:"modal-card-body"},[a("b-field",{attrs:{label:"用户账户"}},[a("b-input",{attrs:{type:"text",placeholder:"请输入您的账户",required:""},model:{value:t.userAccount,callback:function(s){t.userAccount=s},expression:"userAccount"}})],1),a("b-field",{attrs:{label:"密码"}},[a("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:t.userPassword,callback:function(s){t.userPassword=s},expression:"userPassword"}})],1),a("b-checkbox",[t._v("记住我")])],1),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-primary",on:{click:t.login}},[t._v("登录")])])])])],1)],1)])],1)])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"level-item"},[e("p",{staticClass:"subtitle is-5"})])}],r=e("365c"),l={data(){return{userAccount:"",userPassword:"",Search:""}},methods:{getMainPosts(){this.$router.push("/")},errorHandler(){return!0},searchPosts(){this.$router.push({path:"/allsearchhome",query:{search:JSON.stringify(this.Search)}})},allart(){this.$router.push("/allarticlehome")},manager(){this.$router.push("/backstagehome")},logout(){Object(r["t"])(this.$store.state.user.token),this.$store.commit("logout")},userhome(){this.$router.push("/userhome")},login(){Object(r["y"])(this.userAccount,this.userPassword).then(t=>{const{data:s}=t;this.user=s,null!=s?this.$store.dispatch("aLogin",{user:s,message:"用户登录",success:()=>{1===this.$store.state.user.user_role&&this.$router.push("backstagehome")}}):alert("该用户不存在")}).catch(()=>{})},register(){this.$router.push("/registerhome")}}},n=l,o=e("2877"),c=Object(o["a"])(n,a,i,!1,null,null,null);s["a"]=c.exports},a5d2:function(t,s,e){t.exports=e.p+"img/titlelogo.73ff1d0b.png"},ba02:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"forumhome"}},[e("el-container",[e("el-header",[e("Top")],1),e("el-main",[e("Tiles")],1)],1),e("el-container",[e("el-main",[e("SecendTiles")],1)],1),e("el-container",[e("el-main",[e("Footer")],1)],1)],1)},i=[],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tile is-ancestor"},[e("div",{staticClass:"tile is-parent"},[e("article",{staticClass:"tile is-child box"},[e("p",{staticClass:"subtitle"},[t._v("热门板块")]),e("b-carousel",t._l(t.contents,(function(s,a){return e("b-carousel-item",{key:a},[e("section",[e("div",{staticClass:"hero-body has-text-centered"},[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("板块名:"+t._s(s.type_name))]),e("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])]),e("div",{staticClass:"card-content"},[e("el-table-column",{attrs:{prop:"model",label:"板块简介",width:"180"}},[e("el-popover",{attrs:{trigger:"hover",placement:"top","open-delay":800}},[e("div",{staticClass:"text_overflow",attrs:{slot:"reference"},slot:"reference"},[e("span",[t._v(t._s(t._f("typefacelength")(s.type_description)))])]),e("div",{staticClass:"pup_card"},[t._v(" "+t._s(s.type_description)+" ")])])],1)],1),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[t._v("关注")]),e("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[t._v("进入板块")])])])])])])})),1)],1)]),e("div",{staticClass:"tile is-parent is-8"},[e("article",{staticClass:"tile is-child box"},[e("p",{attrs:{align:"right"}},[e("b-button",{attrs:{type:"button is-info",outlined:""},on:{click:t.Post}},[t._v("去发帖")]),t._v(" "),e("b-button",{attrs:{type:"button is-info",outlined:""},on:{click:t.allart}},[t._v("全部帖子")])],1),e("p",{staticClass:"subtitle"},[t._v("热门帖子")]),t._l(t.$store.state.info,(function(s,a){return e("div",{key:a,staticClass:"box"},[e("article",{staticClass:"media"},[e("figure",{staticClass:"media-left"},[e("p",{staticClass:"image is-64x64"},[e("img",{staticClass:"el-avatar--circle",attrs:{src:""+s.user.avatar_url,onerror:"this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"}})])]),e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[e("strong",[t._v(t._s(s.user.user_name))]),e("br"),t._v(" "+t._s(s.post_title)+" ")])]),e("nav",{staticClass:"level is-mobile"},[e("div",{staticClass:"level-left"},[e("a",{staticClass:"level-item"},[t._m(0,!0),t._v(" "+t._s(s.post_star)+" ")]),e("a",{staticClass:"level-item"},[t._m(1,!0),t._v(" "+t._s(s.post_reply)+" ")]),e("a",{staticClass:"level-item",on:{click:function(s){return t.postLike(a)}}},[t._m(2,!0),t._v(" "+t._s(s.post_like)+" ")])]),e("small",{staticClass:"gray"},[t._v("发布时间: "+t._s(s.creat_time))])])]),e("div",{staticClass:"media-right"},[e("a",{staticClass:"navbar-item",attrs:{slot:"trigger",role:"button"},slot:"trigger"},[e("b-button",{attrs:{type:"is-info",outlined:""},on:{click:function(s){return t.details(a)}}},[t._v("查看详情")])],1)])])])})),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"current-page":t.currentPage1,"page-size":5,layout:"total, prev, pager, next",total:this.total},on:{"size-change":t.handleSizeChange,"current-change":t.change,"update:currentPage":function(s){t.currentPage1=s},"update:current-page":function(s){t.currentPage1=s}}})],1)],2)])])},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fab fa-hotjar"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-comment-dots"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-heart"})])}],n=e("365c"),o=e("2c4e"),c={data(){return{total:0,contents:{type_id:0,type_name:"",creat_time:"",type_description:"",post_num:0}}},mounted(){Object(n["k"])().then(t=>{const{data:s}=t;this.contents=s.list}).catch(()=>{}),Object(n["l"])().then(t=>{const{data:s}=t;this.total=s.total}).catch(()=>{}),this.$store.dispatch("getpagemain")},methods:{postLike(t){const s=this.$store.state.info[t],e=s.post_id;Object(n["a"])(e,this.$store.state.user.token).then(t=>{2e3===t.code?(o["a"].open({message:"点赞成功!",position:"is-top"}),s.post_like+=1):o["a"].open({message:t.description,position:"is-top"})})},Post(){this.$router.push("/postarticle")},handleCurrentChange(t){this.pagination.currentpage=t,this.getpage()},change(t){this.$store.dispatch("changepage",t)},allart(){this.$router.push("/allarticlehome")},details(t){const s=this.$store.state.info[t];this.$router.push({path:"/details",query:{detaildata:JSON.stringify(s)}})}},filters:{typefacelength(t){return t?t.length>40?t.slice(0,40)+"...":t:""}},components:{}},u=c,d=(e("f517"),e("2877")),p=Object(d["a"])(u,r,l,!1,null,"46a98c6f",null),v=p.exports,h=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("strong",[t._v("此项目")]),t._v(" by "),e("a",{attrs:{href:"https://github.com/limeNoodles"}},[t._v("Lime")]),e("a",{attrs:{href:"https://github.com/limeNoodles/vue-forum.git"}},[t._v(" github repository")]),t._v(". ")])])])}],_={data(){return{}},created(){}},f=_,b=Object(d["a"])(f,h,m,!1,null,null,null),g=b.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tile is-ancestor"},[e("div",{staticClass:"tile is-vertical is-0-fullhd"},[e("progress",{staticClass:"progress is-whrite is-small",attrs:{value:"100%",max:"30"}},[t._v("30%")]),e("div",{staticClass:"tile"},[e("div",{staticClass:"tile is-parent is-vertical"},[e("article",{staticClass:"tile is-child box"},[e("p",{staticClass:"title"},[t._v("最新发布的帖子")]),t._l(t.info,(function(s,a){return e("div",{key:a,staticClass:"box"},[e("article",{staticClass:"media"},[e("figure",{staticClass:"media-left"},[e("p",{staticClass:"image is-64x64"},[e("img",{staticClass:"el-avatar--circle",attrs:{src:""+s.user.avatar_url,onerror:"this.src='https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"}})])]),e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[e("strong",[t._v(t._s(s.user.user_name))]),e("br"),t._v(" "+t._s(s.post_title)+" ")])]),e("nav",{staticClass:"level is-mobile"},[e("div",{staticClass:"level-left"},[e("a",{staticClass:"level-item"},[t._m(0,!0),t._v(" "+t._s(s.post_star)+" ")]),e("a",{staticClass:"level-item"},[t._m(1,!0),t._v(" "+t._s(s.post_reply)+" ")]),e("a",{staticClass:"level-item",on:{click:function(s){return t.postLike(a)}}},[t._m(2,!0),t._v(" "+t._s(s.post_like)+" ")]),e("small",{staticClass:"gray"},[t._v("发布时间: "+t._s(s.creat_time))])])])]),e("div",{staticClass:"media-right"},[e("a",{staticClass:"navbar-item",attrs:{slot:"trigger",role:"button"},slot:"trigger"},[e("b-button",{attrs:{type:"is-info"},on:{click:function(s){return t.detail(a)}}},[t._v("查看详情")])],1)])])])}))],2)])])])])},y=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fab fa-hotjar"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-comment-dots"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-heart"})])}],k={data(){return{users:[{user_id:0,user_fans:0,user_posts:0,user_follow:0,user:{id:0,user_name:"",user_account:"",avatar_url:"",gender:0,phone:0,email:"",user_role:0,user_status:0,creat_time:"",token:""}}],info:[{post_id:0,post_type:"",post_title:"",post_content:"",post_userid:0,post_star:0,post_like:0,post_reply:0,post_status:0,creat_time:"",user:{id:0,user_name:"",user_account:"",avatar_url:"",gender:0,phone:0,email:"",user_role:0,user_status:0,creat_time:"",is_delete:0,token:""}}]}},methods:{postLike(t){const s=this.info[t],e=s.post_id;Object(n["a"])(e,this.$store.state.user.token).then(t=>{2e3===t.code?(o["a"].open({message:"点赞成功!",position:"is-top"}),s.post_like+=1):o["a"].open({message:t.description,position:"is-top"})})},detail(t){const s=this.info[t];this.$router.push({path:"/details",query:{detaildata:JSON.stringify(s)}})}},mounted(){Object(n["r"])().then(t=>{console.log(t.data.list),this.info=t.data.list})},components:{}},$=k,x=(e("93ef"),Object(d["a"])($,C,y,!1,null,"0dee7218",null)),w=x.exports,E=e("a16d"),P={components:{Top:E["a"],Tiles:v,Footer:g,SecendTiles:w}},O=P,j=Object(d["a"])(O,a,i,!1,null,null,null);s["default"]=j.exports},f517:function(t,s,e){"use strict";var a=e("2c8f"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-08bc987b.2d2ba188.js.map