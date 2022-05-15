import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/material';

export default function SelectVariants() {
    const [month, setMonth] = React.useState('');

    const handleChange = (event) => {
        setMonth(event.target.value);
    };

    return (
        <Stack>
            <FormControl variant="standard" sx={{ minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-standard-label">Month</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={month}
                    onChange={handleChange}
                    label="Month"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>January </MenuItem>
                    <MenuItem value={2}>February </MenuItem>
                    <MenuItem value={3}>March </MenuItem>
                    <MenuItem value={4}>April </MenuItem>
                    <MenuItem value={5}>May</MenuItem>
                    <MenuItem value={6}>June</MenuItem>
                    <MenuItem value={7}>July </MenuItem>
                    <MenuItem value={8}>August </MenuItem>
                    <MenuItem value={9}>September</MenuItem>
                    <MenuItem value={10}>October </MenuItem>
                    <MenuItem value={11}>November </MenuItem>
                    <MenuItem value={12}>December</MenuItem>
                </Select>
            </FormControl>

        </Stack>
    );
}