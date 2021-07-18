import React , {useState , useEffect}from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import Counter from '../components/counter/counter'

// 自定义组件名字要大写
const Index = (props) => { 
    // 这样就是直接将props传进来了，这里面包含了父组件传进来的东西，还有下面的stateq的对象值保存在了state里面了
    //不过还是更偏向与解构数据，因为第一次理解函数组件的父组件传给子组件的方式，这里就不做修改了
    // console.log('props' , props)
    // console.log('state' , state)
    const dispatch = useDispatch()
    const [num , setNum] = useState(0)
    const [state1 , setState1] = useState(0)
    //这里在挂载的时候会打印一次
    // console.log(num)
    const incCount = () =>{
        setNum(num + 1)
        // console.log(`第${num}次打印` , num)
        //这里打印出来的不是最新的num值(目前还不清楚为什么)
        
    }
    const desCount =() =>{
        setNum(num - 1)
    }
    // 1.选购商品
    useEffect(() => {
        // console.log(num)
        // 这里的这个dispatch就将商品装车里面的action与这里联系起来了
        dispatch({type:"INC" , data :{count : num}})
    },[dispatch , num])


    // ！！！！！
    //这里有个警告，就是我的依赖项要填充成这俩(num修改的时候这里会执行，将dispatch进行修改，从而引发Redux商品装车部分的action发生变化)

    useEffect(()=>{
        // console.log('我的值改变了')
        setState1(props.state.count)
    },[props.state.count])
      
    return (
        <div>
            <Counter state1 = {state1}/>
            {/* 计数器:<button type='button'>-</button>{state.count}这里这样来写，我拿到的state并没有传到这里面来<button onClick={incCount}>+</button> */}
            计数器:<button type='button' onClick={desCount}>-</button>{state1}<button onClick={incCount}>+</button>
        </div>
    )
}

export default connect((stateq)=>
    // console.log('stateq' , stateq)
    //商品装车部分{count:10}作为参数赋值给stateq
    ({state:stateq})

    //这这样的写法涉及到了es6里面的箭头函数部分，当只有一个返回值，并且是对象的时候，要加上一个()来告诉，我里面的这个{}是对象上的

    // return{
    //     state:{count:10}
    // }
    // 这里相当于是这样
    // 然后这个state:{count:10}会被传进这个子组件Index里面，放在props里面
)(Index)

// connect()(Index)高阶函数
// function connect(){
//     return function(Index){

//     }
// }