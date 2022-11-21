<template>
  <el-table ref="filterTable" :data="tableData" height="600" style="width: 100%">
    <el-table-column align="center" prop="post_id" label="贴子id" width="130"></el-table-column>
    <el-table-column align="center" prop="post_userid" label="发帖人id" width="130"></el-table-column>
    <el-table-column align="center" prop="post_title" label="发帖标题"  width="180" ></el-table-column>
    <el-table-column align="center" prop="post_status" label="贴子状态" :formatter="statusFormat" sortable width="180" column-key="date"></el-table-column>
    <el-table-column align="center" prop="creat_time" label="发帖日期" sortable width="180" column-key="date"></el-table-column>
    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
<!--        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
<!--  <el-table
      :data="tableData"
      style="width: 100%"
      max-height="250">
    <el-table-column
        fixed
        sortable
        prop="creat_time"
        label="发帖日期"
        width="150">
    </el-table-column>
    <el-table-column
        prop="post_userid"
        label="发帖人id"
        width="50">
    </el-table-column>
    <el-table-column
        prop="post_title"
        label="发帖标题"
        width="120">
    </el-table-column>
    <el-table-column
        prop="post_status"
        label="贴子状态"
        width="50">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="120">
      <template slot-scope="scope">
        <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>-->
</template>

<script>
import {deletePosts, getAllposts} from "@/api";
import {SnackbarProgrammatic as Snackbar} from "buefy";

export default {
  data() {
    return {
      tableData: [{
        post_id: 0,
        post_type: 0,
        post_title: "",
        post_content: "",
        post_userid: 0,
        post_star:0,
        post_like:0,
        post_reply: 0,
        post_status: 0,
        creat_time: "",
        update_time: "",
      }]
    };
  },
  created() {
    const token= this.$store.state.user.token;
    getAllposts(token).then(res =>{
      this.tableData = res.data;
    });
  },
  methods: {
    statusFormat(row) {
      if (row.post_status === 0) {
        return '正常'
      } else  {
        return '异常'
      }
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      const id = row.post_id;
      deletePosts(id,this.$store.state.user.token).then(res=>{
        if(res.code ===2000){
          Snackbar.open({message:"删除成功!",position: 'is-top'});
          this.reload();
        }else {
          Snackbar.open({message:"删除失败",position: 'is-top'});
        }
      });
      console.log(index, row);
      this.tableData.splice(index,1);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    formatter(row, column) {
      console.log(column);
      return row.address;
    }
  }
};
</script>