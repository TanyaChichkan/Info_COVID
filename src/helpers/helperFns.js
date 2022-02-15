import { constantsNumbers } from '../constants/constants';

export const formatNumbersToStrings = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const concatWords = (word) =>
  word.split(' ').length > constantsNumbers.twoWordsIndicator
    ? word.split(' ').join('')
    : word;

export const separateWordsByIndex = (word, index1, index2) =>
  word.slice(index1, index2) + ' ' + word.slice(index2);
