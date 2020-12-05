
import React from 'react';
import { TabBar } from 'antd-mobile';
import { Home, Course, My } from '../index';
import './index.scss';

export class Tabs extends React.Component {

    state = {
        selectedTab: 'Home',
    };

    click = () => {
        /** @ts-ignore */
        this.props.history.push("/Add");
    }

    setTab = (key: string) => {
        this.setState({ selectedTab: key })
    }

    render() {
        return (
            <div className="index-page">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="Home"
                        icon={<div className='icon home-icon' />}
                        selectedIcon={<div className='icon home-icon-select' />}
                        selected={this.state.selectedTab === 'Home'}
                        onPress={() => this.setTab('Home')}
                    >
                        <Home />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div className='icon course-icon' />}
                        selectedIcon={<div className='icon course-icon-select' />}
                        title="课表"
                        key="course"
                        selected={this.state.selectedTab === 'Course'}
                        onPress={() => this.setTab('Course')}
                    >
                        <Course />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div className='icon my-icon' />}
                        selectedIcon={<div className='icon my-icon-select' />}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'My'}
                        onPress={() => this.setTab('My')} >
                        <My />
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
