<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="createTime"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="user"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="logDetail"
      label="详情">
    </el-table-column>
  </el-table>
</template>



 <script>
    export default{
            data(){
                return{
                    tableData: [],
                }
            },
            created(){
                 var that=this
                 this.$axios.get("http://localhost:8081/demo/log/list")
                      .then(res => {
                        console.log(res);
                        this.tableData = res.data.results.list;
                      })
                      .catch(err => {
                        console.log(err);
                      });
            }
        }
</script>
