<template>
  <div>
    <div id="Top">
      <div class="content">
        <div style="padding-top: 6px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
            <tr>
              <td width="570" align="right" style="padding-top: 2px;">
                <a href="/" class="top">首页</a>&nbsp;&nbsp;&nbsp;
                <a href="/registerhome" class="top">注册</a>
                &nbsp;&nbsp;&nbsp;
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="Wrapper">
      <div class="content">
        <div id="Leftbar"></div>

        <div id="Main">
          <div class="sep20"></div>
          <div class="box">
            <div class="header">
              <a href="/">微趣论坛</a>
              <span class="chevron">&nbsp;›&nbsp;</span> 登录 &nbsp;
              <li class="fa fa-lock"></li>
            </div>
            <div class="cell">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户账户" prop="name">
                  <el-input v-model="ruleForm.userAccount"></el-input>
                </el-form-item>
                  <el-form-item label="用户密码" prop="name">
                    <el-input v-model="ruleForm.userPassword"></el-input>
                  </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="login">登录</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
<!--              <form method="post" action="/signin">
                <table cellpadding="5" cellspacing="0" border="0" width="100%">
                  <tbody>
                  <tr>
                    <td width="120" align="right">用户账户</td>
                    <td width="auto" align="left">
                      <input
                          type="text"
                          class="sl"
                          name="47898fbf4d5420a894dbd060f6763916611cd25baefcabca3234cea3fd5a5703"
                          value
                          autofocus="autofocus"
                          autocorrect="off"
                          spellcheck="false"
                          autocapitalize="off"
                          placeholder="请输入您的账号"
                          v-model="userAccount"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td width="120" align="right">密码</td>
                    <td width="auto" align="left">
                      <input
                          type="password"
                          class="sl"
                          name="cb10b4e849cb70f260623e3843c990f983a01cbb5f5899afd878f367e58ed4cb"
                          value
                          autocorrect="off"
                          spellcheck="false"
                          autocapitalize="off"
                          v-model="userPassword"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td width="120" align="right"></td>
                    <td width="auto" align="left">
                      <input type="hidden" value="62970" name="once"/>
                      <input type="button" class="super normal button" value="登录" @click="login"/>
                    </td>
                  </tr>
                  <tr>
                    <td width="120" align="right"></td>
                    <td width="auto" align="left">
                      <a href="/forgot">我忘记密码了</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <input type="hidden" value="/" name="next"/>
              </form>-->
            </div>
          </div>
        </div>
      </div>
      <div class="c"></div>
      <div class="sep20"></div>
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
import {userLogin} from "@/api";

export default {
  data() {
    return {
/*      userAccount: "",
      userPassword: "",*/
     ruleForm: {
       userAccount: "",
       userPassword: "",
     },
    rules: {
      userAccount: [
        { required: true, message: '请输入您的账户', trigger: 'blur' },
        { min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur' }
      ],
      userPassword: [
        { required: true, message: '请输入您的密码', trigger: 'blur' },
        { min: 8, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
      ]
    }
  };
  },
  methods: {
    login() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          userLogin(this.ruleForm.userAccount, this.ruleForm.userPassword)
              .then(res => {
                const {data} = res;
                this.user = data;
                console.log(res["data"]);
                if (res.code == 2000 && data != null) {
                  sessionStorage.setItem("token",res.token);
                  this.$store.dispatch("aLogin", {
                    user: data,
                    message: "",
                    success: () => {
                      console.log("欢迎您");
                    }
                  });
                } else {
                  alert("该用户不存在");
                }
                if(this.$store.state.user.user_role===1){
                  this.$router.push("backstagehome");
                }else {  this.$router.go(-1);}
              })
              .catch(() => {
              });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style scoped>
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

.fr {
  float: right;
  text-align: right;
}

.sep10 {
  height: 10px;
}

.inner {
  padding: 10px;
  font-size: 14px;
  line-height: 150%;
  text-align: left;
}

div {
  display: block;
}

:root {
  --box-background-color: #fff;
  --box-background-alt-color: #f9f9f9;
  --box-background-hover-color: #fafafa;
  --box-foreground-color: #000;
  --box-border-color: #e2e2e2;
  --box-border-radius: 3px;
}

#Top {
  text-align: center;
  background-color: var(--box-background-color);
  height: 44px;
  font-size: 15px;
  font-weight: 500;
  background-size: 44px 44px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
  padding: 0 20px;
}

#Wrapper {
  text-align: center;
  background-color: #e2e2e2;
  background-image: url(/static/img/shadow_light.png);
  background-repeat: repeat-x;
}

#Bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.22);
  background-color: var(--box-background-color);
  text-align: center;
  color: #999;
  padding: 0 10px;
}

body {
  padding: 0;
  margin: 0;
  font-family: helvetica neue, luxi sans, dejavu sans, segoe ui,
  hiragino sans gb, microsoft yahei, sans-serif;
}

.sep20 {
  height: 20px;
}

.content {
  min-width: 600px;
  max-width: 1100px;
  margin: 0 auto;
}
</style>