import React, { useContext } from 'react';
import styled from 'styled-components';
import { device } from '../../../styles/queries';
import {
  borderRadius,
  stylesForHeaderAndFooter,
  stylesForTableData,
} from '../../../styles/mixins/table_mixins';
import { InfoContext } from '../../../context/InfoContext';
import { ModalContext } from '../../../context/ModalContext';
import TableHead from './TableHead';
import { formatNumbersToStrings } from '../../../helpers/helperFns';
import { constantsNumbers, constantsText } from '../../../constants/constants';

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

const TableHeadStyled = styled.thead`
  position: sticky;
  top: 0;
`;

const TableFooterStyled = styled.tfoot`
  ${stylesForHeaderAndFooter}
`;

const Table = () => {
  const { countriesInfo, getSelectedCountry, sortedCountryData } =
    useContext(InfoContext);
  const { setModalOpen } = useContext(ModalContext);

  const onHandleClick = (e) => {
    const countryCode = e.currentTarget.dataset.code;
    getSelectedCountry(countryCode);
    setModalOpen(true);
  };

  const totalCases = countriesInfo.reduce(
    (acc, country) => acc + country.TotalConfirmed,
    0
  );

  const totalCasesFormatted = formatNumbersToStrings(totalCases);

  return (
    <TableStyled>
      <TableHeadStyled>
        <TableRowStyled>
          <TableHead />
        </TableRowStyled>
      </TableHeadStyled>

      <tbody>
        {sortedCountryData.map(
          ({ CountryCode, TotalConfirmed, Country }, index) => (
            <TableRowStyled
              key={CountryCode}
              data-code={CountryCode}
              onClick={onHandleClick}
            >
              <TableDataStyled>
                {index + constantsNumbers.valueToIncreaseIndex}
              </TableDataStyled>
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
          <TableDataStyled colSpan={constantsText.colSpanValue}>
            Total
          </TableDataStyled>
          <TableDataStyled>{totalCasesFormatted}</TableDataStyled>
        </TableRowStyled>
      </TableFooterStyled>
    </TableStyled>
  );
};

export default Table;
