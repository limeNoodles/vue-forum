<template>
  <div class="first">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户账户" prop="userAccount" >
        <el-input v-model="ruleForm.userAccount" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="userPassword">
        <el-input  v-model="ruleForm.userPassword" style="width: 250px" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword">
        <el-input  v-model="ruleForm.checkPassword" style="width: 250px" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="first">注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
<!--    <section>
      <b-field label="用户名">  &lt;!&ndash;maxlength="30"&ndash;&gt;
        <b-input v-model="userName" placeholder="username"></b-input>
        &lt;!&ndash; required pattern="[A-Za-z][A-Za-z0-9_]{4,14}"
        validation-message="用户名不能为空!"&ndash;&gt;
      </b-field>
      &lt;!&ndash;      <b-field label="邮箱">
              <b-input type="email" v-model="userEmail" placeholder="Your email" required></b-input>
            </b-field>&ndash;&gt;
      <b-field label="密码">
        <b-input
            type="password"
            password-reveal
            placeholder="Your password"
            required
            v-model="userPassword"
        ></b-input>
      </b-field>
      <b-field label="确认密码">
        <b-input
            type="password"
            password-reveal
            placeholder="Your checkPassword"
            required
            v-model="checkPassword"
        ></b-input>
      </b-field>
    </section>
    <b-button type="is-info" outlined rounded @click="first">注册</b-button>-->
  </div>
</template>


<script>
import {SnackbarProgrammatic as Snackbar} from "buefy";
import { registerUser} from "@/api";

export default {
  data() {
    return {
      ruleForm: {
        userAccount: "",
        userPassword: "",
        checkPassword: ""
      },
      rules: {
        userAccount: [
          { required: true, message: "请输入您的账户", trigger: "blur" },
          { min: 4, max: 15, message: "长度在 4 到 15 个字符", trigger: "blur" },
          { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/, message: '不允许输入空格等特殊符号' }
        ],
        userPassword: [
          { required: true, message: "请输入您的密码", trigger: "blur" },
          { min: 8, max: 20, message: "长度在 8 到 20 个字符", trigger: "blur" }
        ],
        checkPassword: [
          { required: true, message: "请输入确认密码", trigger: "blur" },
          { min: 8, max: 20, message: "长度在 8 到 20 个字符", trigger: "blur" }
        ]
      },
/*      userName: "",
      userEmail: "",
      userPassword: "",
      checkPassword: ""*/
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    first() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
      this.$store.commit("first", {
        userName: this.ruleForm.userAccount,
        //userEmail: this.userEmail,
        userPassword: this.ruleForm.userPassword
      });
      if(this.ruleForm.userPassword!==this.ruleForm.checkPassword){
        Snackbar.open({message:"两次密码不一致",position: 'is-top'});
        return;
      }
      if (
          this.$store.state.registeruser.userName != "" &&
          //this.$store.state.registeruser.userEmail != "" &&
          this.$store.state.registeruser.userPassword != "" &&
          this.ruleForm.checkPassword != ""
      ) {
        registerUser(this.ruleForm.userAccount,this.ruleForm.userPassword,this.ruleForm.checkPassword)
            .then(res =>{
               if(res.code === 2000){
                 Snackbar.open({message:"注册成功",position: 'is-top'});
                 this.$store.state.user.id = res.data;
               }else {
                 Snackbar.open({message:res.description,position: 'is-top'});
               }
            });

      } else {
        this.$buefy.snackbar.open({
          duration: 5000,
          message: "请填写完整信息",
          type: "is-danger",
          position: "is-bottom-left",
          actionText: "确定",
          queue: false,
          onAction: () => {
            this.$buefy.toast.open({
              message: "信息填写完整再点击保存",
              queue: false
            });
          }
        });
      } }
        else {
          Snackbar.open({message:"请填写数据",position: 'is-top'});
        }
    } ) }
  }
};
</script>

<style scoped>
.first {
  text-align: center;
  float: left;
  width: 500px;
  height: 400px;
}
</style>