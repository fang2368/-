<template>
    <!--缩进决定层级-->
    <div id="bgimg">
        <div id="login_box">
            <h2>登    录</h2>
            <div id="app">
                <router-view />
            </div>

            <div id="input_box">
                <input type="text" v-model="phoneNumber" placeholder="请输入手机号码" />
            </div>

            <div class="input_box">
                <input type="password" v-model="password" placeholder="请输入密码" />
            </div>

            <button @click="handleLogin">登录</button><br>

            <div class="msg">
                尚未注册？ <span class="register-link" @click="goToRegister">点击注册</span>
            </div>
        </div>       
        
    </div>
</template>

<script>

    import axios from 'axios'
    export default {

        data() {
            return {
                phoneNumber: '',  // 存储手机号码
                password: '',      // 存储密码
            };
        },
        name: 'App',

        methods: {

            /*

                //这一段是和后端对接部分的handleLogin方法的示例代码。-------------------------------------

                //async异步，和await配合使用
                async handleLogin() {
                // 校验输入
                if (!this.phoneNumber || !this.password) {
                    alert('请输入完整的登录信息');
                    return;
                }

                try {
                    // 发送登录请求到后端
                    const response = await axios.post('/api/login', {
                        phoneNumber: this.phoneNumber,
                        password: this.password
                    });

                    // 检查后端返回的响应
                    if (response.data.success) {
                        alert('登录成功');
                        console.log('登录成功', this.phoneNumber);
                        // 跳转到主页或其他页面
                        //this.$router.push('/home');
                    } else {
                        alert('登录失败: ' + response.data.message);  // 提示登录失败的原因
                    }
                } catch (error) {
                    alert('网络错误，请稍后重试');
                    console.error(error);
                }
            },

            //这一段是和后端对接部分的handleLogin方法的示例代码。-------------------------------------

            */


            // 只有前端部分的handleLogin方法如下：

            handleLogin() {
                if (!this.phoneNumber || !this.password) {
                    alert('请输入完整的登录信息');
                    return;
                }

                // 这里可以添加更多登录逻辑，以及预留后端接口
               
                alert('登录成功');
                console.log('登录成功', this.phoneNumber);
            },

            // 跳转到注册页面
            goToRegister() {
                this.$router.push('/register'); // 跳转到注册页面
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

    /*背景*/
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

    /*登录框*/
    #login_box {
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

    /*登录标题*/
    h2 {
        color: #ffffff90;
        margin-top: 0; /* 调整标题的上间距 */
        font-size: 40px;
    }

    /*输入框*/
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

    /*登录按钮*/
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

    /*点击跳转注册的文字链接*/
    .register-link {
        color: #ffffff; /* 默认字体颜色 */
        cursor: pointer; /* 鼠标悬停时显示手型光标 */
        transition: color 0.3s; /* 添加过渡效果 */
    }

        .register-link:hover {
            color: #1e90ff; /* 鼠标悬停时改变为深蓝色 */
        }

    .msg {
        margin-top: 20px;
        color: #fff;
    }
    
</style>
