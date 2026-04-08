"use client";
import CalendarGrid from "../CalendarGrid";
import goToPrevMonth from "../Calendar";
import goToNextMonth from "../Calendar";


type Props = {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  startDate: Date | null;
  endDate: Date | null;
  onDateClick: (date: Date) => void;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
};

export default function PopupCalendar({
  currentMonth,
  setCurrentMonth,
  startDate,
  endDate,
  onDateClick,
}: Props) {


  function prev() {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  }

  function next() {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  }

  return (
    <div className="popup">

      <div className="header">
        <button onClick={prev}>←</button>

        <span>
          {/* {currentMonth.toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })} */}
          <h4>Choose Your Date</h4>
        </span>

        <button onClick={next}>→</button>
      </div>

      <CalendarGrid
        currentMonth={currentMonth}
        startDate={startDate}
        endDate={endDate}
        onDateClick={onDateClick}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
        
      />
    </div>
  );
}
