import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
//导入路由转发器
import router from './router'
import ElementPlus from "element-plus"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
//导入ElementPlus所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.use(router);
//使用ElementPlus组件，并配置本地化参数
app.use(ElementPlus, {
    locale: zhCn
});
app.mount('#app');