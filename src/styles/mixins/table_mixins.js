import { css } from 'styled-components';
import { device } from '../queries';

//mixins for the table styles
export const borderRadius = css`
  &:first-child {
    border-radius: 20px 0 0 20px;
  }

  &:last-child {
    border-radius: 0 20px 20px 0;
  }
`;

export const stylesForHeaderAndFooter = css`
  color: white;
  background-color: #2196f3;
`;

export const stylesForTableData = css`
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
