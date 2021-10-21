export const currentDate = new Date(Date.now());

export const getMonthsSetInDatesCollection = (datesCollection) => [
  ...new Set(datesCollection.map((date) => date.getMonth())), // return a set of months present in some collection of Date objects
];

export const isMonthPassTheCurrentDate = (month) => {
  const currentMonth = currentDate.getMonth();
  if (month === 0) return true;
  return month >= currentMonth;
};

export const isPassTheCurrentDate = (date) => {
  const month = date.getMonth();
  const currentMonth = currentDate.getMonth();
  if (month === currentMonth) {
    const day = date.getDate();
    const currentDay = currentDate.getDate();
    return currentDay <= day;
  }
  return isMonthPassTheCurrentDate(month);
};
