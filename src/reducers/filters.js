const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
    sortOrder: 'desc'
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY":
            return {
                ...state,
                sortBy: action.sortBy
            };
        case "SORT_ORDER":
            return {
                ...state,
                sortOrder: action.sortOrder
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};
