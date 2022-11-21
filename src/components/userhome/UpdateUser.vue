<template>
  <div id="Wrapper">
    <div class="content">
      <div id="Leftbar"></div>

      <div id="Main">
        <div class="sep20"></div>
        <div class="box">
          <div class="header">
            <a href="/public">微趣论坛</a>
            <span class="chevron">&nbsp;›&nbsp;</span> 注册 &nbsp;
            <li class="fa fa-lock"></li>
          </div>
          <div class="cell">
<!--            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
            </el-form>-->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.userName"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="region">
                <el-select v-model="ruleForm.gender" placeholder="请选择性别">
                  <el-option label="男" value="0"></el-option>
                  <el-option label="女" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="电话" prop="name">
                <el-input v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="name">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">保存信息</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
<!--  <div class="secend">
    <section class="f">
      <b-field label="电话" :label-position="labelPosition">
        <b-input
          v-model="userPhone"
          required
          pattern="^((\d{11})|(\d{7,8})|(\d{4}|\d{3})-(\d{7,8}))$"
          validation-message="请输入正确的电话号码!"
        ></b-input>
      </b-field>

      <b-field label="性别" :label-position="labelPosition">
        <b-select placeholder="选择性别" v-model="userSex">
          <option value="男">男</option>
          <option value="女">女</option>
        </b-select>
      </b-field>

      <b-field label="个性签名" :label-position="labelPosition">
        <b-input maxlength="200" type="textarea" v-model="userShow"></b-input>
      </b-field>

      <hr />
    </section>
    <b-button type="is-info" outlined rounded @click="secend">保存</b-button>
  </div>-->
</template>

<script>
import { SnackbarProgrammatic as Snackbar } from "buefy";
import {updateUser} from "@/api";
export default {
  data() {
    return {
      labelPosition: "on-border",
      userShow: "",
      userPhone: "",
      userSex: "",
      ruleForm: {
        userName: '',
        gender: 0,
        phone: '',
        email: '',
      },
      rules: {
        userName: [
          { required: true, message: '请输入您的账户', trigger: 'blur' },
          { min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入您的电话号码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入您的邮箱', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updateUser(this.$store.state.user.id,this.ruleForm.userName,this.ruleForm.gender,
                     this.ruleForm.phone,this.ruleForm.email).then(res => {
              if(res.code===2000){
                Snackbar.open({message:"信息修改成功",position: 'is-top'});
              }else {
                Snackbar.open({message:res.description,position: 'is-top'});
              }
          });
          //alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    secend() {
      this.$store.commit("secend", {
        userShow: this.userShow,
        userPhone: this.userPhone,
        userSex: this.userSex
      });
      if (
        this.$store.state.registeruser.userPhone != "" &&
        this.$store.state.registeruser.userShow != "" &&
        this.$store.state.registeruser.userSex != ""
      ) {
        Snackbar.open("保存成功");
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
      }
    }
  }
};
</script>

<style scoped>
.secend {
  margin: auto;
  width: 500px;
  height: 500px;
  text-align: center;
}
.f {
  padding-top: 8rem;
}
</style>
