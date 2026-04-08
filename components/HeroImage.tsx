type Props = {
  currentMonth: Date;
};

export default function HeroImage({ currentMonth }: Props) {

  // 🌦️ Month → Image Mapping
  const monthImages: { [key: number]: string } = {
    0: "/snow.avif",        
    1: "/coldfeb.avif",     
    2: "/spring.jpg",      
    3: "/spring2.avif",     
    4: "/summer.avif",      
    5: "/rain.avif",        
    6: "/rain2.avif",      
    7: "/green.avif",      
    8: "/autumn.avif",      
    9: "/fall.avif",       
    10: "/foggy.avif",     
    11: "/christmas.avif",  
  };

  const imageSrc = monthImages[currentMonth.getMonth()];
  const monthMessages: { [key: number]: string } = {
  0: "Start the year with fresh energy ❄️",
  1: "Love is in the air 🌸",
  2: "Spring brings new beginnings 🌼",
  3: "Bloom and grow 🌷",
  4: "Enjoy the summer sunshine ☀️",
  5: "Let the rains refresh your soul 🌧️",
  6: "Greenery all around 🌿",
  7: "Stay calm and enjoy nature 🌱",
  8: "Cool breeze of autumn 🍂",
  9: "Falling leaves, cozy vibes 🍁",
  10: "Winter is coming ❄️",
  11: "Celebrate joy and warmth 🎄",
};
const message = monthMessages[currentMonth.getMonth()];

  return (
    <div className="hero">
      
      <img
        src={imageSrc}
        alt="Season Image"
        className="hero-img"
      />

      <div className="hero-title">
    <div className="month-name">
      {currentMonth.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      })}
    </div>

    <div className="month-message">
      {message}
    </div>
  </div>
</div>

  );
}