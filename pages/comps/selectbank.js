import Card from "@mui/material/Card";
import styles from "../../styles/Puth.module.css";
import BasicSelect from "./selectbankcomp";
import * as React from "react";

import {
  CardContent,
  Grid,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
export default function Selectbank() {

  

  return (
    <Card>
      <CardContent>
        {/* <Typography gutterBottom variant="h4">
            Select Bank
          </Typography> */}
       
          <Grid xs={12} item>
            <BasicSelect></BasicSelect>
          </Grid>
          {/* <Grid xs={12} item>
                <ThemeProvider theme={theme}>
                  <Button
                    onClick={uploadToServer}
                    type="submit"
                    variant="contained"
                    color="neutral"
                    fullWidth
                  >
                    Submit
                  </Button>
                  </ThemeProvider>
            </Grid> */}
        </form>


      </CardContent>
    </Card>
  );
}

const theme = createTheme({
  palette: {
    neutral: {
      main: "#673ab7",
      contrastText: "#fff",
    },
  },
});
