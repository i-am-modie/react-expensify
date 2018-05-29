import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should return value of 1 expense if only one expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('should return sum all of expenses if multiple', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(expenses.map(expense => expense.amount).reduce((amount, value) => amount + value));
});