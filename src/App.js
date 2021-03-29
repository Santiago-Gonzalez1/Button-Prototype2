import "./styles.css";

import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <Counter initialValue={0} />
      <h2> The Button </h2>
    </div>
  );
}
