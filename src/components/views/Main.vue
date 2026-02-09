<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header class="header">
        <h1>中享思途健身会馆客户预约管理系统</h1>
        <div class="logout">
          <el-button type="danger" @click="logout">注销</el-button>
        </div>
      </el-header>
      <el-container class="con">
        <el-aside width="200px" class="aside">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" router>
            <!--<el-sub-menu index="1">
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
            </el-menu-item>-->
            <template v-for="m1 in menus">
              <el-sub-menu v-if="Array.isArray(m1.children)" :index="m1.name">
                <template #title>
                  <Component :is="m1.icon" v-if="m1.icon"/>
                  <span>{{ m1.name }}</span>
                </template>

                <el-menu-item v-for="m2 in m1.children" :index="m2.url">
                  <Component :is="m2.icon" v-if="m2.icon"/>
                  <span>{{ m2.name }}</span>
                </el-menu-item>
              </el-sub-menu>

              <!-- 叶子菜单 -->
              <el-menu-item v-else :index="m1.url">
                <Component :is="m1.icon" v-if="m1.icon"/>
                <span>{{ m1.name }}</span>
              </el-menu-item>
            </template>
          </el-menu>


        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
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

.header > h1 {
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

.logout {
  position: absolute;
  right: 15px;
  bottom: 15px;
}
</style>

<script setup>
import menus from "@/api/MenuApi.js";
import {removeJwt} from "@/api/JwtApi.js";
import {useRouter} from "vue-router";

let router = useRouter();

function logout() {
  removeJwt();
  router.push("/login");
}
</script>