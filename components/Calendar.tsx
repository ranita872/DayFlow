"use client";

import { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import Notes from "./Notes";
import HeroImage from "./HeroImage";
import DateRangePicker from "./date-range/DateRangePicker";

export default function Calendar() {
  
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());


  function handleClick(date: Date) {
    if (!startDate || endDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  }
  function goToPrevMonth() {
  setCurrentMonth((prev) => {
    const newDate = new Date(prev);
    newDate.setMonth(prev.getMonth() - 1);
    return newDate;
  });
}

function goToNextMonth() {
  setCurrentMonth((prev) => {
    const newDate = new Date(prev);
    newDate.setMonth(prev.getMonth() + 1);
    return newDate;
  });
}

  return (
    <div className="calendar-container">
      <HeroImage currentMonth={currentMonth} />
      <DateRangePicker
        
      />
      <CalendarGrid
        currentMonth={currentMonth}
        startDate={startDate}
        endDate={endDate}
        onDateClick={handleClick}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
        />
      <Notes />
    </div>
  );
}