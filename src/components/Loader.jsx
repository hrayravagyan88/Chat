
import { Container, Grid} from "@mui/material";
import './Loader.css'
const Loader = () => {
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
            <div className="lds-hourglass"></div>
          </Grid>
        </Grid>
      </Container>
    );
};

export default Loader;