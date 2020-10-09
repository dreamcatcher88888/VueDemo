<template>
  <div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="userName"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="role"
      label="角色"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="updateTime"
      label="修改时间">
      </el-table-column>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id:'1',
          createTime: '2016-05-02',
          userName: 'zhangsan',
          role: '管理员',
          updateTime:"2016-05-02"
        }, {
          id:'1',
          createTime: '2016-05-02',
          userName: 'luohao',
          role: '管理员',
          updateTime:"2016-05-02"
        }, {
          id:'1',
          createTime: '2016-05-02',
          userName: 'chengrui',
          role: '管理员',
          updateTime:"2016-05-02"
        }, {
          id:'1',
          createTime: '2016-05-02',
          userName: 'dengming',
          role: '管理员',
          updateTime:"2016-05-02"
        }]
      }
    }
  }
</script>
