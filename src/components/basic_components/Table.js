import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { InfoContext } from '../../context/InfoContext';
import { device } from '../../styles/queries';

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
  const { countriesInfo, getSelectedCountry, setModalOpen } =
    useContext(InfoContext);

  const onHandleClick = (e) => {
    const countryCode = e.currentTarget.dataset.code;
    getSelectedCountry(countryCode);
    setModalOpen(true);
  };

  const formatNumbersToStrings = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const totalCases = countriesInfo.reduce(
    (acc, country) => acc + country.TotalConfirmed,
    0
  );

  const totalCasesFormatted = formatNumbersToStrings(totalCases);

  return (
    <TableStyled>
      <thead>
        <TableRowStyled>
          <TableHeaderStyled>№</TableHeaderStyled>
          <TableHeaderStyled>Country</TableHeaderStyled>
          <TableHeaderStyled>Total Confirmed</TableHeaderStyled>
        </TableRowStyled>
      </thead>
      <tbody>
        {countriesInfo.map(
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
