<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<template>
    <el-button @click="router.push('/one')">题目一</el-button>
    <el-button @click="router.push('/two')">题目二</el-button>
    <el-button @click="router.push('/three')">题目三</el-button>
    <el-button @click="router.push('/four')">题目四</el-button>
    <el-button @click="router.push('/five')">题目五</el-button>

</template>