import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from "numeral";

export const ExpensesSummary = (props) => {
    const expenses = props.expenses || [];
    const expenseWord = expenses.length === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(selectExpensesTotal(expenses) / 100).format('0,0[.]00$');
    return (
        <div>
            <h3>Viewing {expenses.length} {expenseWord} totalling {formattedExpensesTotal}</h3>
        </div>
    )
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);