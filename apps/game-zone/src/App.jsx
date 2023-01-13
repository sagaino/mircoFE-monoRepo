// import { CardPicker } from "cardpicker/CardPicker";
// import { TopNumber } from "topnumber/TopNumber"
import React, { Suspense } from 'react';
import { Shell } from 'ui';
import './App.css';
import ErrorBoundary from "./SafeComponent";

const CardPickerLazy = React.lazy(() => import("cardpicker/CardPicker"));
const TopNumberLazy = React.lazy(() => import("topnumber/TopNumber"));

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
        <ErrorBoundary>
          <Suspense fallback="Loading">
            <CardPickerLazy />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback="Loading">
            <TopNumberLazy />
          </Suspense>
        </ErrorBoundary>
      </div>
    </Shell>
  );
}

export default App;
