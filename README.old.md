# react学习项目

> 之前学习一直磕磕绊绊，没有坚持下来，现在搭好项目，有利于持续性学习
> react脚手架， create-react-app

## react
  - react是什么？
    - React是一个用于构建用户界面的 JavaScript 库
  - Rect能干什么？
    - 通过组件化的方式构建快速响应的大型 Web 应用程序
  
  - React如何干的？
    - 声明式
      - 命令式渲染，逐步操作
      - 声明式渲染，React.createElement()

  - JSX是什么？
    - JSX是一个JavaScript的语法扩展，JSX可以很好地描述UI应该呈现出它应有交互的本质形式
    - JSX其实是 React.createElement() 的语法糖
    - JSX工作原理
      - AST抽象语法树，是源代码语法结构的一种抽象表示，它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源中的一种结构
      - babel工作流， code源代码 --  词法解析 -- tokens -- 语法分析  -- AST抽闲语法树
  
  - Virtual DOM
    - 虚拟DOM就是一个描述真是DOM的JS对象
    - 保证了最低的性能，可以跨平台
    - 

  - Hooks
    - 什么是 Hooks
      1. 16.8版本之后的功能
      2. 在函数组件中使用state
      3. hooks钩子 useState useEffect useRef
      4. 非class的情况下，使用更多的react特性
      5. 可选，100%向后兼容
      
    - 为什么使用hooks
      1. 代码更简洁
      2. react上手难，
        - 生命周期难以理解
        - redux状态管理概念多
        - 高阶组件理解起来不容易
      3. hook上手简单
       - redux不是必须品
      4. 开发体验更好

    - 用过的hooks
      - useState
      - useEffect
      - useContext
      - useRef
      - useMemo / useCallback
      - useHistory
      - useReducer

    - 只能在顶层使用hooks， 不能在循环中使用
      - Hooks的设计是基于数组实现，在调用时按顺序加入数组中，如果使用循环、条件很可能导致数组取值错位，执行错误的hook。实质上react的源码不是数组，是链表


## 路由5
  ### 路由基本使用
  1. 使用Link标签
  ```js
    <Link to="/xxxx"> Demo </Link>
  ```
  2. 展示区些Route标签进行路径的匹配
  ```js
    <Route path="/xxx" component={Demo} />
  ```
  3. <App>的最外层包裹一个<BrowserRouter> 或 <HashRouter>
  ### 路由与一般组件
  1. 写法不同
    - 一般组件：<Demo />
    - 路由组件：<Route path="/demo" component={Demo} />
  2. 存放位置不同
    - 一般组件： components
    - 路由组件： pages
  3. 接受到的props不同
    - 一般组件：写组件标签时传递什么就是什么
    - 路由组件：接受到3个固定属性
      ```js
        history:{
          go: go(),
          goBack: goBack(),
          goForward: goForward(),
          push: push(path, state),
          replace: replace(path, state)
        }
        location: {
          pathname: '',
          search: '',
          state: {}
        },
        match: {
          params: {}
          path: '/demo'
          url: '/demo'
        }
      ```
  ### NavLink与封装NavLink
    1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式
    2. 标签体内容是一个特殊的标签属性
    3. 通过this.props.children可以获取标签体内容
  ### Switch的使用
    1. 通常情况下，path 和 component是一一对应的关系
    2. Switch可以提高路由匹配效率（单一匹配）
  ### 解决多级路径刷新页面样式丢失问题
    1. public/index.html 中引入样式 不写 ./ 写 /
    2. public/index.html 中引入样式 不写 ./ 写 %PUBLIC_URL%
    3. 使用HashRouter
  ### 路由的严格匹配与模糊匹配
    1. 默认使用的是模糊匹配
    2. 开辟严格匹配： <Route exact path='/about' component={About}>
    3. 严格匹配不要随便开启，需要再打开，开启后会导致无法继续匹配二级路由
  ### Redirect的使用
    1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳到Redirect指定的路由
      ```js
        <Switch>
          <Route path='/about' component={About} />
          <Redirect to='/about'>
        </Switch>
      ```
  ### 嵌套路由
    1. 注册子路由时要写上父路由的path值
    2. 路由的匹配时按照注册路由的顺序进行的
  ### 向路由组件传递参数
    #### params参数
      1. 路由链接（携带参数）<Link to='/detail/tom/18'>详情</Link>
      2. 注册路由（声明接收）<Route path='/detail/:name/:age' component={test}>
      3. 组件接收参数 const {id, age} = this.props.match.params
    #### search参数
      1. 路由链接（携带参数） <Link to='/detail/?id=1&name=tom'>详情</Link>
      2. 注册路由（无需声明接收）
      3. 组件接收参数  this.props.location.search // 字符串
      4. 获取的search是urlencoded编码字符串， 使用 querystring 插件解析
        ```js
          import qs from 'querystring'
          let obj = {name: 'zs', age: 10}
          qs.toString(obj) // name=zs&age=10
          let str = 'name=ls&sex=men'
          qs.parse(str) // {name: ls, sex: men}
        ```
    #### state参数
      1. 路由链接（携带参数）<Link to={{pathname:'/detail',state:{name:test,age:1}}}>详情</Link>
      2. 注册路由（无需声明接收）
      3. 组件接收参数 this.props.loaction.state // 对象
      4. 刷新也可以保留住参数
  ### push和replace
    #### 属性
      1. push属性，路由可以回退
      2. replace属性，直接替换路由，不可以回退
    #### 方法
      1. // push跳转
        - this.props.history.push('/detail/tom')
        - this.props.history.push('/detail?name=tom')
        - this.props.history.push('/detail', {name})
      2. // replace跳转
        - this.props.history.replace('/detail')
  ### 编程式路由导航
    借助 this.props.history对象上的API对操作路由跳转、前进、后退
     - this.props.history.push()
     - this.props.history.replace()
     - this.props.history.goBack()
     - this.props.history.goForward()
     - this.props.history.go()
  ### withRouter
    - withRouter(Header)
    - withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API
    - withRouter 的返回值是一新组件
  ### BrowserRouter 与 HashRouter的区别
    1. 底层原理不同
      - BrowserRouter使用的是H5的history API， 不兼容IE9及以下版本
      - HashRouter使用的是URL的哈希值
    2. path表现形式不同
      - BrowserRouter的路径没有#，
      - HashRouter的路径包含#
    3. 刷新后对路由state参数的影响
      - BrowserRouter没有任何印象，因为state会保存在history对象中
      - HashRouter刷新后会导致路由state参数的丢失
    4. HashRouter可以用于解决一些路径错误相关的问题

## 路由6
  ### Routes 与 route
  1. 移除了 <Switch> 引入了新的替代者 <Routes> 
  2. <Routes> 和 <Route> 要配合使用，且必须要 <Routes> 包裹 <Route>
  3. <Route> 相当于一个if语句，如果其路径与当前URL匹配，则呈现相对应的组件
  4. 当URL发生变化时， <Routes> 都会查看其所有子<Route>元素以找到最佳匹配并呈现
  5. <Route caseSensitive> 属性用于指定：匹配规则时是否区分大小写
  6. 重定向 <Navigate to='/detail' replace={true} /> // 默认是push
  7. <Route> 可以嵌套路由，可配合 useRoutes() 配置‘路由表’， 但需要通过 <Outlet> 组件渲染其子组件

  ### <NavLink>
  1. 与 <Link> 类似的组件，可以实现导航的‘高亮’效果
  2. 实例代码
    ```js
      <NavLink
        to="login"
        className={({isActive}) => {
          return isActive ? 'base one' : 'base'
        }}
      > login </NavLink>
    ```
  ### useRoutes路由表
  1. useRoutes(routes) 可配置children属性
  2. 子路由展示 <Outlet />

  ### 向路由组件传递参数
    #### params参数
    1. 路由链接不变
    2. 获取参数 useParams()
      - let {id} = useParams()
    #### search参数
    1. 路由链接不变
    2. 获取参数 useSearchParams()
      - const [search] = useSearchParams() search.get('id')
    #### state参数
    1. 路由链接 <Link to='detail2' state={{id:record.key}}>a</Link>
    2. 获取参数 useLocation()
      - const location = useLocation() location.state.id

  ### useMatch()
  1. 返回当前路由匹配的信息，对标5.x中的路由组件的match属性
  2. 示例
    ```js
      const match = useMatch('login/:x')
      console.log(match)
      /*
        {
          params: {x:'1'}
          pathname: 'login/1'
          pathnameBase: 'login/1'
          pattern: {
            path: '/login/:x',
            caseSensitive: false,
            end: false
          }
        }
      */
    ```
  ### 编程式路由
  1. const navigate = useNavigate()
    - navigate('/detail')
  
  ### useInRouterContext() 
    - 判断在路由环境中，返回真
  ### useNavigationType()
    - 返回当前的导航类型，用户如何来到页面的
    - 返回值 pop、push、replace
    - pop是指在浏览器中直接打开了这个路由组件（刷新页面）
  ### useOutlet()
    - 用来呈现当前组件中渲染的嵌套路由
    - const result = useOutlet()
    - 如果嵌套路由没有挂载，result为null。嵌套路由已经挂载，则展示嵌套的路由对象
  ### useResolvedPath()
    - 解析路由

