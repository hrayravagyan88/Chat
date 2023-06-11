import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { ChAT_ROUTE, LOGIN_ROUTE } from "./utils/const";
import { Context } from "../main";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from "react";


const AppRouter = () => {
  const {auth}= useContext(Context);
  const [user] = useAuthState(auth); 
  return (
    <Routes>
      {user && (
        <>
          {privateRoutes.map(({ path, Component }) => (
            <Route key ={path} path={path} element={<Component />} exact={true} />
          ))}
          <Route path="*" element={<Navigate to={ChAT_ROUTE} />} />
        </>
      )}
      {!user && (
        <>
          {publicRoutes.map(({ path, Component }) => (
            <Route key ={path} path={path} element={<Component />} exact={true} />
          ))}
          <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
