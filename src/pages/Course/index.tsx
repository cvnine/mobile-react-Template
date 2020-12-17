import { RouteComponentProps, withRouter } from 'react-router-dom';
import React from 'react';

import './index.scss';

class Course extends React.Component<RouteComponentProps> {

    render() {
        return (
            <div className="course-page">
                <div className='common'>这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字</div>
                <div className='course-page-color'>这是测试样式继承但是颜色不一样的很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字</div>
            </div>
        );
    }
}

export default withRouter(Course)