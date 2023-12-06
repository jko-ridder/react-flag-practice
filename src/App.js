import './App.css';
import { useState } from 'react';

const FlagGame = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [countriesData, setCountriesData] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const fetchData = () => {
    if (!selectedRegion) {
      alert('Please select a region');
    } else  {
    const url = `https://restcountries.com/v3.1/region/${selectedRegion}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);

      })
      }}

      const flagClick = (countryCode) =>  {
        setSelectedCountryCode(countryCode === selectedCountryCode ? ! '' : countryCode);
      };

      const formatPopulation = (population) => {
        if (population < 1000000) {
          return population.toLocaleString(); 
        }  {
          return `${(population / 1000000).toFixed(1)} million`; 
        } 
      };

  return (
    <div className="App">
      <div className='flagGameHeader'>
     <h1>Flag Practice</h1>
     <div>
      <h2>Select a region: </h2>
      <p>Then click on a flag to reveal the name, capital and population</p>
      <label htmlFor="regions">Choose a region: </label><br/>
      <select name="regions" value={selectedRegion} onChange={handleRegionChange}>
        <option value="" disabled hidden>Select a region</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        </select>
        <button className='fetchButton' onClick={fetchData}>Load</button>
        </div>
        </div>
        <div className='FlagBoxSection'>

          {countriesData.map((country) => (
        <>
         <div className='flagBox'  onClick={() => flagClick(country.cca2)}>
           <p key={country.cca2}>
            <img 
            src={country.flags.svg}
             alt={`${country.name.common} flag`} 
             width="300" 
             height="auto" 
             /><br/>
          </p>
          {selectedCountryCode === country.cca2 && (
            <div>
            <p>
            Country: {country.name.common}<br></br>
            Capital: {country.capital}<br></br>
            Population: {formatPopulation(country.population)}</p>      
            </div>
            )}
          </div>
          </>         
          ))}
          </div>     
     </div>
  
  );
}
export default FlagGame;
