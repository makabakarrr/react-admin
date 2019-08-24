import React, { Component } from "react";
import { Table, Tag, Button, Input } from 'antd'
import 'antd/dist/antd.css'
import './style.scss'
/* 项目的导航 */


class Category extends Component {
    state = {
        code: true
    }
    render() {
        return (

            <div id="category">
                <div className='page-header'>
                    <div className='header-title'>
                        <h1>商品管理</h1>
                    </div>
                </div>
                <Button type="primary" icon="plus">
                    添加商品
                </Button>
                <div className='search-wrap'>
                    <div className='form-inline'>
                        <div className='form-group'>
                            <select className='form-control'>
                                <option className='productId'>按商品id查询</option>
                                <option className='productName'>按商品名称查询</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <Search
                                placeholder="关键字"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                        </div>
                    </div>
                </div>
                <div className='from-table'>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>

        )
    }
    handleClick() {
        this.$router.push('/')
    }
    ChangeClick() {
        this.setState({
            code: this.state.code(true)
        })
    }
}
const { Search } = Input;

const columns = [
    { title: 'ID', dataIndex: 'key' },
    { title: '信息', dataIndex: 'name' },
    { title: '价格', dataIndex: 'price' },
    {
        title: '状态',
        dataIndex: 'address',
        render: (code) => {
            let Tagtop = <span >
                在售&nbsp;&nbsp;
                <span>
                    <Tag color='#f0ad4e'>上架</Tag>
                </span>
            </span>
            let Togbottom = <span>
                已下架&nbsp;&nbsp;
                <span><Tag color='#f0ad4e'>下架</Tag></span>
            </span>
            return code === true ? Tagtop : Togbottom
        }

    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: () =>
            <div>
                <li><a href='/save/${id}'>查看</a></li>
                &nbsp;&nbsp;
                <li><a href='/save/${id}'>操作</a></li>
            </div>


    },
]
const data = [];
for (let i = 1; i < 46; i++) {
    data.push({
        code: 1,
        key: i,
        name: "窝窝头 一块钱四个 嘿嘿",
        price: 23 * i,
        address: '在售',
        operation: "查看  编辑"
    });
}
export default Category;




