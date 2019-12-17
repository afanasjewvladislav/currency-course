export const initialState = {
  lists: [],
}

const getData = payload => {
  const value = payload.payload
  let arr = []
  for (const key in value) {
    if(key === 'Valute') {
      arr = Object.values(value[key]).map(el => el);
    }
  }
  return arr;
}

const getCurrensy = (payload, lists) => {
  // console.log('>>', payload, lists)
  const {сurrency, sum} = payload;
  const currencyInRubles = sum * сurrency;

  console.log('>>', сurrency, sum)
}

export function CoursesList (state = initialState, payload) {
  switch (payload.type) {
    case 'GET_COURSES':
      const array = getData(payload)
      return { ...state, lists: [...array] };
    case 'GET_CURRENCY':
      // console.log('payload', payload);
      const arr = getCurrensy(payload.payload, state)
    // const array = getData(payload
    // return { ...state, lists: [...array] };
    default:
      return state
  }
}
