export const setMode = (mode) => {
    return {
        type: "CHANGE_MODE",
        payload: mode
    }
}

const changeTheme = (theme) => {
  return (dispatch) => {
    dispatch(setMode(theme));
  }
}

export default changeTheme;