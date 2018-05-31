import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
    removeExpense,
    addExpense,
    startAddExpense,
    editExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import db from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

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

// test('should setup add expense action object with default values', ()=> {
//     const expenseData = {
//         description: "",
//         note: "",
//         amount: 0,
//         createdAt: 0
//     };
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     })
// });