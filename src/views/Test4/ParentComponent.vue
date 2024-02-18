<script setup>
import ChildComponent from './components/ChildComponent.vue';
import { ref } from 'vue';
const userlist = ref([
    { id: 1, name: '张三',email:'123@qq.com',role:'admin' },
    { id: 1, name: '李四',email:'124@lisi.com',role:'admin' },
    { id: 1, name: '王五',email:'125@qq.com',role:'admin' },
])
//获取用户列表数据
const getUserList =  async () => {
    // await axios.get('模拟接口')
    console.log('模拟接口请求,并且刷新数据');
    // userlist.value = res.data.data
}
const onUpdate = () => {
    getUserList();
}
getUserList();
</script>
<template>
    <child-component :userlist="userlist" @update="onUpdate"></child-component>
</template>