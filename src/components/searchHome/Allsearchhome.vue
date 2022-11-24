<template>
  <div>
    <Top/>
    <All />
    <!-- <Test /> -->
  </div>
</template>

<script>
//import { SnackbarProgrammatic as Snackbar } from "buefy";

import All from "../searchHome/All";
import Top from "@/components/searchHome/Top";


// import Test from "../articlehome/Test";
export default {
  mounted() {
    /*Snackbar.open("享受生活！！！！");*/
  },

  components: {
    Top,
    All
    // Test
  }
};
</script>


<style scoped>
</style>