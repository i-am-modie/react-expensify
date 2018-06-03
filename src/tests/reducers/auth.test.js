import authReducer from '../../reducers/auth';

let uid;

beforeEach(() => {
    uid = 32213125125125125251;
});

test('should set uid', () => {
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({uid});
});

test('should clear uid', () => {
    const state = authReducer({uid}, {type: 'LOGOUT'});
    expect(state).toEqual({});
});