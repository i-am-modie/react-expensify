import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortAsc, setEndDate, setStartDate, sortByAmount, sortByDate, sortDesc} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(addExpense({
    description: "Water Bill",
    amount: 500,
}));
store.dispatch(addExpense({
    description: "Gas Bill",
    amount: 500,
}));
store.dispatch(setTextFilter("bill"));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
store.dispatch(setTextFilter("water"));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));


ReactDOM.render(<AppRouter/>, document.getElementById("app"));