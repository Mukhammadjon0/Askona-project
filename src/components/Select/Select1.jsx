import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { StateContext } from '../../context';

export default function Select1() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { lang } = React.useContext(StateContext)

  return (
    <Box sx={{ width: '100%', }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{lang === 'ry' ? 'Город' : 'Hudud'}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="minsk"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={0}>{lang === 'ru' ? 'Ташкент' : 'Tashkent'}</MenuItem>
          <MenuItem value={1}>{lang === 'ru' ? 'Во все область' : 'Barcha viloyatlarga'}</MenuItem>
          <MenuItem value={2}>{lang === 'ru' ? 'СНГ' : 'MDH'}</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );

}