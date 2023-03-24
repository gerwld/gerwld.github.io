
const SET_INIT = "@gerwld/app-reducer/SET_INIT";
export const setInit = (isInit) => ({type: SET_INIT, isInit});

let initialState = {
  isInit: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {...state,
      isInit: action.isInit
      }
    default:
      return state;
  }
}