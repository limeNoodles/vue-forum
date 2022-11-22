<template>
  <div id="forumhome">
    <el-container>
      <el-header><Top /></el-header>
      <el-main><Tiles /></el-main>
    </el-container>
    <el-container>
      <el-main><SecendTiles /></el-main>
    </el-container>
    <el-container>
      <el-main><Footer/></el-main>
    </el-container>
  </div>
</template>


<script>

import Tiles from "../forumHome/Tiles";
import Footer from "../forumHome/Footer";
import SecendTiles from "../forumHome/SecendTiles";
import Top from "@/components/articlehome/Top";
//import ThirdTiles from "@/components/forumHome/ThirdTiles";


export default {
  components: {
    Top,
    Tiles,
    Footer,
    SecendTiles,
    //ThirdTiles
  }
};
</script>

