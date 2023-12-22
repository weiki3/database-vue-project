import axios from 'axios'
import { defineStore } from 'pinia'

// 创建 store
const useUserStore = defineStore('user', {
    persist: {
        key: "UserID",
        storage: sessionStorage,
        paths: ["password"]
    },
    // 定义状态：一个函数，返回一个对象
    state: () => ({
        UserID: '',
        password: '',
        user_name: '',
        email: '',
    }),

    // 定义 getters，等同于组件的计算属性
    getters: {
        // getter 函数接收 state 作为参数，推荐使用箭头函数
        hello: state => 'Hello!' + state.user_name
    },

    // 定义 actions，有同步和异步两种类型
    actions: {
        // 异步 action，一般用来处理异步逻辑
        async login(userData) {
            const result = await axios.get(`/users/login?UserID=${userData.UserID}&password=${userData.password}`)
            const { data, state } = result.data
            console.log(result)
            if (state === 200) {
                // action 中修改状态
                this.UserID = userData.UserID;
                this.password = userData.password;
                this.user_name = data.user_name;
                this.email = data.email;
            }
            console.log(this)
        },

        // 同步 action
        logout() {
            this.password = ''
            this.UserID = ''
            this.user_name = ''
            this.email = ''
        }
    }
})

export default useUserStore
