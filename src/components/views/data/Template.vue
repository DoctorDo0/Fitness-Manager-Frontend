<template>
  <div class="dashboard">
    <!-- 顶部三个小卡片 -->
    <el-row :gutter="20" class="top-cards">
      <el-col :span="8">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>学生统计</span>
              <el-tag type="primary">总数: {{ studentCount }}</el-tag>
            </div>
          </template>
          <div class="chart-wrapper">
            <VChart
                class="mini-chart"
                :option="studentChartOption"
                :autoresize="true"
            />
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>教师统计</span>
              <el-tag type="success">总数: {{ teacherCount }}</el-tag>
            </div>
          </template>
          <div class="chart-wrapper">
            <VChart
                class="mini-chart"
                :option="teacherChartOption"
                :autoresize="true"
            />
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="stat-card">
          <template #header>
            <div class="card-header">
              <span>课程统计</span>
              <el-tag type="warning">总数: {{ courseCount }}</el-tag>
            </div>
          </template>
          <div class="chart-wrapper">
            <VChart
                class="mini-chart"
                :option="courseChartOption"
                :autoresize="true"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 底部两个大图表 -->
    <el-row :gutter="20" class="bottom-charts">
      <el-col :span="12">
        <el-card class="chart-card">
          <template #header>
            <div class="card-header">
              <span>教师教授课程占比</span>
              <el-button type="primary" link @click="refreshTeacherData">
                <el-icon><Refresh /></el-icon>
              </el-button>
            </div>
          </template>
          <div class="big-chart-wrapper">
            <VChart
                class="big-chart"
                :option="teacherCourseOption"
                :autoresize="true"
            />
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="chart-card">
          <template #header>
            <div class="card-header">
              <span>学生选课占比</span>
              <el-button type="primary" link @click="refreshStudentData">
                <el-icon><Refresh /></el-icon>
              </el-button>
            </div>
          </template>
          <div class="big-chart-wrapper">
            <VChart
                class="big-chart"
                :option="studentCourseOption"
                :autoresize="true"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Refresh } from '@element-plus/icons-vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'

// 按需引入 ECharts 组件
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

// ============ 统计数据 ============
const studentCount = ref(0)
const teacherCount = ref(0)
const courseCount = ref(0)

// ============ 顶部小饼图配置 ============

// 学生统计图表
const studentChartOption = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false
      },
      emphasis: {
        scale: false,
        label: {
          show: true,
          fontSize: 12,
          fontWeight: 'bold'
        }
      },
      data: []
    }
  ],
  color: ['#409EFF', '#79bbff', '#a0cfff']
})

// 教师统计图表
const teacherChartOption = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false
      },
      emphasis: {
        scale: false,
        label: {
          show: true,
          fontSize: 12,
          fontWeight: 'bold'
        }
      },
      data: []
    }
  ],
  color: ['#67C23A', '#95d475', '#b3e19d']
})

// 课程统计图表
const courseChartOption = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false
      },
      emphasis: {
        scale: false,
        label: {
          show: true,
          fontSize: 12,
          fontWeight: 'bold'
        }
      },
      data: []
    }
  ],
  color: ['#E6A23C', '#f3d19e', '#f8d186']
})

// ============ 底部大饼图配置 ============

// 教师教授课程占比
const teacherCourseOption = ref({
  title: {
    text: '教师课程分布',
    left: 'center',
    top: 10,
    textStyle: {
      fontSize: 14,
      fontWeight: 'normal'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c}门 ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: 'center'
  },
  series: [
    {
      name: '教师课程',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['60%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      data: []
    }
  ],
  color: ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399']
})

// 学生选课占比
const studentCourseOption = ref({
  title: {
    text: '学生选课分布',
    left: 'center',
    top: 10,
    textStyle: {
      fontSize: 14,
      fontWeight: 'normal'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c}人 ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: 'center'
  },
  series: [
    {
      name: '学生选课',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['60%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold'
        }
      },
      data: []
    }
  ],
  color: ['#F56C6C', '#E6A23C', '#67C23A', '#409EFF', '#909399']
})

// ============ 数据初始化方法 ============

// 设置假数据
const setMockData = () => {
  // 顶部卡片总数
  studentCount.value = 528
  teacherCount.value = 42
  courseCount.value = 36

  // 顶部小饼图数据
  studentChartOption.value.series[0].data = [
    { name: '本科生', value: 385 },
    { name: '研究生', value: 112 },
    { name: '博士生', value: 31 }
  ]

  teacherChartOption.value.series[0].data = [
    { name: '教授', value: 18 },
    { name: '副教授', value: 15 },
    { name: '讲师', value: 9 }
  ]

  courseChartOption.value.series[0].data = [
    { name: '专业课', value: 22 },
    { name: '选修课', value: 10 },
    { name: '必修课', value: 4 }
  ]

  // 底部大饼图数据
  teacherCourseOption.value.series[0].data = [
    { name: '张教授 (Java)', value: 3 },
    { name: '李教授 (Python)', value: 2 },
    { name: '王教授 (数据库)', value: 4 },
    { name: '赵教授 (前端)', value: 2 },
    { name: '其他教师', value: 5 }
  ]

  studentCourseOption.value.series[0].data = [
    { name: 'Java程序设计', value: 156 },
    { name: 'Python数据分析', value: 124 },
    { name: 'MySQL数据库', value: 98 },
    { name: 'Vue前端开发', value: 87 },
    { name: '其他课程', value: 63 }
  ]
}

// 刷新教师数据（随机更新）
const refreshTeacherData = () => {
  const teachers = ['张教授', '李教授', '王教授', '赵教授', '刘教授', '陈教授']
  const courses = ['Java', 'Python', '数据库', '前端', '算法', '网络']

  const newData = []
  const count = Math.floor(Math.random() * 4) + 4 // 4-7条数据

  for (let i = 0; i < count; i++) {
    const teacher = teachers[Math.floor(Math.random() * teachers.length)]
    const course = courses[Math.floor(Math.random() * courses.length)]
    const value = Math.floor(Math.random() * 5) + 1 // 1-5门课

    // 避免重复
    const name = `${teacher} (${course})`
    if (!newData.some(item => item.name === name)) {
      newData.push({ name, value })
    }
  }

  teacherCourseOption.value.series[0].data = newData
}

// 刷新学生数据（随机更新）
const refreshStudentData = () => {
  const courses = [
    'Java程序设计', 'Python数据分析', 'MySQL数据库', 'Vue前端开发',
    '算法设计', '计算机网络', '操作系统', '软件工程'
  ]

  const newData = []
  const count = Math.floor(Math.random() * 4) + 5 // 5-8条数据

  for (let i = 0; i < count; i++) {
    const course = courses[Math.floor(Math.random() * courses.length)]
    const value = Math.floor(Math.random() * 150) + 50 // 50-200人

    // 避免重复
    if (!newData.some(item => item.name === course)) {
      newData.push({ name: course, value })
    }
  }

  studentCourseOption.value.series[0].data = newData
}

// 组件挂载时初始化数据
onMounted(() => {
  setMockData()
})
</script>

<style scoped>
.dashboard {
  padding: 20px;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.top-cards {
  margin-bottom: 20px;
}

.stat-card {
  height: 220px;
}

.stat-card :deep(.el-card__body) {
  padding: 0;
  height: calc(100% - 60px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
}

.chart-wrapper {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.mini-chart {
  width: 100%;
  height: 100%;
}

.chart-card {
  height: 400px;
}

.chart-card :deep(.el-card__body) {
  padding: 0;
  height: calc(100% - 60px);
}

.big-chart-wrapper {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.big-chart {
  width: 100%;
  height: 100%;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .stat-card {
    height: 200px;
  }

  .chart-card {
    height: 350px;
  }
}
</style>