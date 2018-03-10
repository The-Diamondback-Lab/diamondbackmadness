//config imports
import * as Utilities from './utils.js';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const END_DATES = [
  new Date().setFullYear(2018, 2, 12),
  new Date().setFullYear(2018, 2, 17),
  new Date().setFullYear(2018, 2, 21),
  new Date().setFullYear(2018, 2, 25),
  new Date().setFullYear(2018, 2, 29),
  new Date().setFullYear(2018, 2, 31),
  new Date().setFullYear(2018, 3, 3)
];
const week1 = ['March 17', 'March 18', 'March 19', 'March 20'];
const week2 = ['March 21', 'March 22', 'March 23', 'March 24'];
const week3 = ['March 25', 'March 26', 'March 27', 'March 28'];
const week4 = ['March 29', 'March 30'];
const week5 = ['March 31', 'April 1', 'April 2'];
const week6 = ['April 3'];

const START = new Date().setFullYear(2018, 3, 12);

const END = new Date().setFullYear(2018, 3, 3);

export function getVotingPeriod() {
  let date = new Date();
  if (END_DATES[0] > date) {
    return 0;
  } else if (END_DATES[END_DATES.length - 1] > date) {
    return END_DATES.length;
  } else {
    let count = -1,
      votingPeriod = -1;
    while (count++ < END_DATES.length && votingPeriod === -1) {
      votingPeriod = (date = END_DATES[count])
        ? count
        : -1;
    }
    return votingPeriod;
  }
}

export function getWeekRef(votingPeriod) {
  let searchLocation;
  switch (votingPeriod) {
    case 1:
      searchLocation = '1';
      break;
    case 2:
      searchLocation = '2';
      break;
    case 3:
      searchLocation = '3';
      break;
    case 4:
      searchLocation = '4';
      break;
    case 5:
      searchLocation = '5';
      break;
    case 6:
      searchLocation = '6';
      break;
    default:
      searchLocation = '0';
  }
  return searchLocation;
}

export function getWinner(comp1, comp2) {
  return (comp1.votes > comp2.votes)
    ? comp1
    : comp2;
}
