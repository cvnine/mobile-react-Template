import { TabBar } from 'antd-mobile';
import { Route, Router, Switch, Prompt } from 'react-router-dom';
import React from 'react';

import './index.scss';

export class My extends React.Component {

    render() {
        return (
            <div className="my-page">
                <h2>我的页面</h2>
            </div>
        );
    }
}