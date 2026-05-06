import React from "react";
import { createRoot } from "react-dom/client";

const App: React.FC = () => (
  <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
    <h1>test-bun-workspaces-fanout</h1>
    <p>Reproduces sentinal-ub9f: bun monorepo workspace fan-out build.</p>
  </main>
);

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
