import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set with default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'TESTING',
        note: 'test',
        amount: 12345678,
        createdAt: 12
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

test('should edit an expense', () => {
    const id = '4';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            id
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].id).toBe(id);
});

test('should not edit an expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            id: 4
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
