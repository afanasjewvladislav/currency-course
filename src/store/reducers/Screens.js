import CurrencyConverter from '../../components/CurrencyConverter';
import CurrentCourses from '../../containers/CurrentCourses';
import App from '../../App'

export const initialState = {
  screens: {
    CurrentCourses: {
      screen: CurrentCourses,
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
