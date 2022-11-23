<template>
  <el-container>
    <el-header>
      <Top/>
    </el-header>
    <el-container>
      <el-main >

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="userName">
            <el-input ref="username"  v-model="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="region">
            <el-select ref="gender" v-model="ruleForm.gender" placeholder="请选择性别">
              <el-option label="男" value="0"></el-option>
              <el-option label="女" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input ref="phone"  v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input ref="email"  v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">保存信息</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </el-container>


</template>

<script>
import {SnackbarProgrammatic as Snackbar} from "buefy";
import Top from "@/components/articlehome/Top";
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
          { message: '请输入您的账户', trigger: 'blur'},
          {min: 4, max: 15, message: '长度在 4 到 15 个字符', trigger: 'blur'},
          {pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/, message: '不允许输入空格等特殊符号'}
        ],
        phone: [
          {message: '请输入您的电话号码', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'},
          {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur"
          }
        ],
        email: [
          {message: '请输入您的邮箱', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'},
          {
            pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: "请输入正确的邮箱",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.ruleForm.userName = this.$store.state.user.user_name == null ? "" : this.$store.state.user.user_name;
    this.ruleForm.phone = this.$store.state.user.phone == null ? "" : this.$store.state.user.phone;
    this.ruleForm.email = this.$store.state.user.email == null ? "" : this.$store.state.user.email;
    this.ruleForm.gender = this.$store.state.user.gender == null ? "" : this.$store.state.user.gender;
  },
  methods: {
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
            if (valid) {
              const id = this.$store.state.user.id;
              const userName = this.ruleForm.userName;
              const gender = this.ruleForm.gender;
              const phone = this.ruleForm.phone;
              const email = this.ruleForm.email;
              const userRole = this.$store.state.user.user_role;
              const userState = this.$store.state.user.user_status;
              const token = this.$store.state.user.token;
              updateUser(id, userName, gender, phone, email, userRole, userState, token).then(res => {
                if (res.code === 2000) {
                  Snackbar.open({message: "更新成功!", position: 'is-top'});
                  this.$store.state.user.user_name = userName;
                  this.$store.state.user.gender = gender;
                  this.$store.state.user.phone = phone;
                  this.$store.state.user.email = email;
                  this.$router.push("/userhome");
                } else {
                  Snackbar.open({message: "更新失败!", position: 'is-top'});
                }
              });
            }
            else {
              Snackbar.open({message: "请正确填写信息!", position: 'is-top'});
            }
          })},
    resetForm() {
      this.ruleForm.userName = "";
      this.ruleForm.phone = "";
      this.ruleForm.email = "";
      this.ruleForm.gender = "";
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
  },
  components: {
    Top
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
