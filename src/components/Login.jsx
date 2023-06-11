import { Container, Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import {} from "@mui/base";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/firestore";

const Login = () => {
  const auth = getAuth();

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
    } catch (e) {
      console.log("Error :>> ", e.code, e.message);
    }
  };

  return (
    <Container>
      <Grid
        container
        style={{
          height: window.innerHeight - 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          style={{
            justifyContent: "center",
            width: "400px",
            background: "lightgray",
            alignItems: "center",
          }}
        >
          <Box p={5}>
            <Button variant="outlined" onClick={googleSignIn}>
              Login with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
