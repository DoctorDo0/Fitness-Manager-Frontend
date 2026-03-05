const menus = [
    {
        name: "基础数据",
        url: "/main/data"
    }, {
        name: "数据统计",
        url: "/main/report"
    }, {
        name: "课程及预约管理",
        children: [{
            name: "员工管理",
            url: "/main/employee"
        }, {
            name: "学生管理",
            url: "/main/student"
        }, {
            name: "教师管理",
            url: "/main/teacher"
        }, {
            name: "课程管理",
            url: "/main/course"
        }, {
            name: "课程信息管理",
            url: "/main/course-info"
        }, {
            name: "预约管理",
            url: "/main/appointment"
        }, {
            name: "课程日历",
            url: "/main/calendar"
        }]
    }, {
        name: "营销管理",
        children: [
            {
                name: "活动管理",
                url: "/main/activity"
            }, {
                name: "户外推广",
                url: "/main/promotion"
            }
        ]
    }, {
        name: "系统设置",
        icon: "setting",
        url: "/setting"
    }, {
        name: "退出系统",
        url: "/logout"
    }
];


export default menus;