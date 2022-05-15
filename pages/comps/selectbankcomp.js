import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SettingsBackupRestoreTwoTone } from '@mui/icons-material';

export default function BasicSelectProduct() {
  const [bank, setBank] = React.useState('');

  const handleChange = (event) => {
    setBank(event.target.value);
  };

  const [log, setlog] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/api_bank')
      .then((res) => res.json())
      .then((result) => {
        setlog(result)
        console.log(result)
      })
  }, [])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth required>
        <InputLabel id="demo-simple-select-label">Bank</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bank}
          label="Bank"
          onChange={handleChange}
        >
          {log.map((row, i) => (
                  <MenuItem value ={row.BranchBank_ID}>{row.BranchBank_Name}</MenuItem>

                  ))} 
        </Select>
      </FormControl>
    </Box>
  );
}
