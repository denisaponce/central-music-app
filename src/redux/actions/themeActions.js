import actionsTypes from "./actionsTypes"

export const setOnDarkMode = () => {
  return (dispatch) => {
  // Para comunicarse con reducer usa dispatch
    dispatch({ type: actionsTypes.ON_DARK_MODE });
  };
};

export const setOffDarkMode = () => {
  return (dispatch) => {
    dispatch({ type: actionsTypes.OFF_DARK_MODE });
  };
};