import { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const access_token = localStorage.getItem("access_token") || false;
  const [loginLogout, setLoginLogout] = useState(access_token);
  const [toggleLink, setToggleLink] = useState(false);
  const [toggleLinkWeb, setToggleLinkWeb] = useState(false);
  return (
    <MyContext.Provider
      value={{
        loginLogout,
        setLoginLogout,
        toggleLinkWeb,
        setToggleLinkWeb,
        toggleLink,
        setToggleLink,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { useMyContext, MyContextProvider };
