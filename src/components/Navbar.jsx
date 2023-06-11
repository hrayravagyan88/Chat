
import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "./utils/const";
import { useContext } from "react";
import { Context } from "../main";
import { useAuthState } from 'react-firebase-hooks/auth';


const Navbar = () => {
  const {auth,signOut}= useContext(Context);
  const [user] = useAuthState(auth); 

  return (
    <AppBar color={"inherit"} position="static">
      <Toolbar variant="dense">
        <Grid container style={{ justifyContent: "flex-end" }}>
          {user ? (
            <Button onClick = {()=>signOut(auth)}variant={"outlined"}>log out</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
