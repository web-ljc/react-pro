import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// 监测redux中状态的改变，如redux的状态发生了变化，重新渲染App组件
// store.subscribe(() => {
//   root.render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// })

// React.StrictMode 语法校验
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
