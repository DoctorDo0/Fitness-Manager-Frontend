<template>
  <!-- 搜索区 -->
  <div class="search"></div>

  <!-- 按钮区 -->
  <div class="action"></div>

  <!-- 数据区 -->
  <div class="grid">
    <!--简写形式 v-bind:可简写为: v-on:可简写为@-->
    <el-table class="tbl" v-bind:data="members" stripe border v-on:row-click="tableRowClick" ref="tbl">
      <el-table-column type="selection" align="center"/>
      <el-table-column prop="id" label="ID" width="80"/>
      <el-table-column prop="memberId" label="会员ID"/>
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="gender" label="性别" width="80" align="center"/>
      <el-table-column prop="phone" label="手机号" width="120" align="center"/>
      <el-table-column prop="registerDate" label="注册起始日期" width="120" align="center"/>
      <el-table-column prop="expiredDate" label="有效截止日期" width="120" align="center"/>
      <el-table-column prop="balance" label="资金" align="center"/>
    </el-table>

  </div>

  <!-- 分页 -->
  <div class="pagination"></div>
</template>

<style scoped>
.tbl {
  width: 100%;
}
</style>

<script setup>
import {ref, onMounted} from "vue";
import {findAll} from "@/api/MemberApi.js";

//表格数据
const members = ref();

onMounted(async () => {
  let resp = await findAll(1, 10);
  members.value = resp.data.data.list;
});

//表格对象
const tbl = ref();

//行点击事件
function tableRowClick(row) {
  tbl.value.toggleRowSelection(row);
}

</script>