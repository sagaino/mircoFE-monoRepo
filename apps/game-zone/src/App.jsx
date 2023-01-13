import { CardPicker } from "cardpicker/CardPicker";
import { TopNumber } from "topnumber/TopNumber"
import { Shell } from 'ui';
import './App.css';

function App() {
  return (
    <Shell
      title='Game Zone'
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
      }}>
        <CardPicker />
        <TopNumber />
      </div>
    </Shell>
  );
}

export default App;
