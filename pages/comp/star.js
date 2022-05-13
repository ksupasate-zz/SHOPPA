import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      {/* <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={1} readOnly /> */}
      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}

<FormControl fullWidth required>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Rating"
          onChange={handleChange}
        >
          
                  <MenuItem value = {1}> <Rating name="read-only" value={1} readOnly /> </MenuItem>
                  <MenuItem value = {2}> <Rating name="read-only" value={2} readOnly /> </MenuItem>
                  <MenuItem value = {3}> <Rating name="read-only" value={3} readOnly /> </MenuItem>
                  <MenuItem value = {4}> <Rating name="read-only" value={4} readOnly /> </MenuItem>
                  <MenuItem value = {5}> <Rating name="read-only" value={5} readOnly /> </MenuItem>


                 
        </Select>
      </FormControl>

    </Box>

    

    
  );
}
