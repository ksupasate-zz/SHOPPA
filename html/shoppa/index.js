import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import GRID from "../component/grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={6}>
          <Item>
            <GRID header="Company Name" info="SHOPPA Co.Ltd."/>
            <GRID header="Address" info="126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand"/>
            <GRID header="BILL ID" info="BL1234567"/>
            <GRID header="Date issued" info="24 Oct, 2021"/>
            <GRID header="Date due" info="12 Nov, 2021"/>
            <GRID header="Category" info="Shoes"/>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
                <Item>Issued to</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>CUSTOMER Name</Item>
              </Grid>
              <Grid item xs={6} md={8}>
                <Item>Juhi Chitravanshi</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>Phone</Item>
              </Grid>
              <Grid item xs={6} md={8}>
                <Item>0123456789012</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>Customer ID</Item>
              </Grid>
              <Grid item xs={6} md={8}>
                <Item>M1234567</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>Bank</Item>
              </Grid>
              <Grid item xs={6} md={8}>
                <Item>Kasikorn Bank</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>BILL ID</Item>
              </Grid>
              <Grid item xs={6} md={8}>
                <Item>BL1234567</Item>
              </Grid>
              <Grid item xs={6} md={4}>
                <Item>Address</Item>
              </Grid>
              <Grid item xs={6} md={8}>
                <Item>
                  A123, First Floor, Neighboury McNeighbourhood, City—123456,
                  State (India)
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
