import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = props => {
    const expenses = props.expenses || [];
    const expenseWord = expenses.length === 1 ? "expense" : "expenses";
    const formattedExpensesTotal = numeral(
        selectExpensesTotal(expenses) / 100
    ).format("0,0[.]00$");
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenses.length}</span> {expenseWord} totalling{" "}
                    <span>{formattedExpensesTotal}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
