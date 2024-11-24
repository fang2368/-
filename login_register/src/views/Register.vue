<template>
    <!--缩进决定层级-->
    <div id="bgimg">
        <div id="register_box">
            <!-- 返回登录界面 -->
            <span class="back-link" @click="goBack">返回</span>

            <h2>注册</h2>
            <div id="app">
                <router-view />
            </div>

            <div id="input_box">
                <input type="text" v-model="phoneNumber" placeholder="请输入手机号码" />
            </div>

            <div id="input_box">
                <input type="text" v-model="userName" placeholder="请输入用户名" />
            </div>

            <div class="input_box">
                <input type="password" v-model="password" placeholder="请输入密码" />
            </div>

            <div class="input_box">
                <input type="text" v-model="repeat_pwd" placeholder="请再次输入密码" />
            </div>

            <button @click="handleRegister">注册</button><br>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                phoneNumber: '',  // 存储手机号码
                userName: '',     //存储用户名
                password: '',      // 存储密码
                repeat_pwd: ''    // 存储重复密码
            };
        },
        name: 'App',

        methods: {

            /*
            //这一段是和后端对接部分的handleRegister方法的示例代码。-------------------------------------
            
            async handleRegister() {
                // 检查是否填写完整
                if (!this.phoneNumber || !this.userName || !this.password || !this.repeat_pwd) {
                    alert('请输入完整的用户信息');
                    return;
                }

                // 校验密码是否一致
                if (this.password !== this.repeat_pwd) {
                    alert('密码不一致');
                    return;
                }

                // 校验用户名是否已存在
                const isUsernameValid = await this.checkUsernameAvailability(this.userName);
                if (!isUsernameValid) {
                    alert('用户名已存在');
                    return;
                }

                // 如果所有校验通过，则发送注册请求到后端
                try {
                    const response = await axios.post('your-backend-api-url/register', {
                        phoneNumber: this.phoneNumber,
                        userName: this.userName,
                        password: this.password
                    });

                    if (response.data.success) {
                        alert('注册成功');
                        this.$router.push('/login'); // 跳转到登录页面
                    } else {
                        alert('注册失败: ' + response.data.message);
                    }
                } 
                catch (error) {
                    console.error('注册请求失败:', error);
                    alert('注册失败，请稍后再试');
                }
            },

            // 检查用户名是否已存在
            async checkUsernameAvailability(username) {
                try {
                    const response = await axios.get(`your-backend-api-url/check-username?username=${username}`);
                    // 假设后端返回 { available: true/false }
                    return response.data.available; 
                } 
                catch (error) {
                    console.error('检查用户名失败:', error);
                    alert('检查用户名失败，请稍后再试');
                    return false;
                }
            },

            //这一段是和后端对接部分的handleRegister方法的示例代码。-------------------------------------
            */


           //只有前端部分的handleRegister方法如下：
            handleRegister() {

                //输入信息不完整
                if (!this.phoneNumber || !this.userName || !this.password || !this.repeat_pwd) {
                    alert('请输入完整的用户信息');
                    return;
                }

                // 校验密码是否一致
                if (this.password !== this.repeat_pwd) {
                    alert('前后输入密码不一致');
                    return;
                }

                //后端预留接口：检验用户名是否重复
                 if (false) {
                    alert('用户名已存在');
                    return;
                }

                // 这里可以添加更多登录逻辑，如发送请求等
                else if(true)
                {
                    console.log('注册成功', this.phoneNumber, this.userName);
                    alert('注册成功');
                    this.$router.push('/login'); // 跳转到登录页面
                }          
            },

            // 返回文字点击事件处理
            goBack() {
            this.$router.push('/login');  // 假设登录页面的路由路径是 '/login'
            },
        }
    };
</script>

<style scoped>

    body {
        margin: 0;
        padding: 0;
        border: 0;
        height: 120vh; /* 设置body的高度为100vh，确保背景图片填充整个页面 */
        display: flex;
        justify-content: center;
        align-items: center; /* 使用Flexbox居中内容 */
    }

    #bgimg {
        background: url('..\assets\pictures\login_background.jpg') no-repeat;
        background-size: cover; /* 背景图片铺满 */
        background-position: center;
        position: absolute; /* 使背景图片充满整个页面 */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; /* 保证背景图片在登录框下 */
    }

    #register_box {
        width: 30%; /* 可以适当调整宽度 */
        background-color: rgba(0, 0, 0, 0.6); /* 半透明背景 */
        text-align: center;
        border-radius: 10px;
        padding: 50px;
        position: absolute;
        left: 32%;
        top: 25%;
        z-index: 1; /* 确保登录框在背景图片上 */
    }

    h2 {
        color: #ffffff90;
        margin-top: 0; /* 调整标题的上间距 */
    }

    #input_box {
        margin-top: 10px;
    }

    input {
        border: 0;
        width: 80%; /* 调整输入框宽度 */
        font-size: 15px;
        color: #fff;
        background: transparent;
        border-bottom: 2px solid #fff;
        padding: 5px 10px;
        outline: none;
        margin-top: 10px;
    }

    button {
        margin-top: 30px;
        width: 80%;
        height: 40px;
        border-radius: 10px;
        border: 0;
        color: #fff;
        text-align: center;
        line-height: 40px;
        font-size: 15px;
        background-image: linear-gradient(to right, #30cfd0, #330867);
        cursor: pointer; /* 鼠标悬停时显示手型光标 */
    }

    /* 返回文字样式 */
    .back-link {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
    }
        .back-link:hover {
            text-decoration: underline; /*鼠标悬停画下横线*/
        }

    .msg {
        margin-top: 20px;
        color: #fff;
    }

</style>
