import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

export default function grid({header, info}) {
  return (
        <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
        <Item>{header}</Item>
      </Grid>
      <Grid item xs={6} md={8}>
        <Item>{info}</Item>
      </Grid>
        </Grid>
  );
}
