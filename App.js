import React,{useState,useMemo, useEffect} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import TabNavigation from './src/navigation/TabNavigation';
import Login from './src/screens/Login';
import AuthContext from './src/context/AuthContext';
import {getTokenApi, removeTokenApi, setTokenApi} from './src/api/token'
import jwtDecode from 'jwt-decode';

export default function App() {
  const [auth, setAuth] = useState(undefined)
  useEffect(() => {

    const getToken = async ()=>{
      const token = await getTokenApi()
      console.log('este es el token '+token)
      if(token){
        setAuth({
          token,
          idUser:jwtDecode(token)
        })
      }else{
        setAuth(null)
      }

      if(token){
        console.log("estoy logeado")
      }
    }
    getToken()
   
  }, [])
  const login =(user)=>{
    console.log("LOGIN DESDE APP.js ",user);
    setTokenApi(user.jwt)
    setAuth({
      token:user.jwt,
      idUser:user.id
    })
  }

  const logout =()=>{
    if(auth){
      setAuth(null)
      removeTokenApi()
    }
  }
  const authData =  useMemo(
    ()=>({
      auth,
      login,
      logout,
    }),
    [auth]
  )
  if (auth === undefined) return null

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
        {!auth?<Login/>:<TabNavigation/>}
      </PaperProvider>
    </AuthContext.Provider>
  )
}

