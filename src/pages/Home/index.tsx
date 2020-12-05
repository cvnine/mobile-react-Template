import { TabBar } from 'antd-mobile';
import { observer } from 'mobx-react';
import axios from 'axios';
import React from 'react';

export class Home extends React.Component {

    async componentDidMount() {
        await axios.get('/api/v1/healthCheck');
    }

    render() {
        return (
            <h1>主页</h1>
        );
    }
}