import React, { Component } from "react";
import { Form, Input, Button, Menu, Icon, message, Dropdown, InputNumber } from 'antd';
import 'antd/dist/antd.css'
import Chirlden from './chirdlen/chirlden'
import './style.scss'
class Detail extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        checkNick: false,
    }

    render() {
        return (
            <div className='page'>
                <div>
                    <h1>商品管理 -- 修改商品</h1>
                </div>
                <div className='row'>
                    <Form.Item label='商品名称'><Input />
                    </Form.Item>
                    <Form.Item label='商品详情'>
                        <Input placeholder="Please input your nickname" />
                    </Form.Item>
                    <Form.Item label='当前状态'>
                        <Dropdown overlay={menu}>
                            <Button>
                                在售 <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </Form.Item>
                    <Form.Item label='所属分类'>
                        <Dropdown overlay={menu}>
                            <Button>
                                家用电器 <Icon type="caret-down" />
                            </Button>
                        </Dropdown>
                        <Dropdown overlay={menu}>
                            <Button>
                                二级产品 <Icon type="caret-down" />
                            </Button>
                        </Dropdown>
                    </Form.Item>
                    <Form.Item label='商品价格'>
                        <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
                    </Form.Item>
                    <Form.Item label='商品库存'>
                        <InputNumber min={1} max={10000} defaultValue={3} onChange={onChange} />
                    </Form.Item>
                    <Form.Item label='商品图片'>
                        <Button>上传图片</Button>
                    </Form.Item>
                    <Form.Item label='产品介绍'> <Chirlden />
                    </Form.Item>
                    <Form.Item {...this.state} >
                        <Button type="primary" onClick={this.check}>
                            提交
                    </Button>
                    </Form.Item>
                </div>
            </div>
        )
    }
    check = () => {
        console.log('触发了')
        
    };

}

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}
function onChange(value) {
    console.log('changed', value);
}
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            在售
      </Menu.Item>
        <Menu.Item key="2">
            售空
      </Menu.Item>
    </Menu>
);
export default Detail

