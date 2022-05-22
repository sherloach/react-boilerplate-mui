/* eslint-disable react/jsx-no-constructed-context-values */
import { useReducer, useContext, createContext, useMemo } from 'react';

const initialState = {
  modeTheme: process.env.REACT_APP_THEME,
  language: process.env.REACT_APP_LANGUAGE,
  setModeTheme: () => {},
  setLanguage: () => {},
};

const GlobalContext = createContext(initialState);

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_MODE_THEME': {
      return {
        ...state,
        modeTheme: payload,
      };
    }
    case 'SET_LANGUAGE': {
      return {
        ...state,
        language: payload,
      };
    }
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const _handleSetModeTheme = (mode) => {
    dispatch({
      type: 'SET_MODE_THEME',
      payload: mode,
    });
  };

  const _handleChangeLanguage = (language) => {
    dispatch({
      type: 'SET_LANGUAGE',
      payload: language,
    });
  };

  const memoObj = useMemo(
    () => ({ ...state, setModeTheme: _handleSetModeTheme, setLanguage: _handleChangeLanguage }),
    [state],
  );

  return <GlobalContext.Provider value={memoObj}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext, GlobalProvider, useGlobalContext };
