import React from "react";
import {shallow} from "enzyme";
import {ExpenseListFilters} from "../../components/ExpenseListFilters";
import {filters, altFilters} from "../fixtures/filters";
import moment from "moment/moment";

let setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
    sortAsc,
    sortDesc,
    wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortAsc = jest.fn();
    sortDesc = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortAsc={sortAsc}
            sortDesc={sortDesc}
        />
    );
});

test("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
    wrapper.setProps({filters: altFilters});
    expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
    const value = "test";
    wrapper.find("input").simulate("change", {target: {value}});
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
    const value = "date";
    wrapper
        .find("select")
        .at(0)
        .simulate("change", {target: {value}});
    expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
    const value = "amount";
    wrapper
        .find("select")
        .at(0)
        .simulate("change", {target: {value}});
    expect(sortByAmount).toHaveBeenCalled();
});

test("should sort order asc", () => {
    const value = "asc";
    wrapper
        .find("select")
        .at(1)
        .simulate("change", {target: {value}});
    expect(sortAsc).toHaveBeenCalled();
});

test("should sort order desc", () => {
    const value = "desc";
    wrapper
        .find("select")
        .at(1)
        .simulate("change", {target: {value}});
    expect(sortDesc).toHaveBeenCalled();
});

test('should handle date change', () => {
    const startDate = moment();
    const endDate = startDate.add(3, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
    const focused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
    expect(wrapper.state().calendarFocused).toBe(focused);
});

