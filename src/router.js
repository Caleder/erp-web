import Vue from 'vue'
import Router from 'vue-router'

// import Login from './components/Login.vue'
const Login = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Login.vue')
// import Home from './components/Home.vue'
const Home = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Home.vue')
// import Welcome from './components/Welcome.vue'
const Welcome = () => import(/* webpackChunkName: "login_home_welcome" */ './components/Welcome.vue')

const UserManagement = () => import(/* webpackChunkName: "Settings" */ './components/settings/UserManagement.vue')
const LogManagement = () => import(/* webpackChunkName: "Settings" */ './components/settings/LogManagement.vue')
const SystemConfiguration = () => import(/* webpackChunkName: "Settings" */ './components/settings/SystemConfiguration.vue')
const Category = () => import(/* webpackChunkName: "Settings" */ './components/settings/Category.vue')
const UnitManagement = () => import(/* webpackChunkName: "Settings" */ './components/settings/UnitManagement.vue')
const SettlementManagement = () => import(/* webpackChunkName: "Settings" */ './components/settings/SettlementManagement.vue')

const SettlementAccount = () => import(/* webpackChunkName: "Basic" */ './components/basic/SettlementAccount.vue')
const WarehouseManagement = () => import(/* webpackChunkName: "Basic" */ './components/basic/WarehouseManagement.vue')
const EmployeeManagement = () => import(/* webpackChunkName: "Basic" */ './components/basic/EmployeeManagement.vue')
const CustomerManagement = () => import(/* webpackChunkName: "Basic" */ './components/basic/CustomerManagement.vue')
const SupplierManagement = () => import(/* webpackChunkName: "Basic" */ './components/basic/SupplierManagement.vue')
const ProductManagement = () => import(/* webpackChunkName: "Basic" */ './components/basic/ProductManagement.vue')

const PurchaseList = () => import(/* webpackChunkName: "Purchase" */ './components/purchase/List.vue')
const PurchaseSave = () => import(/* webpackChunkName: "Purchase" */ './components/purchase/Save.vue')

const RefundList = () => import(/* webpackChunkName: "Refund" */ './components/refund/List.vue')
const RefundSave = () => import(/* webpackChunkName: "Refund" */ './components/refund/Save.vue')

const SellCustomerOrderList = () => import(/* webpackChunkName: "Sell" */ './components/sell/customerOrder/List.vue')
const SellCustomerOrderSave = () => import(/* webpackChunkName: "Sell" */ './components/sell/customerOrder/Save.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/settings/userManagement', component: UserManagement },
        { path: '/settings/logManagement', component: LogManagement },
        { path: '/settings/systemConfiguration', component: SystemConfiguration },
        { path: '/settings/category', component: Category },
        { path: '/settings/unitManagement', component: UnitManagement },
        { path: '/settings/settlementManagement', component: SettlementManagement },
        { path: '/basic/settlementAccount', component: SettlementAccount },
        { path: '/basic/warehouseManagement', component: WarehouseManagement },
        { path: '/basic/employeeManagement', component: EmployeeManagement },
        { path: '/basic/customerManagement', component: CustomerManagement },
        { path: '/basic/supplierManagement', component: SupplierManagement },
        { path: '/basic/productManagement', component: ProductManagement },
        { path: '/purchase/list', component: PurchaseList },
        { path: '/purchase/save', component: PurchaseSave },
        { path: '/refund/list', component: RefundList },
        { path: '/refund/save', component: RefundSave },
        { path: '/sell/customerOrder/list', component: SellCustomerOrderList },
        { path: '/sell/customerOrder/save', component: SellCustomerOrderSave }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
