import Card from "@mui/material/Card";
import styles from "../../styles/Puth.module.css";
import BasicSelect from "./selectbankcomp";
import * as React from "react";
import { useCallback } from "react";
import { useState } from "react";

import {
  CardContent,
  Grid,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
export default function register() {

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    console.log(body);
    fetch("../api/upload", {
      method: "POST",
      body,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data, "EIEIEIEIEIEI");
      });
  };

  return (
    <Card style={{ maxWidth: 400, margin: "0 auto", padding: "20px 5px", backgroundColor: "#e1e1ff" }}>
      <CardContent>
        {/* <Typography gutterBottom variant="h4">
            Select Bank
          </Typography> */}
        <form action="" method="post" onSubmit={clickMe}>
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