import React, { useState } from 'react';
import CountryInfo from './CountryInfo';

interface Countries {
  [key: string]: string;
}

interface CityStates {
  [key: string]: string;
}

const CityState = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCityState, setSelectedCityState] = useState('');

  const countries: Countries = {
    'Châu Phi': '|Algeria|Angola|Benin|Botswana|Burkina Faso|Burundi|Cameroon|Cape Verde|Central African Republic|Chad|Comoros|Congo, Dem.|Congo, Rep.|Djibouti|Egypt|Equatorial Guinea|Eritrea|Ethiopia|Gabon|Gambia|Ghana|Guinea|Guinea-Bissau|Kenya|Lesotho|Liberia|Libya|Madagascar|Malawi|Mali|Mauritania|Mauritius|Morocco|Mozambique|Namibia|Niger|Nigeria|Rwanda|Sao Tome/Principe|Senegal|Seychelles|Sierra Leone|Somalia|South Africa|Sudan|Swaziland|Tanzania|Togo|Tunisia|Uganda|Zambia|Zimbabwe',
    'Châu Á': '|Bangladesh|Bhutan|Brunei|Burma (Myanmar)|Cambodia|China|East Timor|India|Indonesia|Japan|Kazakhstan|Korea (north)|Korea (south)|Laos|Malaysia|Maldives|Mongolia|Nepal|Philippines|Russian Federation|Singapore|Sri Lanka|Taiwan|Thailand|Vietnam',
    'Úc/Châu Đại Dương': '|Australia|Fiji|Kiribati|Micronesia|Nauru|New Zealand|Palau|Papua New Guinea|Samoa|Tonga|Tuvalu|Vanuatu',
    'Vùng Caribe': '|Anguilla|Antigua/Barbuda|Aruba|Bahamas|Barbados|Cuba|Dominica|Dominican Republic|Grenada|Guadeloupe|Haiti|Jamaica|Martinique|Montserrat|Netherlands Antilles|Puerto Rico|St. Barts|St. Kitts/Nevis|St. Lucia|St. Martin/Sint Maarten|St Vincent/Grenadines|San Andres|Trinidad/Tobago|Turks/Caicos',
    'Trung Mỹ': '|Belize|Costa Rica|El Salvador|Guatemala|Honduras|Nicaragua|Panama',
    'Châu Âu': '|Albania|Andorra|Austria|Belarus|Belgium|Bosnia/Herzegovina|Bulgaria|Croatia|Czech Republic|Denmark|Estonia|Finland|France|Georgia|Germany|Greece|Hungary|Iceland|Ireland|Italy|Latvia|Liechtenstein|Lithuania|Luxembourg|Macedonia|Malta|Moldova|Monaco|Netherlands|Norway|Poland|Portugal|Romania|San Marino|Serbia/Montenegro (Yugoslavia)|Slovakia|Slovenia|Spain|Sweden|Switzerland|Ukraine|United Kingdom|Vatican City',
    'Trung Đông': '|Afghanistan|Armenia|Azerbaijan|Bahrain|Cyprus|Iran|Iraq|Israel|Jordan|Kuwait|Kyrgyzstan|Lebanon|Oman|Pakistan|Qatar|Saudi Arabia|Syria|Tajikistan|Turkey|Turkmenistan|United Arab Emirates|Uzbekistan|Yemen',
    'Bắc Mỹ': '|Bermuda|Canada|Greenland|Mexico|UnitedStates',
    'Nam Mỹ': '|Argentina|Bolivia|Brazil|Chile|Colombia|Ecuador|Guyana|Paraguay|Peru|Suriname|Uruguay|Venezuela',
  };

  const city_states: CityStates = {
    Algeria: '|',
    Angola: '|',
    Benin: '|',
    Botswana: '|',
  };

  const regions = Object.keys(countries);

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setSelectedCountry('');
    setSelectedCityState('');
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedCityState('');
  };

  const handleCityStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cityState = e.target.value;
    setSelectedCityState(cityState);
  };

  return (
    <div id='open' className='mb-14'>
      <div className='flex gap-x-5'>
      <h1>Select : </h1>
      <div>
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select a region</option>
          {regions.map((region, index) => (
            <option key={index} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      {selectedRegion && (
        <div>
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {countries[selectedRegion].split('|').map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedCountry && city_states[selectedCountry] ? (
      <div>
        <select value={selectedCityState} onChange={handleCityStateChange}>
          <option value="">Select a city/state</option>
          {city_states[selectedCountry].split('|').map((cityState, index) => (
            <option key={index} value={cityState}>
              {cityState}
            </option>
          ))}
        </select>
      </div>
    ) : (
      <div>
      </div>
    )}
    </div>
    {selectedCountry && <CountryInfo country={selectedCountry} />}
    </div>
  );
};

export default CityState;