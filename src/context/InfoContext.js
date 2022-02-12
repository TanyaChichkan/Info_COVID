import { createContext, useEffect, useState } from 'react';
import { useInfoCovidRequest } from '../custom_hooks/useInfoCovidRequest';

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const { countriesDataAll } = useInfoCovidRequest();
  const { loadingInfo } = useInfoCovidRequest();
  const [countryFilter, setCountryFilter] = useState('');
  const [countriesDataFinal, setCountriesDataFinal] = useState([]);

  useEffect(() => {
    if (countriesDataAll?.Countries?.length) {
      const filteredCountriesByInput = countriesDataAll.Countries.filter(
        ({ Country }) =>
          Country.toLowerCase().includes(countryFilter.toLowerCase())
      );

      setCountriesDataFinal(filteredCountriesByInput);
    }
  }, [countriesDataAll.Countries, countryFilter]);

  return (
    <InfoContext.Provider
      value={{
        countriesInfo: countriesDataFinal,
        globalInfo: countriesDataAll.Global,
        filter: countryFilter,
        setCountryFilter,
        loadingInfo,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
