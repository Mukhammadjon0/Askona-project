import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Select1() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">город</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="minsk"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Tashkent</MenuItem>
          <MenuItem value={20}>Moscow</MenuItem>
          <MenuItem value={30}>USA</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );

}