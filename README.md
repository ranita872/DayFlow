# 🗓️ DayFlow — Aesthetic Interactive Calendar Experience

🔗 **Live Demo:** https://day-flow-eight.vercel.app/

---

## ✨ Why This Project Stands Out

Most calendar apps focus only on functionality.  
**DayFlow blends functionality with experience.**

It is inspired by a **physical wall calendar**, enhanced with:
- 🌦️ Seasonal storytelling (dynamic visuals)
- 🎯 Smart date range interaction
- 🧘 Minimal, distraction-free UI


## 🚀 Core Features

### 🎨 Seasonal Hero Experience
The top banner dynamically changes based on the selected month:

| Month | Theme |
|------|------|
| January | ❄️ Snow & winter vibes |
| February–March | 🌸 Blossoms |
| May | ☀️ Summer heat |
| June–July | 🌧️ Rainy season |

💡 Creates an emotional connection, not just a UI.

---

### 📅 Custom Date Range Picker (From Scratch)

A fully custom-built date picker (no external libraries):

- Click → Select start date  
- Click again → Select end date  
- Automatically highlights:
  - 🟣 Start date  
  - 🟢 End date  
  - 🔵 Range in between  

✔ Clean UX  
✔ Controlled state  
✔ Reusable architecture  

---

### 📝 Aesthetic Notes Panel

- Minimal and distraction-free writing space  
- Designed for monthly planning  
- Easily extendable with localStorage  

---

### 🔄 Month Navigation

- Navigate between months using arrows  
- Calendar updates dynamically in real-time  

---

### 📱 Responsive Design

- Desktop → Structured layout  
- Mobile → Stacked, touch-friendly UI  

---

## 🧱 Project Structure
app/
 ├── page.tsx
      # Entry point (Next.js App Router)
      # Renders main Calendar component

components/
 ├── Calendar.tsx
      # Root UI composition
      # Combines HeroImage + DateRangePicker + Notes

 ├── HeroImage.tsx
      # Displays seasonal image banner
      # Shows dynamic month + message

 ├── Notes.tsx
      # Styled notes section for user input
      # Designed for future persistence (localStorage)

 ├── CalendarGrid.tsx
      # Generates calendar layout (7-column grid)
      # Applies date range logic

 ├── DayCell.tsx
      # Single date cell
      # Handles click + visual states (start/end/range)

 ├── date-range/
 │    ├── DateRangePicker.tsx
 │         # State controller
 │         # Manages selection logic & visibility

 │    ├── InputBox.tsx
 │         # Displays selected date range
 │         # Triggers popup open/close

 │    ├── PopupCalendar.tsx
 │         # Handles month navigation (← →)
 │         # Renders CalendarGrid

utils/
 ├── calendar.ts
      # Utility functions:
      # - Generate days of month
      # - Handle empty grid slots
      # - Date calculations


---

## 🧠 Engineering Highlights

### ⚡ State Management
- Centralized date selection logic  
- Controlled and predictable state flow  

---

### 🧩 Component Reusability
- `CalendarGrid` reused across features  
- `DayCell` designed as a modular unit  

---

### 🎯 UX Decisions
- Auto-close picker after selection  
- Clear visual hierarchy for date ranges  
- Minimal cognitive load for users  

---

### 🧼 Clean Code Practices
- Separation of concerns  
- Readable and maintainable structure  
- Scalable component design  

---

## 🛠 Tech Stack

- ⚛️ React (Next.js App Router)  
- 🟦 TypeScript  
- 🎨 CSS (custom styling, no heavy UI libraries)  

---

## 🧪 How to Run Locally

```bash
git clone <your-repo-link>
cd project-folder
npm install
npm run dev

