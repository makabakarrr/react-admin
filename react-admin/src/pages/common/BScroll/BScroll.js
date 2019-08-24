import React, { Component } from 'react';
import BScroll from 'better-scroll'

class BetterScroll extends Component {
    warpper = React.createRef();
    render() {
        return (
            <div className='scroll-warp' ref={this.warpper} >
                <div className='scroll-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }

    componentDidMount() {
        //挂载

        this.scroll = new BScroll(this.warpper.current);
        //beforeScrollStart触发事件：滚动开始之前。
        this.scroll.on('beforeScrollStart', () => {
            //refresh() 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
            this.scroll.refresh();
        })
        console.log(this.scroll)
    }

}


export default BetterScroll;