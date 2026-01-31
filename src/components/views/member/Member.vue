<template>
  <!-- 搜索区 -->
  <div class="search">
    <el-form inline ref="formRef" :model="searchModel">

      <el-form-item label="会员号:" prop="memberId">
        <el-input v-model="searchModel.memberId" placeholder="输入会员号"/>
      </el-form-item>

      <el-form-item label="姓名:" prop="name">
        <el-input v-model="searchModel.name" placeholder="输入姓名"/>
      </el-form-item>

      <el-form-item label="性别:" prop="gender">
        <el-select v-model="searchModel.gender" :empty-values="[null]" :value-on-clear="null" style="width: 160px">
          <el-option label="不限" value=""/>
          <el-option label="男" value="男"/>
          <el-option label="女" value="女"/>
        </el-select>
      </el-form-item>

      <el-form-item label="手机号:" prop="phone">
        <el-input v-model="searchModel.phone" placeholder="输入手机号"/>
      </el-form-item>

      <el-form-item label="邮箱:" prop="email">
        <el-input v-model="searchModel.email" placeholder="输入邮箱"/>
      </el-form-item>

      <el-form-item label="注册日期:" prop="registerDateRange">
        <el-date-picker v-model="searchModel.registerDateRange"
                        type="daterange"
                        format="YYYY-MM-DD"
                        value-format="YYYY-MM-DD"
                        range-separator="~"
                        start-placeholder="起始"
                        end-placeholder="结束"
        />
      </el-form-item>

      <el-form-item label="资金起始数量:" prop="balanceFrom">
        <el-input v-model="searchModel.balanceFrom" placeholder="输入起始资金"/>
      </el-form-item>

      <el-form-item label="资金结束数量:" prop="balanceTo">
        <el-input v-model="searchModel.balanceTo" placeholder="输入结束资金"/>
      </el-form-item>

    </el-form>
  </div>

  <!-- 按钮区 -->
  <div class="action">
    <el-button type="primary" :icon="CirclePlus" @click="addInfo">新增</el-button>
    <el-button type="primary" :icon="Edit" @click="editById">修改</el-button>
    <el-button type="primary" :icon="Search" @click="doSearch">查询</el-button>
    <el-button type="primary" :icon="Refresh" @click="resetForm">重置</el-button>
    <el-button type="danger" :icon="Delete" @click="doDelete">删除</el-button>
  </div>

  <!-- 数据区 -->
  <div class="grid">
    <!--简写形式 v-bind:可简写为: v-on:可简写为@-->
    <el-table class="tbl" v-bind:data="members" stripe border v-on:row-click="tableRowClick" height="500" ref="tbl">
      <el-table-column type="selection" align="center" fixed/>
      <el-table-column prop="id" label="ID" width="80" fixed/>
      <el-table-column prop="memberId" label="会员ID" width="100" fixed/>
      <el-table-column prop="name" label="姓名" width="140" fixed/>
      <el-table-column prop="gender" label="性别" width="60" align="center"/>
      <el-table-column prop="phone" label="手机号" width="160"/>
      <el-table-column prop="email" label="邮箱" width="160"/>
      <el-table-column prop="registerDate" label="注册起始日期" width="160" align="center"/>
      <el-table-column prop="registerBy" label="注册操作人" width="120" align="center"/>
      <el-table-column prop="updateDate" label="最后更新日期" width="160" align="center"/>
      <el-table-column prop="updateBy" label="更新操作人" width="120" align="center"/>
      <el-table-column prop="balance" label="资金" width="120" align="center"/>
      <el-table-column width="150" label="操作">
        <template #default="scope">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
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

.pagination {
  margin-top: 10px;
}
</style>

<script setup>
import {ref, onMounted, reactive, toRaw} from "vue";
import {findAll, deleteByIds as apiDelByIds} from "@/api/MemberApi.js";
import {CirclePlus, Delete, Edit, Refresh, Search} from "@element-plus/icons-vue";
import {ElMessage, ElMessageBox} from "element-plus";

//表格数据
const members = ref();

//页面数据
const pageinfo = reactive({
  currentPageNo: 1,
  currentPageSize: 20,
  total: 0,
});

//页面就绪后执行
onMounted(() => {
  search(pageinfo.currentPageNo, pageinfo.currentPageSize);
});

//封装表单查询条件
let searchModel = ref({
  memberId: null,
  name: null,
  gender: null,
  phone: null,
  email: null,
  registerDateRange: [],
  registerBy: null,
  updateDateRange: [],
  updateBy: null,
  balanceFrom: null,
  balanceTo: null,
});

//封装查询功能，含更新数据
async function search(pageNo = pageinfo.pageNo, pageSize = pageinfo.pageSize, params = {}) {
  let resp = await findAll(pageNo, pageSize, params);
  members.value = resp.data.list;
  pageinfo.currentPageNo = resp.data.pageNum;
  pageinfo.currentPageSize = resp.data.pageSize;
  pageinfo.total = resp.data.total;
}

//查询按钮功能
function doSearch() {
  let params = toRaw(searchModel.value);
  search(pageinfo.currentPageNo, pageinfo.currentPageSize, params);
}

//表单对象
const formRef = ref();

//重置按钮功能
function resetForm() {
  formRef.value.resetFields();//重置表单
}

//页面删除逻辑
function doDelete() {
  //获取选中行
  let rows = tbl.value.getSelectionRows();
  let ids = rows.map(t => t.id);
  if (ids.length === 0) {
    ElMessage.error("未选择要删除的行");
    return;
  }

  ElMessageBox.confirm("是否确认删除选中的行?", "警告", {
    type: "warning"
  }).then(() => {
    //点击ok操作
    deleteByIds(ids);
  }).catch(() => {
    //点击cancel操作
    ElMessage.info("已取消")
  });
}

//删除传递功能
async function deleteByIds(ids) {
  let resp = await apiDelByIds(ids);
  ElMessage.success("删除操作成功，共删除" + resp.data + "条记录");
  doSearch();
}

//新增功能
function addInfo() {
  console.log("addInfo");
}

//编辑功能
function editById() {
  console.log("editById");
}

//表格对象
const tbl = ref();

//行点击事件
function tableRowClick(row) {
  tbl.value.toggleRowSelection(row);
}

//页面导航功能
function pageChange() {
  doSearch();
}

</script>