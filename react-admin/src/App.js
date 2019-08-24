import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import Header from "./components/Header";//头部
import Nav from "./components/Nav";//左侧导航
import Loading from "./pages/common/Loading/Loading";//加载中的页面

//懒加载页面
const NotFound = lazy(() => import('./pages/common/NotFound/NotFound'));//404页面
const Login = lazy(() => import('./pages/common/Login/Login'));//登录页面
const Home = lazy(() => import('./pages/home/Home'));//首页
const Detail = lazy(() => import('./pages/common/Detail/Detail'));//商品详情
const Save = lazy(() => import('./pages/common/Detail/Save'));//商品详情
const Category = lazy(() => import('./pages/category/Category'));//品类管理
const Goods = lazy(() => import('./pages/goods/Goods'));//商品管理
const Order = lazy(() => import('./pages/order/Order'));//订单管理
const User = lazy(() => import('./pages/user/User'));//订单管理


const AppPanel = () => {
  return (
    <Router>
      <div className="app">
        {/* 页面头部 */}
        <Header />
        {/* 页面左侧导航 */}
        <Nav />
        {/* 内容区 */}
        {/*   根页面组件 */}
        <CacheSwitch>
          <CacheRoute path="/" exact render={() => {
            return <Redirect to="/home" />
          }} />
          <CacheRoute path='/home' component={Home} />
          <CacheRoute path='/goods' component={Goods} />
          <CacheRoute path='/order' component={Order} />
          <CacheRoute path='/category' component={Category} />
          <CacheRoute path='/user' component={User} />
          <Route path='/save/:id' component={Save} />
          <Route path='/detail' component={Detail} />
          <CacheRoute component={NotFound} />
        </CacheSwitch>
        {/* 子页面组件写这里 */}
      </div>
    </Router>
  );
}

/* 检测登录状态，根据登录状态来决定显示的内容 */
const App = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      {props.isLogin ? <AppPanel /> : <Login />}
    </Suspense>
  );
}

const mapStateToProps = (state) => ({
  isLogin: state.user.isLogin
})
const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);