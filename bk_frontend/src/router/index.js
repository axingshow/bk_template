import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { mapGetters } from 'vuex'
const MonitorPanel = () => import('@/pages/monitor_panel/MonitorPanel')
const User = () => import('@/pages/user/user')
const Group = () => import('@/pages/group/Group')
Vue.use(Router);

let routerVue = new Vue({
    store,
    methods: {
        // 当前用户是否有路由权限
        async isRouterNameAuthority(routerName) {
            // 当前用户能访问的路由列表是否已获取,如果没有获取,则请求获取路由权限接口
            if (!this.isGetUserPerm) {
                await this.$store.dispatch('leftmenu/getCurrentPermission')
            }
            // 判断当前用户能访问的路由
            // 第一步，首先判断用户是否为管理员
            if (this.isAdmin) {
                return true
            }
            let authorityRes = false
            for(let i = 0; i < this.routerMenuList; i++) {
                if (this.routerMenuList[i].name === routerName) {
                    authorityRes = true
                    break
                }
            }
            return authorityRes
        }
    },
    computed: {
        ...mapGetters('leftmenu', ['isAdmin', 'isGetUserPerm', 'routerMenuList'])
    }
})

let router = new Router({
    routes: [
        {
            path: '/monitor_panel',
            name: '/monitor_panel',
            component: MonitorPanel,
            meta: {
                bread: [],
                footer: true
            }
        },
        {
            path: '/user',
            name: '/user',
            component: User,
            meta: {
                bread: [
                    {displayName: '系统管理', path: {path: ''}},
                    {displayName: '用户管理', path: {path: '/user'}},
                ],
                footer: 'Copyright&copy;2019&nbsp;版权说明'
            }
        },
        {
            path: '/group',
            name: '/group',
            component: Group,
            meta: {
                bread: [
                    {displayName: '系统管理', path: {path: ''}},
                    {displayName: '角色管理', path: {path: '/group'}},
                ],
                footer: 'Copyright&copy;2019&nbsp;版权说明'
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        from.name ? next({name: from.name}) : next('/');
    } else {
        let authorityResult = routerVue.isRouterNameAuthority(to.name)
        if (authorityResult || ['/403', '/404'].indexOf(to.path != -1)) {
            next();
        } else {
            next('/403');
        }
    }
});
export default router
