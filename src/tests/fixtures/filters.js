import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    sortOrder: 'desc'
};

const altFilters = {
    text: 'bill',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days'),
    sortOrder: 'asc'
};

export {filters, altFilters};