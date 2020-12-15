import { TabBar } from 'antd-mobile';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import React from 'react';

import './index.scss';

class Course extends React.Component<RouteComponentProps> {

    render() {
        return (
            <div className="course-page">
                <div>列表</div>
            </div>
        );
    }
}

export default withRouter(Course)