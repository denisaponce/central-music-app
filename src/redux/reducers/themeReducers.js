import actionsTypes from "../actions/actionsTypes";

export const darkModeReducer = (state = {darkMode: false}, action) => {
  switch (action.type) {  // 'OFF_DARK_MODE' o ON_DARK_MODE
    case actionsTypes.ON_DARK_MODE:
      return { darkMode: true }
    case actionsTypes.OFF_DARK_MODE:
      return { darkMode: false };
    default:
      return state;
  }
}

