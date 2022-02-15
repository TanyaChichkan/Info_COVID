import { useState, useMemo, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {
  borderRadius,
  stylesForHeaderAndFooter,
  stylesForTableData,
} from '../../../styles/mixins/table_mixins';
import { concatWords } from '../../../helpers/helperFns';
import { InfoContext } from '../../../context/InfoContext';
import sprite from '../../../images/icons/sprite.svg';
import { constantsText, constantsNumbers } from '../../../constants/constants';

const { ascendingOrder, descendingOrder, tableHeadNodeName, iconUp, iconDown } =
  constantsText;
const { sortIndicator, reverseSortIndicator } = constantsNumbers;

const TableHeaderStyled = styled.th`
  ${stylesForTableData}
  ${stylesForHeaderAndFooter}
  ${borderRadius}
`;

const tableHeadingsNames = ['№', 'Country', 'Total Confirmed'];

const TableHead = () => {
  const { countriesInfo, setSortedCountryData } = useContext(InfoContext);

  const [sortedField, setSortedField] = useState({
    order: '',
    field: '',
  });

  const handleSortClick = (e) => {
    const { nodeName } = e.target;
    if (nodeName === tableHeadNodeName) {
      setSortedField((prev) => ({
        field: e.target.dataset.name,
        order:
          prev.order === ascendingOrder || !prev.order
            ? descendingOrder
            : ascendingOrder,
      }));
    }
  };

  const sortedArray = useMemo(() => {
    const { field, order } = sortedField;

    return [...countriesInfo].sort((itemCurrent, itemNext) => {
      const a = itemCurrent[field];
      const b = itemNext[field];

      if (a < b)
        return order === ascendingOrder ? reverseSortIndicator : sortIndicator;
      if (a > b)
        return order === ascendingOrder ? sortIndicator : reverseSortIndicator;

      return 0;
    });
  }, [countriesInfo, sortedField]);

  useEffect(() => {
    setSortedCountryData(sortedArray);
  }, [setSortedCountryData, sortedArray]);

  return (
    <>
      {tableHeadingsNames.map((headerItem) => {
        const dataFromArrayFormatted = concatWords(headerItem);
        return headerItem === '№' ? (
          <TableHeaderStyled key={headerItem}>
            {dataFromArrayFormatted}
          </TableHeaderStyled>
        ) : (
          <TableHeaderStyled
            key={headerItem}
            onClick={handleSortClick}
            data-name={dataFromArrayFormatted}
          >
            {headerItem}

            <span>
              {sortedField.field === dataFromArrayFormatted &&
                sortedField.order === descendingOrder && (
                  <svg fill='white' width={10} height={10}>
                    <use href={sprite + iconDown} />
                  </svg>
                )}
              {((sortedField.field === dataFromArrayFormatted &&
                sortedField.order === ascendingOrder) ||
                !sortedField.order) && (
                <svg fill='white' width={10} height={10}>
                  <use href={sprite + iconUp} />
                </svg>
              )}
            </span>
          </TableHeaderStyled>
        );
      })}
    </>
  );
};

export default TableHead;
