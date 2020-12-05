import React from 'react';
import './App.scss';
import { Route, Router } from 'react-router-dom';
import { History } from 'history';
import { Tabs, Course, My } from './pages';
export interface IAppProps {
    history: History;
}
const App: React.SFC<IAppProps> = ({ history }) => (
    <Router history={history}>
        <Route path="/" exact component={Tabs} />
        <Route path="/course" component={Course} />
        <Route path="/my" component={My} />
    </Router>
);

export default App;
