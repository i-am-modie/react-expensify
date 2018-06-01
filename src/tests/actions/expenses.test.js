import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
    removeExpense,
    addExpense,
    startAddExpense,
    editExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import db from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt};
    });
    db.ref("expenses")
        .set(expensesData)
        .then(() => done());
});

test("should setup remove expense action object", () => {
    const action = removeExpense({id: "123abc"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should setup edit expense action object", () => {
    const action = editExpense("321xd", {note: "test"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "321xd",
        updates: {
            note: "test"
        }
    });
});

test("should setup add expense action object with provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test("should add expense to database and store", done => {
    const store = createMockStore({});
    const expenseData = {
        description: "test",
        amount: 100,
        note: "This is test expense",
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        db.ref(`expenses/${actions[0].expense.id}`)
            .once("value")
            .then(snapshot => {
                expect(snapshot.val()).toEqual(expenseData);
                done();
            });
    });
});

test("should add expense with defaults to database and store", done => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        db.ref(`expenses/${actions[0].expense.id}`)
            .once("value")
            .then(snapshot => {
                expect(snapshot.val()).toEqual({
                    ...expenseDefaults
                });
                done();
            });
    });
});

test("should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});

test("should fetch the expenses from firebase database", done => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();
    });
});

test("should not remove expense from firebase", () => {
    expect(() => {
        startRemoveExpense({id: ' '});
    }).toThrowError("no id");
});

test("should remove expense from firebase", done => {
    const store = createMockStore(expenses);
    const id = expenses[0].id;
    store
        .dispatch(startRemoveExpense({id}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "REMOVE_EXPENSE",
                id
            });
            return db.ref(`expenses/${id}`).once("value");
        })
        .then(snapshot => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
});

test("should edit expense from firebase", done => {
    const store = createMockStore(expenses);
    const id = expenses[1].id;
    const updates = {
        description: "edit test",
        amount: expenses[1].amount + 10
    };
    store.dispatch(startEditExpense(id, updates))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: "EDIT_EXPENSE",
                id,
                updates
            });
            return db.ref(`expenses/${id}`).once("value");
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual({
                note: expenses[1].note,
                createdAt: expenses[1].createdAt,
                ...updates,
            });
            done();
        });
});
