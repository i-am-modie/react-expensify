import moment from "moment";
import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortAsc,
    sortByAmount,
    sortByDate,
    sortDesc
} from "../../actions/filters";

test("should setup setStartDate action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});
test("should setup setEndDate action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});

test("should setup setTextFilter action object with provided values", () => {
    const word = "test";
    const action = setTextFilter(word);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: word
    });
});

test("should setup setTextFilter action object with default values", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

test("should setup sortBy action object with amount value", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY",
        sortBy: "amount"
    });
});

test("should setup sortBy action object with date value", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY",
        sortBy: "date"
    });
});

test("should setup sortOrder action object with asc value", () => {
    const action = sortAsc();
    expect(action).toEqual({
        type: "SORT_ORDER",
        sortOrder: "asc"
    });
});

test("should setup sortOrder action object with asc value", () => {
    const action = sortDesc();
    expect(action).toEqual({
        type: "SORT_ORDER",
        sortOrder: "desc"
    });
});
