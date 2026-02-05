<script setup>
import {Document, Location, Setting} from "@element-plus/icons-vue";
</script>

<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header class="header">
        <h1>中享思途健身会馆客户预约管理系统</h1>
      </el-header>
      <el-container class="con">
        <el-aside width="200px" class="aside">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>基础数据</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>会馆管理</span>
            </el-menu-item>

            <el-menu-item index="3">
              <el-icon><document /></el-icon>
              <span>营销管理</span>
            </el-menu-item>

            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>系统设置</span>
            </el-menu-item>
          </el-menu>


        </el-aside>
        <el-main class="main"></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.header {
  height: 70px;
  border-bottom: 1px solid #ccc;
  background-color: aliceblue;
  position: relative;
}

.header>h1 {
  margin: 0;
  font-weight: normal;
  font-size: 22px;
  position: absolute;
  top: 20px;
  left: 100px;
}

.con {
  height: calc(100% - 70px);
}

.aside {
  height: 100%;
  background-color: #545c64;
}

.main {
  height: 100%;
  background-color: #fff;
}
</style>