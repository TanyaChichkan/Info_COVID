import { createContext, useEffect, useMemo, useState } from 'react';
import { useInfoCovidRequest } from '../custom_hooks/useInfoCovidRequest';

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const { countriesDataAll, loadingInfo } = useInfoCovidRequest();
  const [countriesData, setCountriesData] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (countriesDataAll?.Countries?.length) {
      setCountriesData(countriesDataAll.Countries);
    }
  }, [countriesDataAll, countriesDataAll?.Countries]);

  const getSelectedCountry = (codeCountry) => {
    if (codeCountry !== selectedCountry?.CountryCode) {
      const selectedCountryByClick = countriesData.find(
        (country) => country.CountryCode === codeCountry
      );
      setSelectedCountry(selectedCountryByClick);
    }
  };

  const filteredCountriesByInput = useMemo(
    () =>
      countriesData.filter(({ Country }) =>
        Country.toLowerCase().includes(countryFilter.toLowerCase())
      ),
    [countriesData, countryFilter]
  );

  return (
    <InfoContext.Provider
      value={{
        countriesInfo: filteredCountriesByInput,
        filter: countryFilter,
        setCountryFilter,
        loadingInfo,
        getSelectedCountry,
        selectedCountry,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
