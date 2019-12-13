
export const initialState = {
  lists: [
    // { id: 0, name: 'Test', value: 20 },
    // { id: 1, name: 'd', value: 20 },
  ],
};

export function CoursesList(state = initialState, payload) {
  switch (payload.type) {
    case 'GET_COURSES':
      console.log('action.payload', payload);
      // return { ...state, lists: [...action.payload] };
    default:
      return state;
  }
}
