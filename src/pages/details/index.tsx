import { NavBar } from 'antd-mobile';
import { RouteComponentProps } from 'react-router-dom';
import React from 'react';

import './index.scss';

export class Details extends React.Component<RouteComponentProps> {

    render() {
        return (
            <div className="course-page">
                <NavBar
                    onClick={() => this.props.history.goBack()}
                    mode="dark"
                    leftContent="返回">明细页面</NavBar>
                <h1>这是明细的明细页面</h1>
            </div>
        );
    }
}