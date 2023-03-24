const SET_THEME = "@@gerwld/apr_reducer/SET_THEME";
export const onSetTheme = (themeID) => ({ type: SET_THEME, payload: themeID });

let initialState = {
 currentTheme: null,
 currentLang: null,
};

export default function aprReducer(state = initialState, action) {
 switch (action.type) {
  case SET_THEME:
   return {
    ...state,
    currentTheme: action.payload,
   };
  default:
   return state;
 }
}
