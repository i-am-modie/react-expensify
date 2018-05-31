import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';
import React from 'react';
import {shallow} from 'enzyme';


test('should correctly render ExpensesSummary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});
test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});