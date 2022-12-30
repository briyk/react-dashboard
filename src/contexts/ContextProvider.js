import { createContext, useContext, useState } from "react";

//define our context
const StateContext = createContext();

//define our inital states
const initialState = {
  //top navbar icons toggle menu
  chat: false,
  cart: false,
  user: false,
  notification: false,
};

//create our Provider
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  //change colors
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);

  //create handle Click function
  const handleClick = (whatClicked) => {
    setisClicked({ ...initialState, [whatClicked]: true });
  };

  //create handleClick for theme and mode
  const setMode = (mode) =>{
      setCurrentMode(mode.target.value) ;

      localStorage.getItem('themeMode', mode.target.value)
      // setThemeSettings(false)
  }
  const setColor = (color) =>{
      setCurrentColor(color) ;

      localStorage.getItem('colorMode', color)
      // setThemeSettings(false)
  }


  return (
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setisClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
