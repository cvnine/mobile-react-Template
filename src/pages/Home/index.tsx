import { WingBlank, List, Flex, InputItem, Button, Toast } from 'antd-mobile';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import axios from 'axios';
import React from 'react';

import './index.scss';

const Item = List.Item;

class Home extends React.Component<RouteComponentProps> {

    state = {
        value: '',
        list: []
    }

    onChange = (value: string) => {
        this.setState({ value });
    }

    query = () => {
        const { value } = this.state;
        if (value === '') {
            Toast.show('商品名称不能为空!', 1.5);
            return;
        }
        axios.get(`/sug?code=utf-8`, {
            params: {
                q: value
            }
        }).then((result: any) => {
            this.setState({ list: result.result });
        });
    }

    toDetail = () => {
        this.props.history.push('./detail')
    }

    render() {
        const { value, list } = this.state;
        return (
            <WingBlank>
                <Flex align='center' justify='center' wrap='wrap'>
                    <List renderHeader={() => '输入商品'} style={{ width: '100%' }}>
                        <InputItem
                            type="text"
                            placeholder="请输入商品名称"
                            onChange={this.onChange}
                            value={value}
                        >商品名称</InputItem>
                    </List>
                    <Button type="primary" onClick={this.toDetail} className='btn'>进入明细</Button>
                    <Button type="primary" onClick={this.query} className='btn'>查询</Button>
                </Flex>
                <List renderHeader={() => '搜索结果'} >
                    <div className="my-list">
                        {list.map((item, index) => (
                            <Item key={index}>{item[0]}</Item>
                        ))}
                    </div>
                </List>
            </WingBlank>
        );
    }
}

export default withRouter(Home);