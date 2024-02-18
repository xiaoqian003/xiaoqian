<script setup>
import { ref } from 'vue';
import { dayjs } from 'element-plus'
import {ElMessage,ElMessageBox} from 'element-plus'
const usersList = ref([
    {
      id: "61f7c9e68d2fa1b8d4a2a9f0",
      username: "john.doe",
      email: "john.doe@example.com",
      registrationDate: "2022-01-01T00:00:00Z",
      status: { "code": 1, "description": "Active" },
    },
    {
      id: "61f7c9e68d2fa1b8d4a2a9f0",
      username: "zhangsan.doe",
      email: "zhangsan.doe@example.com",
      registrationDate: "2022-02-20T00:00:00Z",
      status: { "code": 0, "description": "Negative" },
    },
]);
const formatTime = (time) => {
  return dayjs(time).format('YYYY年MM月DD日')
}
const getUsersList = async ()=>{
  // 请求用户列表
  //const res =  await axios.get('请求地址')
  console.log('模拟发起请求，并刷新数据');
  //  usersList.value = res.data.data
}
const onEdit = async ()=>{
  // await axios.post('编辑请求路径',data)
  console.log('模拟发起编辑请求');
  ElMessage.success('编辑成功')
  getUsersList()
}

const toggleStatus = async (row)=>{
  // await axios.post('编辑请求路径',row.status.code)
  console.log('模拟发起编辑请求');
  ElMessage.success('编辑成功')
  getUsersList()
}

const onDelete = async (id)=>{
  await ElMessageBox.confirm('你确认要删除该分类信息吗', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
  //模拟删除请求
  //  await axios.detele(row.id)
  console.log('模拟发起删除请求');
  ElMessage.success('删除成功')
  getUsersList()
}
getUsersList()
</script>
<template>
    <el-table :data="usersList" style="width: 100%" stripe :default-sort="{ prop: 'registrationDate', order: 'descending'}">
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="registrationDate" label="注册日期" sortable>
        <template #default="{row}">
          {{ formatTime(row.registrationDate) }}
        </template>
      </el-table-column>
      <el-table-column prop="status.description" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template #default="{row}">
          <el-button size="mini" @click="onEdit(row)">编辑</el-button>
          <el-button size="mini" @click="toggleStatus(row)" :type="row.status.code === 1 ? 'danger' : 'success'">
            {{ row.status.code === 1 ? '禁用' : '启用' }}
          </el-button>
          <el-button size="mini" type="primary" @click="onDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>