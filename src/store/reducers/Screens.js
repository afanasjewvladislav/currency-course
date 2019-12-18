import CurrencyConverter from '../../components/CurrencyConverter';
import App from '../../../App'

export const initialState = {
  screens: {
    CurrentCourses: {
      screen: App,
    },
    CurrencyConverter: {
      screen: CurrencyConverter,
    },
  },
  navigations: {},
}

export function Screens (state = initialState, payload) {
  switch (payload.type) {
    case 'SET_NAVIGATIONS':
      state.navigations = payload.payload;
      return state;
    default:
      return state
  }
}
