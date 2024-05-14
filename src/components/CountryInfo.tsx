// CountryInfo.tsx
import React from 'react';
import Asian from './Asian';
// import Africa from './Africa';

interface CountryInfoProps {
  country: string;
}

const CountryInfo: React.FC<CountryInfoProps> = ({ country }) => {
  const getContinent = (country: string) => {
    const continentMap: { [key: string]: string } = {
      // ASIAN
      Vietnam: 'Asian',
      Laos: 'Asian',
      Thailand: 'Asian',

    };
    return continentMap[country] || '';
  };

  const continent = getContinent(country);

  return (
    <div>
      {continent === 'Asian' && <Asian country={country} />}
      {/* {continent === 'African' && <Africa />} */}
    </div>
  );
};

export default CountryInfo;
