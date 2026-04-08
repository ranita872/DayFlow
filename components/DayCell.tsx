type Props = {
  day: Date | null;
  onClick: (d: Date) => void;
  isSelected: boolean;
  isInRange: boolean;
};

export default function DayCell({ day, onClick, isSelected, isInRange }: Props) {
  if (!day) return <div className="day"></div>;

  let className = "day";

  if (isSelected) className += " selected";
  else if (isInRange) className += " in-range";

  return (
    <div className={className} onClick={() => onClick(day)}>
      {day.getDate()}
    </div>
  );
}