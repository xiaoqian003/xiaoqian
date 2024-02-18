<script setup>
import { ref } from 'vue';
import { dayjs } from 'element-plus'

const userList = ref([
    {
      groupId: 1,
      groupName: "Admin Group",
      users: [
       {
          id: 1,
          name: "John Doe",
         email: "john.doe@example.com",
         role: "admin",
         createdAt: "2023-01-01T00:00:00Z"
       },
       // 更多用户...
     ]
    },
    {
        groupId: 2,
        groupName: "Editor Group",
        users: [
            // ...
        ]
        },
    // 更多用户组...

]);
const formatTime = (time) => {
  return dayjs(time).format('YYYY年MM月DD日')
}
const filterHandler = (value, row, column) => {
    const property = column['property']
  return row[property] === value
}

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}

</script>
<template>
   <el-table :data="userList" style="width: 100%" :default-sort="{ prop: 'groupId', order: 'descending' }">
    <el-table-column prop="groupId" label="组id" width="150" sortable></el-table-column>
    <el-table-column prop="groupName" label="组名" width="200" :filters="[
        { text: 'Admin Group', value: 'Admin Group' },
        { text: 'Editor Group', value: 'Editor Group' },
      ]" :filter-method="filterHandler"></el-table-column>
    <el-table-column label="用户分组信息">
      <template #default="scope">
        <el-table :data="scope.row.users" style="width: 100%;">
          <el-table-column prop="name" label="用户名"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="role" label="角色"></el-table-column>
          <el-table-column prop="createdAt" label="Created At">
            <template #default="{row}"> 
              {{ formatTime(row.createdAt) }}
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      :current-page="1"
      :page-size="5"
      layout="total, prev, pager, next"
      :total="userList.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </template>