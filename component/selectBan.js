import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelectProduct({banid}) {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

const [log, setlog] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/Log')
      .then((res) => res.json())
      .then((result) => {
        setlog(result)
      })
  }, [])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          {log.map((row, i) => (
                  <MenuItem value ={i}>{row.LogCase_Detail}</MenuItem>
                  ))} 
        </Select>
      </FormControl>
    </Box>
  );
}