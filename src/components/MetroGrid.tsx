import "../styles/MetroGrid.css";

const pastelClasses = ["pastel-1", "pastel-2", "pastel-3", "pastel-4", "pastel-5"];

function getRandomColorClass(index: number) {
  return pastelClasses[index % pastelClasses.length];
}

const L = ["Portfolio", "Expense Tracker", "AI Blog Writer", "Job Tracker"];
const M = [
  "PDF Invoice", "Travel Planner", "useLocalStorage()", "@stegadgets/ui-kit",
  "Dark Mode Hook", "@stegadgets/logger", "Auth Context", "Validator",
];
const S = Array.from({ length: 16 }, (_, i) => `Snippet ${i + 1}`);

function MetroGrid() {
  return (
    <div className="metro-grid">
      <div className="metro-row row-l">
        {L.map((label, i) => (
          <div key={`l-${i}`} className={`tile ${getRandomColorClass(i)}`}>{label}</div>
        ))}
      </div>
      <div className="metro-row row-m">
        {M.map((label, i) => (
          <div key={`m-${i}`} className={`tile ${getRandomColorClass(i + 100)}`}>{label}</div>
        ))}
      </div>
      <div className="metro-row row-s">
        {S.map((label, i) => (
          <div key={`s-${i}`} className={`tile ${getRandomColorClass(i + 200)}`}>{label}</div>
        ))}
      </div>
    </div>
  );
}

export default MetroGrid;
