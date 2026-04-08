import { getDaysInMonth } from "../utils/calendar";
import DayCell from "./DayCell";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Props = {
  currentMonth: Date;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (date: Date) => void;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
};

export default function CalendarGrid({
  currentMonth,
  startDate,
  endDate,
  onDateClick,
  goToPrevMonth,
  goToNextMonth,
}: Props) {

  const days = getDaysInMonth(currentMonth);

  function same(d1: Date | null, d2: Date | null) {
    if (!d1 || !d2) return false;
    return d1.toDateString() === d2.toDateString();
  }

  function inRange(day: Date) {
    if (!startDate || !endDate) return false;
    return day > startDate && day < endDate;
  }

  return (
    <div className="calendar-b">

      {/* HEADER WITH ARROWS */}
      <div className="calendar-header">
        <button onClick={goToPrevMonth} className="nav-btn">
            <i className="fa-solid fa-angle-left"></i>
        </button>

        <div className="month-title">
            {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
})}
  </div>

  <button onClick={goToNextMonth} className="nav-btn"><i className="fa-solid fa-angle-right"></i></button>
</div>
      {/* DAYS HEADER */}
      <div className="calendar-days-header">
        {daysOfWeek.map((d) => (
          <div key={d} className="p-2 text-center">{d}</div>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7">
        {days.map((day, i) => (
          <DayCell
            key={i}
            day={day}
            onClick={onDateClick}
            isSelected={
              day ? (same(day, startDate) || same(day, endDate)) : false
            }
            isInRange={day ? inRange(day) : false}
          />
        ))}
      </div>
    </div>
  );
}