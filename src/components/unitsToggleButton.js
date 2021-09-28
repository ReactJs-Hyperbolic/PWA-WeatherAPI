import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

import { useSelector, useDispatch } from 'react-redux';
import { toggleUnits } from '../state/slices/unitSlice';
import { fetchWeather } from '../api/fetchWeather';
import { Button } from '@mui/material';

export default function StandaloneToggleButton() {
  const query = useSelector(state => state.query.query);
  const [selected, setSelected] = React.useState(false);
  const isFarenheit = useSelector(state => state.units.isImperial);
  const dispatch = useDispatch();

  return (
    <ToggleButton
      value='check'
      selected={selected}
      onChange={() => {
        setSelected(!selected);
        dispatch(toggleUnits());
        fetchWeather(query, isFarenheit);
        console.log(isFarenheit);
        console.log(query);
      }}
    >
      <Button style={{ color: 'white' }}>
        {isFarenheit ? <span>&deg;C</span> : <span>&deg;F</span>}
      </Button>
      {/* <CheckIcon style={{ color: 'white' }} /> */}
    </ToggleButton>
  );
}
