<script setup>
defineProps({
    userlist:{
        type:Array,
        default:[]
    }
})
const emit = defineEmits(['update'])
</script>
<template>
<el-card class="box-card" v-for="item in userlist" :key="item.id">
    <template #header>
      <div class="card-header">
        <span>用户信息</span>
        <el-button @click="emit('update')" class="button" type="primary">更新</el-button>
      </div>
    </template>
    <div class="text item">
        {{ '姓名:' + item.name }}
        <br>
        {{ '邮件:' + item.email }}
        <br>
        {{ '角色:' + item.role }}
    </div>
  </el-card>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>