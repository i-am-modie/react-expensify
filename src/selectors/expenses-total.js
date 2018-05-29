export default expenses => expenses.map(expense => expense.amount).reduce((amount, value) => amount + value, 0);
