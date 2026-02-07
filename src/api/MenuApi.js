const menus = [
    {
        name: "基础数据"
    }, {
        name: "会馆管理",
        children: [{
            name: "员工管理",
            url: "/main/employee"
        }, {
            name: "教练管理",
            url: "/main/trainer"
        }, {
            name: "会员管理",
            url: "/main/member"
        }, {
            name: "课程管理",
            url: "/main/lesson"
        }, {
            name: "预约管理",
            url: "/main/reserve"
        }, {
            name: "课程日历",
            url: "/main/calendar"
        }, {
            name: "数据统计",
            url: "/main/report"
        }]
    }, {
        name: "营销管理",
        children: [
            {
                name: "活动管理"
            }, {
                name: "户外推广"
            }
        ]
    }, {
        name: "系统设置",
        icon: "setting",
        url: "/setting"
    }
];


export default menus;