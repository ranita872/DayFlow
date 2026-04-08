type Props = {
  startDate: Date | null;
  endDate: Date | null;
  onClick: () => void;
};

export default function InputBox({ startDate, endDate, onClick }: Props) {
  
  function format(date: Date | null) {
    if (!date) return "";
    return date.toLocaleDateString("en-US");
  }

  return (
    <div className="input-box" onClick={onClick}>
      {startDate && endDate
        ? `${format(startDate)} - ${format(endDate)}`
        : "Select date range"}
    </div>
  );
}