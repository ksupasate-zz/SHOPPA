import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';

export default function SelectVariants() {
    const [year, setYear] = React.useState('');

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <Stack>
            <FormControl variant="standard" sx={{  minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={year}
                    onChange={handleChange}
                    label="Year"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                </Select>
            </FormControl>

        </Stack>
    );
}