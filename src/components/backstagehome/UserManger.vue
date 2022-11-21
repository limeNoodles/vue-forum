<template>
<!--  <div class="tile is-ancestor">
    <div class="tile is-parent" v-for="(item,i) in user" :key="i">
      <article class="tile is-child box">
        <p class="subtitle" style="height:50px;width:300px">用户名：{{item.user_name}}</p>
        <p class="subtitle">邮箱：{{item.email}}</p>
        <p class="subtitle">
          头像：
          <img :src="(`${item.avatar_url}`)" class="el-avatar&#45;&#45;circle" onerror="this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
        </p>
        <p class="subtitle">电话：{{item.phone}}</p>
      </article>
    </div>
  </div>-->
  <el-table ref="filterTable" :data="user"  height="600" style="width: 100%" >
    <el-table-column align="center" prop="id"  label="用户id" width="70"></el-table-column>
    <el-table-column align="center" prop="user_name" label="用户名"  width="130" >
      <template slot-scope="scope">
        <div v-if="!scope.row.isEdit">{{ scope.row.user_name }}</div>
        <div v-else>
          <el-input v-model="scope.row.user_name"></el-input>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="user_account" label="用户账户"  width="130" ></el-table-column>
    <el-table-column label="用户头像" width="140">
      <template slot-scope="scope">
        <img :src="(`${scope.row.avatar_url}`)" class="el-avatar--circle" onerror="this.src='http://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';this.οnerrοr=null"/>
      </template>
    </el-table-column>

    <el-table-column align="center" prop="gender" label="用户性别" :formatter="genderFormat" sortable width="130" column-key="date">
      <template slot-scope="scope">
        <div v-if="!scope.row.isEdit">{{ scope.row.gender ==0?"男":"女"}}</div>
        <div v-else>
          <el-select v-model="scope.row.gender" placeholder="性别">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
          </el-select>
<!--          <el-input v-model="scope.row.gender"></el-input>-->
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="phone" label="用户电话"  width="130" >
      <template slot-scope="scope">
        <div v-if="!scope.row.isEdit">{{ scope.row.phone }}</div>
        <div v-else>
          <el-input v-model="scope.row.phone"></el-input>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="email" label="用户邮箱"  width="130" >
      <template slot-scope="scope">
        <div v-if="!scope.row.isEdit">{{ scope.row.email }}</div>
        <div v-else>
          <el-input v-model="scope.row.email"></el-input>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="user_role" label="用户角色" :formatter="roleFormat" sortable width="130" column-key="date">
      <template slot-scope="scope">
        <div v-if="!scope.row.isEdit">{{ scope.row.user_role ==0?"用户":"管理员"}}</div>
        <div v-else>
<!--          <el-input v-model="scope.row.user_role"></el-input>-->
          <el-select v-model="scope.row.user_role" placeholder="用户角色">
            <el-option label="普通用户" value="0"></el-option>
            <el-option label="管理员" value="1"></el-option>
          </el-select>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="user_status" label="账户状态" :formatter="statusFormat" sortable width="130" column-key="date">
      <template slot-scope="scope">
        <div v-if="!scope.row.isEdit">{{ scope.row.user_status ==0?"正常":"异常"}}</div>
        <div v-else>
<!--          <el-input v-model="scope.row.user_status"></el-input>-->
          <el-select v-model="scope.row.user_role" placeholder="账户状态">
            <el-option label="正常" value="0"></el-option>
            <el-option label="异常" value="1"></el-option>
          </el-select>
        </div>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="creat_time" label="创建日期" sortable width="180" column-key="date"></el-table-column>
<!--    <el-table-column prop="update_time" label="最后更新日期" sortable width="180" column-key="date"></el-table-column>-->
    <el-table-column align="center" label="操作" width="180">
      <template slot-scope="scope">
        <p>
          <el-button size="mini" @click="handleClick(scope.row)">{{ scope.row.isEdit ? '完成' : '编辑' }}</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </p>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
import {deleteUser, getuserlist, updateUser} from "@/api";
import {SnackbarProgrammatic as Snackbar} from "buefy";
export default {
  data() {
    return {
      user: [
        {
          id: 0,
          user_name: "",
          user_account: "",
          avatar_url: "",
          gender: 0,
          phone: "",
          email: "",
          user_role: 0,
          user_status: 0,
          creat_time: "",
          update_time: "",
        }
      ]
    };
  },
  created() {
    const token = this.$store.state.user.token;
    getuserlist(token)
      .then(res => {
        this.user = res.data;
      })
      .catch();
    this.$nextTick(() => {
      this.$refs.filterTable.doLayout();
    });
  },
  methods:{
    handleClick(row) {
      // 动态设置数据并通过这个数据判断显示方式
      if (row.isEdit) {
        // 2022.8.31 更新
        // 其实我们想要取消编辑状态的话不需要用下面这步
        // 直接使用 row.isEdit = false 就行
        // 因为 this.$set 后 isEdit 字段已经被 Vue 加上了响应式
        this.$delete(row, 'isEdit')
        const  id = row.id,userName = row.user_name,gender = row.gender,phone = row.phone, email = row.email,
            userRole= row.user_role,userStatus = row.user_status,token = this.$store.state.user.token;
        updateUser(id,userName,gender,phone,email,userRole,userStatus,token).then(res=>{
           if(res.code === 2000){Snackbar.open({message:"更新成功!",position: 'is-top'});}
          else{  Snackbar.open({message:"更新失败",position: 'is-top'});}
        });
      } else {
        this.$set(row, 'isEdit', true);
      }

      console.log(this.tableData)
    },

    roleFormat(row) {
      if (row.user_role === 0) {
        return '普通用户'
      } else  if (row.user_role === 1){
        return '管理员'
      }
    },
    genderFormat(row) {
      if (row.gender === 0) {
        return '男'
      } else  {
        return '女'
      }
    },
    statusFormat(row) {
      if (row.user_status === 0) {
        return '正常'
      } else  {
        return '异常'
      }
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      const id = row.id;
      deleteUser(id,this.$store.state.user.token).then(res=>{
        if(res.code ===2000){
          Snackbar.open({message:"删除成功!",position: 'is-top'});
          this.reload();
        }else {
          Snackbar.open({message:"删除失败",position: 'is-top'});
        }
      });
      console.log(index, row);
     this.user.splice(index,1);

    },
  }
};
</script>

<style scoped>
.size {
  width: 64px;
  height: 64px;
}


</style>