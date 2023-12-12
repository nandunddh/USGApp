import { createContext, useContext, useState } from "react";
import { notificationDes } from '../Components/Data/data'

export const Message_data = createContext(null);
export const isLogin = false;
export const isAdmin = true;


function Context({ children }) {
  const [isNotification, setIsNotification] = useState(false)
  const [storedCredentials, setStoredCredentials] = useState(null)
  // const [notificationDesc, setNotificationDesc] = useState(notificationDes)
  const [time, setTime] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [isAdmin, setIsAdmin] = useState(true)



  return (
    <Message_data.Provider value={{ time, setTime, isNotification, setIsNotification, isAdmin, setIsAdmin, storedCredentials, setStoredCredentials, isLogin, setIsLogin }}>
      {children}
    </Message_data.Provider>
  );
}

export default Context;