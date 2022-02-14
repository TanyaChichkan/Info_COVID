import { useState, useContext } from 'react';
import styled from 'styled-components';
import { InfoContext } from '../../context/InfoContext';
import { constantsText } from '../../constants/constants';
import { device } from '../../styles/queries';

const InputStyled = styled.input`
  width: 100%;
  height: 4.2vw;
  min-height: 35px;
  padding-left: 32px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;

  @media ${device.tablet} {
    width: 31vw;
  }
`;

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { setCountryFilter } = useContext(InfoContext);

  const onHandleChange = (e) => {
    const { value } = e.target;

    setSearchQuery(value);
    setCountryFilter(value);
  };
  return (
    <InputStyled
      type='text'
      value={searchQuery}
      name='searchInput'
      onChange={onHandleChange}
      placeholder={constantsText.inputPlaceholder}
    />
  );
};

export default SearchInput;
