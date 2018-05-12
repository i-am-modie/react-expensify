export default (expenses, { text, sortBy, sortOrder, startDate, endDate }) => {
    let order = sortOrder === 'desc' ? 1 : -1;
    return expenses
        .filter(expense => {
            const startDateMatch =
                typeof startDate !== "number" || expense.createdAt >= startDate;
            const endDateMatch =
                typeof endDate !== "number" || expense.createdAt <= endDate;
            const textMatch = expense.description.match(new RegExp(text, "i"));
            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            if (sortBy === "date") {
                return a.createdAt < b.createdAt ? order : -order;
            }
            if (sortBy === 'amount') {
                return a.amount < b.amount ? order : -order;
            }
        });
};