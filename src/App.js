import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Index from './index/index'



//2.商品装车
function counterReducer(state = {count:0} , action){
  // action就是dispatch拿到的那个值
  // console.log('action' , action)
  // action.data ?state.count = action.count : console.log('初始化')
  // 上面的这个方式并不会达到重新渲染组件的效果，因为对象和数组是引用类型的值，引用类型只有地址变了才算是真真正正的改变，样式才会渲染,如果按上面的赋值效果，只是值变了，地址并没有发生变化，所以要用到浅拷贝和深拷贝
  // action.data ? console.log(Object.assign({} , state , action.data)) : console.log('初始化')
  // return Object.assign({} , state , action.data);
  //浅拷贝另一种方式
  // return {...state , ...action.data}

  //所以最终的样式
  switch(action.type){
    case  'INC':
      return {...state , ...action.data}
    default:
      return state
  }
}

//3.存入仓库
let store = createStore(counterReducer);
// console.log('store',store)
// 这里将返回的state装入仓库，然后通过<Provider store={store}></Provider>就可以传到组件的所有地方了

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Provider store={store}>
        <Index/>
      </Provider>
    </div>
  );
}

export default App;
