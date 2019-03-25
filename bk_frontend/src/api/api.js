import { $axios } from './axios'

// 调取api Demo
export const getDemoApi = params => {
  return $axios.get('/get_demo_api/', { params: params })
}

// 获取左侧菜单数据
export const getMenu = params => {
  return $axios.get('/api/sysmanage/menus/tree/', { params: params })
}
// 获取当前用户的权限列表
export const getCurrentPermission = params => {
  return $axios.get('/api/sysmanage/users/current_permission/', { params: params })
}
// 获取角色列表数据
export const getGroups = params => {
  return $axios.get('/api/sysmanage/groups/', { params: params })
}
