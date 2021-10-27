import React, { useRef } from 'react';

import { CollapseButton } from '@components/Generic/FunctionButtons';
import {
  currentDate,
  getMonthsSetInDatesCollection,
  isMonthPassDate,
  isMonthPassTheCurrentDate,
  isPassDate,
  isPassTheCurrentDate,
} from '@utils/Date';
import MONTH_NAMES from 'src/consts/Date';
import {
  BirthdayLink,
  BirthdayMonthBranch,
  BirthdayOptionContainer,
  BirthdayTree,
  BirthdayTreeButtonsContainer,
  BirthdayTreeDate,
  BirthdayHeader,
  MonthSummary,
} from './SigmaBirthdays.styles';

const birthdaysMockup = [
  { bdayBoy: 'Ciombor', date: new Date(2021, 1, 1) },
  { bdayBoy: 'CiomborXL', date: new Date(2021, 1, 1) },
  { bdayBoy: 'Ciombor2', date: new Date(2021, 2, 2) },
  { bdayBoy: 'Adam', date: new Date(2021, 3, 3) },
  { bdayBoy: 'Bartek', date: new Date(2021, 4, 4) },
  { bdayBoy: 'Przemo', date: new Date(2021, 5, 5) },
  { bdayBoy: 'Gut', date: new Date(2021, 6, 6) },
  { bdayBoy: 'SmallGut', date: new Date(2022, 9, 20) },
  { bdayBoy: 'TurboGut', date: new Date(2022, 12, 16) },
];

export default function SigmaBirthdays() {
  const birthdayTreeRef = useRef();
  const birthdayMonths = getMonthsSetInDatesCollection(birthdaysMockup.map(({ date }) => date));

  const dateHeaderText = `${currentDate.getDate()} ${
    MONTH_NAMES[currentDate.getMonth() + 1]
  } ${currentDate.getFullYear()}`;

  const birthdaysInMonth = (month) =>
    birthdaysMockup.filter(({ date }) => date.getMonth() === month);

  function handleCollapseTree() {
    const { children: monthBranches } = birthdayTreeRef.current;
    const monthBranchesArray = Array.from(monthBranches).slice(1); // get rid of <p> DOM element
    const details = monthBranchesArray.map((branch) => branch.firstChild);
    return details.forEach((detail) => detail.removeAttribute('open'));
  }

  return (
    <BirthdayOptionContainer>
      <BirthdayHeader>Sigma Birthdays</BirthdayHeader>
      <BirthdayTreeButtonsContainer>
        <CollapseButton onClick={handleCollapseTree} type="button">
          -
        </CollapseButton>
      </BirthdayTreeButtonsContainer>
      <BirthdayTree ref={birthdayTreeRef}>
        <BirthdayTreeDate>{dateHeaderText}</BirthdayTreeDate>
        {birthdayMonths.map((month) => (
          <BirthdayMonthBranch key={month}>
            <details open={isMonthPassDate(month, currentDate)}>
              <MonthSummary>{MONTH_NAMES[month]}</MonthSummary>
              <ul>
                {birthdaysInMonth(month).map(({ date, bdayBoy }) => (
                  <li key={bdayBoy}>
                    <BirthdayLink
                      bdayPassed={!isPassDate(date, currentDate)}
                    >{`${date.getDate()} - ${bdayBoy}`}</BirthdayLink>
                  </li>
                ))}
              </ul>
            </details>
          </BirthdayMonthBranch>
        ))}
      </BirthdayTree>
    </BirthdayOptionContainer>
  );
}
