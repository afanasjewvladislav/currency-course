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
  const {сurrency, sum} = payload;
  const currencyInRubles = sum * сurrency;

  lists.lists.map(item => {
    const convertValue = currencyInRubles/item.Value;
    item.convertValue = convertValue;
    if (isNaN(currencyInRubles) || currencyInRubles === 0) {
      item.convertValue = item.Value
    }
    return item;
  });
  return lists;
}

export function CoursesList (state = initialState, payload) {
  switch (payload.type) {
    case 'GET_COURSES':
      return { ...state, lists: [...getData(payload)] };
    case 'GET_CURRENCY':
      return getCurrensy(payload.payload, state)
    default:
      return state
  }
}
