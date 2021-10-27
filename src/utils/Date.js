export const currentDate = new Date(Date.now());

export const getMonthsSetInDatesCollection = (datesCollection) => [
  ...new Set(datesCollection.map((date) => date.getMonth())), // return a set of months present in some collection of Date objects
];

export const isMonthPassDate = (month, date) => {
  const comparedMonth = date.getMonth();
  if (month === 0 || month === 12) return true;
  if (comparedMonth === 0) return false;
  return month >= comparedMonth;
};

export const isPassDate = (date, comparedDate) => {
  const month = date.getMonth();
  const comparedMonth = comparedDate.getMonth();
  if (month === comparedMonth) {
    const day = date.getDate();
    const comparedDay = comparedDate.getDate();
    return comparedDay <= day;
  }
  return isMonthPassDate(month, comparedDate);
};
