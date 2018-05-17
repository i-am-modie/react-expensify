import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses'


test('should filter by text value', ()=>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        sortOrder: 'desc'
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]])
});
test('should filter by StartDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).add(2,'days'),
        endDate: undefined,
        sortOrder: 'desc'
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2]]);
});
test('should filter by EndDate', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0),
        sortOrder: 'desc',
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0],expenses[1]]);
});

test('should filter desc by Amount', ()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        sortOrder: 'desc',
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]]);
});
test('should filter asc by Amount', ()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        sortOrder: 'asc',
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0],expenses[2],expenses[1]]);
});
test('should filter asc by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        sortOrder: 'asc',
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1],expenses[0],expenses[2]]);
});
test('should filter desc by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        sortOrder: 'desc',
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]]);
});