<template>
  <div class="first">
    <section>
      <b-field label="用户名">  <!--maxlength="30"-->
        <b-input v-model="userName" placeholder="username"></b-input>
        <!-- required pattern="[A-Za-z][A-Za-z0-9_]{4,14}"
        validation-message="用户名不能为空!"-->
      </b-field>
      <!--      <b-field label="邮箱">
              <b-input type="email" v-model="userEmail" placeholder="Your email" required></b-input>
            </b-field>-->
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
    <b-button type="is-info" outlined rounded @click="first">注册</b-button>
  </div>
</template>


<script>
import {SnackbarProgrammatic as Snackbar} from "buefy";
import { registerUser} from "@/api";

export default {
  data() {
    return {
      userName: "",
      userEmail: "",
      userPassword: "",
      checkPassword: ""
    };
  },
  methods: {
    first() {
      this.$store.commit("first", {
        userName: this.userName,
        //userEmail: this.userEmail,
        userPassword: this.userPassword
      });
      if (
          this.$store.state.registeruser.userName != "" &&
          //this.$store.state.registeruser.userEmail != "" &&
          this.$store.state.registeruser.userPassword != "" &&
          this.checkPassword != ""
      ) {
        registerUser(this.userName,this.userPassword,this.checkPassword)
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
      }
    }
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