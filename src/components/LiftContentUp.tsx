import { useState } from "react";

export default function LiftContentUp() {
  return (
    <ColorPicker>
      <ExpensiveTree />
    </ColorPicker>
  );
}

function ColorPicker({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState("red");
  console.log("color picker rendered");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(event) => setColor(event.target.value)} />
      {children}
    </div>
  );
}

function ExpensiveTree() {
  console.log("expensive tree rendered");
  return <div>ExpensiveTree</div>;
}
