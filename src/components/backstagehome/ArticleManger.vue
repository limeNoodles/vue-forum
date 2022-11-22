<template>
  <div class="dormitory">
    <div class="searchWord" >
      <p>
        搜索:  <el-input v-model="search" style="display: inline-block;width: 300px"
                         placeholder="请输入搜索内容">
      </el-input></p>
    </div>
    <div class="dormitoryData">
  <el-table ref="filterTable" :data="tables" height="600" style="width: 100%">
    <el-table-column align="center" prop="post_id" label="贴子id" width="130" sortable column-key="num"></el-table-column>
    <el-table-column align="center" prop="post_userid" label="发帖人id" width="130"></el-table-column>
    <el-table-column align="center" prop="post_title" label="发帖标题"  width="180" ></el-table-column>
    <el-table-column align="center" prop="post_star" label="贴子收藏" width="100" sortable column-key="num"></el-table-column>
    <el-table-column align="center" prop="post_reply" label="贴子回复" width="100" sortable column-key="num"></el-table-column>
    <el-table-column align="center" prop="post_like" label="贴子点赞" width="100" sortable column-key="num"></el-table-column>
    <el-table-column align="center" prop="post_status" label="贴子状态" :formatter="statusFormat" sortable width="180" column-key="num"></el-table-column>
    <el-table-column align="center" prop="creat_time" label="发帖日期" sortable width="180" column-key="date"></el-table-column>
    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
<!--        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
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
      search:"",
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
  },
  computed: {
    // 模糊搜索
    tables () {
      const search = this.search
      if (search) {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测。
        // 注意： filter() 不会改变原始数组。
        return this.tableData.filter(data => {
          // some() 方法用于检测数组中的元素是否满足指定条件;
          // some() 方法会依次执行数组的每个元素：
          // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
          // 如果没有满足条件的元素，则返回false。
          // 注意： some() 不会对空数组进行检测。
          // 注意： some() 不会改变原始数组。
          return Object.keys(data).some(key => {
            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
            return String(data[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.tableData
    }
  }
};
</script>