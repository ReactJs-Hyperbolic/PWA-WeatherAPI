import React, { useState, useEffect } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';
import StandaloneToggleButton from './components/unitsToggleButton';

import { setSliceQuery } from './state/slices/querySlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const reduxQuery = useSelector(state => state.query.query);
  const isFarenheit = useSelector(state => state.units.isImperial);

  useEffect(async () => {
    console.log('Query = ', reduxQuery);
    const data = await fetchWeather(reduxQuery, isFarenheit);
    console.log(data);
    setWeather(data);
  }, [isFarenheit]);

  const search = async e => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query, isFarenheit);
      console.log(data);
      setWeather(data);
      dispatch(setSliceQuery(query));
      setQuery('');
    }
  };

  return (
    <div className='main-container'>
      <input
        className='search'
        type='text'
        placeholder='Search...'
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className='city'>
          <h2 className='city-name'>
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className='city-temp'>
            {Math.round(weather.main.temp)}
            <sup>&deg;</sup>
            {isFarenheit ? 'F' : 'C'}
          </div>
        </div>
      )}
      <StandaloneToggleButton />
    </div>
  );
}

export default App;
