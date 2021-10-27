const { getMonthsSetInDatesCollection, isMonthPassDate } = require('@utils/Date');

describe('Date Utils: getMonthsSetInDatesCollection', () => {
  it(`Handles dates with the same month`, () => {
    const dates = [
      new Date(2021, 1, 1),
      new Date(2021, 1, 3),
      new Date(2021, 5, 5),
      new Date(2021, 4, 12),
      new Date(2021, 4, 2),
    ];
    const funcResult = getMonthsSetInDatesCollection(dates);
    const expectedResult = [1, 5, 4];
    expect(funcResult).toEqual(expectedResult);
  });
  describe('Date Utils: isMonthPassDate', () => {
    it('October is past September', () => {
      const month = 10;
      const dateToCompare = new Date(2021, 9, 15);
      const compareResult = isMonthPassDate(month, dateToCompare);
      expect(compareResult).toEqual(true);
    });
    it('Same month should return true', () => {
      const month = 10;
      const dateToCompare = new Date(2021, 10, 15);
      const compareResult = isMonthPassDate(month, dateToCompare);
      expect(compareResult).toEqual(true);
    });
    it('September is not past October', () => {
      const month = 9;
      const dateToCompare = new Date(2021, 10, 15);
      const compareResult = isMonthPassDate(month, dateToCompare);
      expect(compareResult).toEqual(false);
    });
    it('No month is past december', () => {
      const months = Array.from(Array(12).keys()).slice(1);
      const dateToCompare = new Date(2021, 12, 15);
      const compareResult = months.some((month) => isMonthPassDate(month, dateToCompare));
      expect(compareResult).toEqual(false);
    });
  });
});
