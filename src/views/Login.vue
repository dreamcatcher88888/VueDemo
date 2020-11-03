<template>
    <div class="login-container">
        <el-form :model="formData" :rules="rules"
         status-icon
         ref="formData"
         label-position="left"
         label-width="0px"
         class="demo-ruleForm login-page">
            <h2 class="title">系统登录</h2>
            <el-form-item prop="username">
                <el-input type="text"
                    v-model="formData.username"
                    auto-complete="off"
                    placeholder="用户名"
                ></el-input>
            </el-form-item>
            <el-form-item prop="password">
                 <el-input type="password"
                     v-model="formData.password"
                     auto-complete="off"
                     placeholder="密码"
                 ></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            logining: false,
            formData: {
                username: 'admin',
                password: '123456',
            },
            rules: {
                username: [{required: true, message: '请输入你的用户名', trigger: 'blur'}],
                password: [{required: true, message: '请输入你的密码', trigger: 'blur'}]
            },
            checked: false
        }
    },
    methods: {
        handleSubmit(event){
            this.$refs.formData.validate((valid) => {
                if(valid){
                    this.logining = true;
                    if(this.formData.username === 'admin' &&
                       this.formData.password === '123456'){
                           this.logining = false;
                           sessionStorage.setItem('user', this.formData.username);
                           this.$router.push({path: '/main'});//配置跳转的路径
                    }else{
                        this.logining = false;
                        this.$alert('用户名或密码错误!', '警告', {
                            confirmButtonText: '确认'
                        })
                    }
                }else{
                    console.log('error submit!');
                    return false;
                }
            })
        }
    }
};
</script>

<style scoped>
.login-container {
    width: 100%;
    height: 100%;
}
.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    }
.label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
</style>
