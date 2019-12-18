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
  }
}

export function Screens (state = initialState, payload) {
  switch (payload.type) {
    default:
      return state
  }
}
