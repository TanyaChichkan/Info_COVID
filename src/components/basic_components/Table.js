import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { InfoContext } from '../../context/InfoContext';
import { ModalContext } from '../../context/ModalContext';
import { device } from '../../styles/queries';
import { formatNumbersToStrings } from '../helpers/helperFns';
import sprite from '../../images/icons/sprite.svg';

//mixins for the styles
const borderRadius = css`
  &:first-child {
    border-radius: 20px 0 0 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
  }
`;

const stylesForHeaderAndFooter = css`
  color: white;
  background-color: #2196f3;
`;

const stylesForTableData = css`
  text-align: left;
  &:first-child {
    text-align: center;
  }

  &:not(:first-of-type) {
    padding: 16px;
  }

  @media ${device.laptop} {
    &:not(:first-of-type) {
      padding: 26px;
    }
  }
`;

//styled table elements
const TableStyled = styled.table`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.16;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

const TableDataStyled = styled.td`
  ${borderRadius}
  ${stylesForTableData}
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

const TableRowStyled = styled.tr`
  color: ${(props) => (props.isFromFooter ? 'white' : 'black')};
`;

const TableHeaderStyled = styled.th`
  ${stylesForTableData}
  ${stylesForHeaderAndFooter}
  ${borderRadius}
`;

const TableFooterStyled = styled.tfoot`
  ${stylesForHeaderAndFooter}
`;

const Table = () => {
  const { countriesInfo, getSelectedCountry } = useContext(InfoContext);
  const { setModalOpen } = useContext(ModalContext);

  const [sortedField, setSortedField] = useState([null, null]);
  const [sortedCountryData, setSortedCountryData] = useState(countriesInfo);

  const onHandleClick = (e) => {
    const countryCode = e.currentTarget.dataset.code;
    getSelectedCountry(countryCode);
    setModalOpen(true);
  };

  const totalCases = countriesInfo.reduce(
    (acc, country) => acc + country.TotalConfirmed,
    0
  );

  const handleSortClick = (e) => {
    setSortedField(e.currentTarget.dataset.name);
    console.log(sortDataByName());
    setSortedCountryData(sortDataByName());
  };

  const sortDataByName = () => {
    return [...countriesInfo].sort((a, b) => {
      const fa = a.Country.toLowerCase();
      const fb = b.Country.toLowerCase();

      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    });
  };

  const totalCasesFormatted = formatNumbersToStrings(totalCases);

  return (
    <TableStyled>
      <thead>
        <TableRowStyled>
          <TableHeaderStyled>
            №
            <span onClick={handleSortClick} data-name='number'>
              <svg fill='white' width={10} height={10}>
                <use href={sprite + `#icon-arrow-up2`} />
              </svg>
            </span>
          </TableHeaderStyled>
          <TableHeaderStyled>
            Country
            <span onClick={handleSortClick} data-name='country'>
              <svg fill='white' width={10} height={10}>
                <use href={sprite + `#icon-arrow-up2`} />
              </svg>
            </span>
          </TableHeaderStyled>
          <TableHeaderStyled>
            Total Confirmed
            <span onClick={handleSortClick} data-name='total'>
              <svg fill='white' width={10} height={10}>
                <use href={sprite + `#icon-arrow-up2`} />
              </svg>
            </span>
          </TableHeaderStyled>
        </TableRowStyled>
      </thead>
      <tbody>
        {sortedCountryData.map(
          ({ CountryCode, TotalConfirmed, Country }, index) => (
            <TableRowStyled
              key={CountryCode}
              data-code={CountryCode}
              onClick={onHandleClick}
            >
              <TableDataStyled>{index + 1}</TableDataStyled>
              <TableDataStyled>{Country}</TableDataStyled>
              <TableDataStyled>
                {formatNumbersToStrings(TotalConfirmed)}
              </TableDataStyled>
            </TableRowStyled>
          )
        )}
      </tbody>
      <TableFooterStyled>
        <TableRowStyled isFromFooter={true}>
          <TableDataStyled colSpan='2'>Total</TableDataStyled>
          <TableDataStyled>{totalCasesFormatted}</TableDataStyled>
        </TableRowStyled>
      </TableFooterStyled>
    </TableStyled>
  );
};

export default Table;
