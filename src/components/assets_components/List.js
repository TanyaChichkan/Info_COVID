import { useContext } from 'react';
import styled from 'styled-components';
import { InfoContext } from '../../context/InfoContext';
import Wrapper from './Wrapper';
import {
  formatNumbersToStrings,
  separateWordsByIndex,
} from '../../helpers/helperFns';

import { constantsNumbers } from '../../constants/constants';

import { ReactComponent as ConfirmedSVG } from '../../images/icons/confirmed.svg';
import { ReactComponent as DeathsSVG } from '../../images/icons/deaths.svg';
import { ReactComponent as RecoveredSVG } from '../../images/icons/recovered.svg';

//destructuring object with constants numbers
const { wordIndexFrom, wordIndexTo } = constantsNumbers;

//styles for modal content
const HeadingStyled = styled.h3`
  font-size: max(2.5vw, 30px);
  font-weight: 700;
  line-height: 1.166;
  margin-bottom: 37px;
`;

const SpanTextStyled = styled.span`
  font-size: max(1vw, 16px);
  font-weight: 400;
  line-height: 1.166;
  color: #666666;

  margin-left: ${(props) => props.isText && '20px'};
`;

const ListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 47px;
  }
`;

const ListStyled = styled.ul`
  margin-bottom: 36px;
`;

//array with icons
const iconsArray = [
  <ConfirmedSVG height={26} width={30} />,
  <DeathsSVG height={30} width={30} />,
  <RecoveredSVG height={22.5} width={30} />,
];

const List = () => {
  const { selectedCountry } = useContext(InfoContext);
  const { TotalConfirmed, TotalDeaths, TotalRecovered } = selectedCountry;

  //a new obj with 3 type of numbers for a list
  const selectedCountryDataForList = {
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  };

  return (
    <>
      <HeadingStyled style={{ textAlign: 'center' }} id='modal-modal-title'>
        {selectedCountry.Country}
      </HeadingStyled>
      <ListStyled>
        {Object.entries(selectedCountryDataForList).map(
          ([key, value], index) => (
            <ListItemStyled key={key}>
              <Wrapper>
                <SpanTextStyled>{iconsArray[index]}</SpanTextStyled>
                <SpanTextStyled isText={true}>
                  {separateWordsByIndex(key, wordIndexFrom, wordIndexTo)}
                </SpanTextStyled>
              </Wrapper>
              <SpanTextStyled>{formatNumbersToStrings(value)}</SpanTextStyled>
            </ListItemStyled>
          )
        )}
      </ListStyled>
    </>
  );
};

export default List;
