import React, { useRef } from 'react';

import {
  BirthdayLink,
  BirthdayMonthBranch,
  BirthdayOptionContainer,
  BirthdayTree,
  BirthdayTreeButtonsContainer,
  BirthdayTreeDescription,
  CollapseButton,
  DateHeader,
} from './SigmaBirthdays.styles';

const birthdaysMockup = [
  { bdayBoy: 'Ciombor', date: new Date(2021, 1, 1) },
  { bdayBoy: 'CiomborXL', date: new Date(2021, 1, 1) },
  { bdayBoy: 'Ciombor2', date: new Date(2021, 2, 2) },
  { bdayBoy: 'Adam', date: new Date(2021, 3, 3) },
  { bdayBoy: 'Bartek', date: new Date(2021, 4, 4) },
  { bdayBoy: 'Przemo', date: new Date(2021, 5, 5) },
  { bdayBoy: 'Gut', date: new Date(2021, 6, 6) },
  { bdayBoy: 'SmallGut', date: new Date(2022, 10, 12) },
  { bdayBoy: 'TurboGut', date: new Date(2022, 12, 16) },
];
const monthNames = [
  'December',
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
];
export default function SigmaBirthdays() {
  const birthdayMonths = [...new Set(birthdaysMockup.map(({ date }) => date.getMonth()))];
  const currentDate = new Date(Date.now());
  const birthdayTreeRef = useRef();

  const isMonthPassTheCurrentDate = (month) => {
    const currentMonth = currentDate.getMonth();
    if (month === 0) return true;
    return month >= currentMonth;
  };

  function handleCollapseTree() {
    const { children: monthBranches } = birthdayTreeRef.current;
    const monthBranchesArray = Array.from(monthBranches).slice(1); // get rid of p
    const details = monthBranchesArray.map((branch) => branch.firstChild);
    return details.forEach((detail) => detail.removeAttribute('open'));
  }

  return (
    <BirthdayOptionContainer>
      <DateHeader>{`${currentDate.getDate()} ${
        monthNames[currentDate.getMonth()]
      } ${currentDate.getFullYear()}`}</DateHeader>
      <BirthdayTreeButtonsContainer>
        <CollapseButton onClick={handleCollapseTree} type="button">
          Collapse All
        </CollapseButton>
      </BirthdayTreeButtonsContainer>
      <BirthdayTree ref={birthdayTreeRef} className="tree-view">
        <BirthdayTreeDescription>Sigma Birthdays:</BirthdayTreeDescription>
        {birthdayMonths.map((month) => (
          <BirthdayMonthBranch key={month}>
            <details open={isMonthPassTheCurrentDate(month)}>
              <summary>{monthNames[month]}</summary>
              <ul>
                {birthdaysMockup
                  .filter(({ date }) => date.getMonth() === month)
                  .map(({ date, bdayBoy }) => (
                    <li key={bdayBoy}>
                      <BirthdayLink
                        bdayPassed={date.getTime() < currentDate.getTime()}
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
