export const initialState = {
  lists: [],
}

const getData = payload => {
  // console.log('action.payload', payload.payload)
  const value = payload.payload
  let arr = []
  for (const key in value) {
    if(key === 'Valute') {
      arr = Object.values(value[key]).map(el => el);
    }
  }
  return arr;
}

export function CoursesList (state = initialState, payload) {
  switch (payload.type) {
    case 'GET_COURSES':
      const array = getData(payload)
      return { ...state, lists: [...array] };
    default:
      return state
  }
}
