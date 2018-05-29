import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import React from 'react';
import {shallow} from 'enzyme';


test('should correctly render ExpensesSummary for no expense', () => {
    const wrapper = shallow(<ExpensesSummary/>);
    expect(wrapper).toMatchSnapshot();
});
test('should correctly render ExpensesSummary for one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});
test('should correctly render ExpensesSummary for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});