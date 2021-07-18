import React from 'react'

const Counter = ({state1}) => {
    // 这里我没有用视频上讲的继续引入import {connect} from 'react-redux',然后导出写成父组件那种高阶函数的形式，这里我是直接通过父组件向子组件传一个props，然后props改变，也会使得组件重新渲染
    return (
        <div>
            子组件计数器:{state1}
        </div>
    )
}

export default Counter
