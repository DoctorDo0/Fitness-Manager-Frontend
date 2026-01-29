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
      <el-table-column prop="phone" label="手机号" width="120"/>
      <el-table-column prop="email" label="邮箱" width="120"/>
      <el-table-column prop="registerDate" label="注册起始日期" width="120" align="center"/>
      <el-table-column prop="registerBy" label="注册操作人" width="120" align="center"/>
      <el-table-column prop="updateDate" label="最后更新日期" width="120" align="center"/>
      <el-table-column prop="updateBy" label="更新操作人" width="120" align="center"/>
      <el-table-column prop="balance" label="资金" align="center"/>
    </el-table>

  </div>

  <!-- 分页 -->
  <div class="pagination">
    <el-pagination
        v-model:current-page="pageinfo.currentPageNo"
        v-model:page-size="pageinfo.currentPageSize"
        v-bind:page-sizes="[10, 20, 30, 50, 100]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        v-bind:total="pageinfo.total"
        v-on:change="pageChange"
    />
  </div>
</template>

<style scoped>
.tbl {
  width: 100%;
}
</style>

<script setup>
import {ref, onMounted, reactive} from "vue";
import {findAll} from "@/api/MemberApi.js";

//表格数据
const members = ref();

//页面数据
const pageinfo = reactive({
  currentPageNo: 1,
  currentPageSize: 10,
  total: 0,
});

//页面就绪后执行
onMounted(() => {
  search(pageinfo.currentPageNo, pageinfo.currentPageSize);
});

//封装查询功能，含更新数据
async function search(pageNo, pageSize) {
  let resp = await findAll(pageNo, pageSize);
  members.value = resp.data.list;
  pageinfo.currentPageNo = resp.data.pageNum;
  pageinfo.currentPageSize = resp.data.pageSize;
  pageinfo.total = resp.data.total;
}

//表格对象
const tbl = ref();

//行点击事件
function tableRowClick(row) {
  tbl.value.toggleRowSelection(row);
}

//页面导航功能
function pageChange(pageNo, pageSize) {
  search(pageNo, pageSize);
}

</script>