export const initialState = {
  lists: [],
};

export function TodoList(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      console.log('action.payload', action.payload);
    default:
      return state;
  }
}
