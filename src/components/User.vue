<template>
  <div>
    <el-form ref="form" :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-col :span="24">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col :span="12">
            <el-date-picker type="date" placeholder="选择结束日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button type="primary" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="userId" label="序号" width="60">
      </el-table-column>
      <el-table-column prop="userName" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="role" label="角色" width="180">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="updateTime" label="修改时间" width="180">
      </el-table-column>
      <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row.userId)" type="text" size="small">删除</el-button>
            </template>
       </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          date1: '',
          date2: ''
        },
        tableData: [],

      }
    },
    created(){
          this.onSubmit();
        },
    methods: {
      onSubmit() {
        this.$axios.get("http://localhost:8081/demo/user/list", {
            params: {
              userName: this.$data.form.username
            }
          })
          .then(res => {
            console.log(res);
            this.tableData = res.data.results.list;
          })
          .catch(err => {
            console.log(err);
          });
      },
      resetForm()
      {
         this.form = {};
      },
      handleClick(userId)
      {
        console.log(userId);
      }

      // alert(this.$moment(this.$data.form.date1).format('YYYYMMDD'))
    }
  }
</script>
