import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const asyncRouter = [
    {path: '/login', component: () => import('@/views/login/index'), hidden: true},
    {path: '/404', component: () => import('@/views/404'), hidden: true},

    {
        path: '/',
        component: Layout,
        redirect: '/main',
        name: 'Main',
        hidden: true,
        children: [{
            path: 'main',
            component: () => import('../views/main/index')
        }]
    },
    {
        path: '/file',
        component: Layout,
        redirect: 'noredirect',
        name: 'fileMan',
        meta: { title: '文件管理', icon: 'system' },
        children: [
            {
                path: 'file/index',
                name: 'file',
                component: () => import('../views/file/file'),
                meta: { title: '上传下载', icon: 'system-users' }
            },
        ]

    },

    //系统管理
    {
        path: '/system',
        component: Layout,
        redirect: 'noredirect',
        name: 'System',
        meta: {title: '系统管理', icon: 'system'},
        children: [
            // {
            //     path: 'functions',
            //     name: 'Functuous',
            //     component: () => import('../views/system/functions/Functions'),
            //     meta: { title: '功能管理', icon: 'system-functions' }
            // },
            {
                path: 'users',
                name: 'Users',
                component: () => import('../views/system/users/Users'),
                meta: {title: '用户管理', icon: 'system-users'}
            },
            {
                path: 'roles',
                name: 'Roles',
                component: () => import('../views/system/roles/Roles'),
                meta: {title: '角色管理', icon: 'system-roles'}
            },
            {
                path: 'acls',
                name: 'Permission',
                component: () => import('../views/system/permission/Permission'),
                meta: {title: '权限管理', icon: 'system-functions'}
            },
            {
                path: 'record',
                name: 'Record',
                component: () => import('../views/system/record/Record'),
                meta: {title: '权限更新记录', icon: 'system-record'}
            }
        ]
    },

    {
        path: '/personal',
        component: Layout,
        redirect: 'noredirect',
        name: '个人中心',
        hidden: true,
        meta: {title: '个人中心', icon: 'percenter'},
        children: [
            {
                path: 'setting/index', name: '个人设置', hidden: true,
                component: () => import('@/views/personal/setting/index'),
                meta: {title: '个人设置', icon: 'twoclass'}
            },
            {path: '*', redirect: '/404', hidden: true}
        ]
    },

    {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: asyncRouter
})
