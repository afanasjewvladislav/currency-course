
export const initialState = {
  lists: [
    { id: 0, name: 'Test', value: 20 },
    { id: 1, name: 'd', value: 20 },
  ],
};

export function TodoList(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      console.log('action.payload', action.payload);
      return { ...state, lists: [...action.payload] };
    default:
      return state;
  }
}
