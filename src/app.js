import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = ()=>(
    <p>test</p>
);
const AddExpensePage = ()=>(
    <p>add</p>
);
const EditExpensePage = ()=>(
    <p>edit</p>
);
const HelpPage = ()=>(
    <p>help</p>
);
const NotFoundPage = ()=>(
  <div>404!</div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));