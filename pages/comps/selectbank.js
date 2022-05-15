import Card from "@mui/material/Card";
import BasicSelect from "./selectbankcomp";
import * as React from "react";

import {
  Grid,
  createTheme,
} from "@mui/material";
export default function Selectbank() {

  return (
    <Card>
        <form action="" method="post">
          <Grid xs={12} item>
            <BasicSelect></BasicSelect>
          </Grid>
        </form>
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
