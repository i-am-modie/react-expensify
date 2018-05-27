import React from "react";
import { connect } from "react-redux";
import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortAsc,
    sortByAmount,
    sortByDate,
    sortDesc
} from "../actions/filters";
import {DateRangePicker} from "react-dates";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = calendarFocused => {
        this.setState(() => ({calendarFocused}));
    };
    onTextChange = e => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = e => {
        if (e.target.value === "amount") {
            this.props.sortByAmount();
        } else if (e.target.value === "date") {
            this.props.sortByDate();
        }
    };
    onOrderChange = e => {
        if (e.target.value === "asc") {
            this.props.sortAsc();
        } else if (e.target.value === "desc") {
            this.props.sortDesc();
        }
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />

                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <select
                    value={this.props.filters.sortOrder}
                    onChange={this.onOrderChange}
                >
                    <option value="asc">^</option>
                    <option value="desc">v</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="start"
                    endDate={this.props.filters.endDate}
                    endDateId="end"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filters: state.filters
});

const mapDispatchtoProps = dispatch => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortAsc: () => dispatch(sortAsc()),
    sortDesc: () => dispatch(sortDesc()),

});
export default connect(mapStateToProps, mapDispatchtoProps)(ExpenseListFilters);
