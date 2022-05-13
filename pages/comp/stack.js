import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import RecipeReviewCard from "./card";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function DirectionStack() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Item> <RecipeReviewCard></RecipeReviewCard> </Item>
        <Item><RecipeReviewCard></RecipeReviewCard></Item>
        <Item><RecipeReviewCard></RecipeReviewCard></Item>
      </Stack>
    </div>
  );
}