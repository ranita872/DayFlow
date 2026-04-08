"use client";

import { useState } from "react";
import InputBox from "./InputBox";
import PopupCalendar from "./PopupCalendar";

export default function DateRangePicker() {
  const [show, setShow] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const goToPrevMonth = () => {
  setCurrentMonth(prev =>
    new Date(prev.getFullYear(), prev.getMonth() - 1)
  );
};

const goToNextMonth = () => {
  setCurrentMonth(prev =>
    new Date(prev.getFullYear(), prev.getMonth() + 1)
  );
};
  function handleDateClick(date: Date) {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
      setShow(false);
    }
  }


  return (
    <div className="date-picker">
      <InputBox
        startDate={startDate}
        endDate={endDate}
        onClick={() => setShow(!show)}
      />

      {show && (
        <PopupCalendar
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          startDate={startDate}
          endDate={endDate}
          onDateClick={handleDateClick}
          goToPrevMonth={goToPrevMonth}   
        goToNextMonth={goToNextMonth} 
        />
      )}
    </div>
  );
}
