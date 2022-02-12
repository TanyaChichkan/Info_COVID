import { useState, useReducer, useEffect } from 'react';
import { constantsText, constantsNumbers } from '../constants/constants';
import { fetchInfoByCounties } from '../services/infoAPI';

const initialState = {
  isLoading: true,
  error: false,
  success: false,
};

const loadingReducer = (state, action) => {
  switch (action.type) {
    case constantsText.loading:
      return { ...state, isLoading: true };
    case constantsText.success:
      return { ...state, isLoading: false, success: true };
    case constantsText.error:
      return { ...state, isLoading: false, error: true, success: false };
    default:
      return state;
  }
};

export const useInfoCovidRequest = () => {
  const [countriesDataAll, setCountriesDataAll] = useState([]);
  const [state, dispatch] = useReducer(loadingReducer, initialState);

  useEffect(() => {
    getCovidInfo();
  }, []);

  const getCovidInfo = async () => {
    dispatch({ type: constantsText.loading });
    try {
      const data = await fetchInfoByCounties();
      setCountriesDataAll(data.data);

      setTimeout(
        () => dispatch({ type: constantsText.success }),
        constantsNumbers.startPageDelay
      );
    } catch (err) {
      console.log(err);
      dispatch({ type: constantsText.error });
    }
  };

  return { countriesDataAll, loadingInfo: state };
};
