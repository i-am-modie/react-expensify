import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
    const state = filtersReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        sortOrder: "desc",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, {
        type: "SORT_BY",
        sortBy: "amount"
    });
    expect(state.sortBy).toBe("amount");
});

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, {
        type: "SORT_ORDER",
        sortOrder: "asc"
    });
    expect(state.sortOrder).toBe("asc");
});

test("should set text filter", () => {
    const text = 'testing';
    const state = filtersReducer(undefined, {
        type: "SET_TEXT_FILTER",
        text
    });
    expect(state.text).toBe(text);
});

test("should set startDate filter", () => {
    const startDate = moment(5240);
    const state = filtersReducer(undefined, {
        type: "SET_START_DATE",
        startDate
    });
    expect(state.startDate).toEqual(startDate);
});

test("should set endDate filter", () => {
    const endDate = moment(4390);
    const state = filtersReducer(undefined, {
        type: "SET_END_DATE",
        endDate
    });
    expect(state.endDate).toEqual(endDate);
});
