export default [
  {
    key: 'Dashboard',
    path: '/admin/dashboard',
    name: 'Dashboard',
    icon: 'el-icon-s-home',
    children: false,
    permission: null
  },
  {
    key: 'Report',
    name: 'Report',
    path: '/admin/report',
    icon: 'el-icon-document',
    permission: null,
    children: false
  },
  {
    key: 'User',
    name: 'Users',
    path: '/admin/users',
    icon: 'el-icon-user',
    permission: null,
    children: false
  },
  {
    key: 'Management',
    name: 'Management',
    path: '/admin/management',
    icon: 'el-icon-setting',
    permission: null,
    children: false
  }
];
