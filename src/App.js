import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart2, List } from "lucide-react";

const initialCases = [
  { name: "Fracture Case", price: 0.16, history: [0.15, 0.16, 0.16] },
  { name: "Kilowatt Case", price: 0.45, history: [0.42, 0.44, 0.45] },
  { name: "Snakebite Case", price: 0.12, history: [0.10, 0.11, 0.12] },
  { name: "Revolution Case", price: 0.25, history: [0.24, 0.25, 0.25] },
  { name: "Recoil Case", price: 0.20, history: [0.18, 0.19, 0.20] },
  { name: "Dreams & Nightmares", price: 0.22, history: [0.21, 0.21, 0.22] },
  { name: "Clutch Case", price: 0.80, history: [0.78, 0.79, 0.80] },
  { name: "CS20 Case", price: 0.17, history: [0.15, 0.16, 0.17] },
  { name: "Horizon Case", price: 0.14, history: [0.13, 0.14, 0.14] },
  { name: "Prisma 2 Case", price: 0.13, history: [0.12, 0.12, 0.13] }
];

export default function App() {
  const [cases, setCases] = useState(initialCases);
  const [view, setView] = useState("simple");

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>🎮 CS2 Case Tracker</h1>
        <button onClick={() => setView(view === "simple" ? "stats" : "simple")}>
          {view === "simple" ? <BarChart2 size={20} /> : <List size={20} />}
          {view === "simple" ? " Voir Stats" : " Vue Simple"}
        </button>
      </div>

      {view === "simple" ? (
        <div style={{ display: "grid", gap: 16 }}>
          {cases.map((c) => (
            <div key={c.name} style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}>
              <h2 style={{ fontSize: "18px" }}>{c.name}</h2>
              <p>💰 Prix actuel : {c.price.toFixed(2)} €</p>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: "grid", gap: 16 }}>
          {cases.map((c) => (
            <div key={c.name} style={{ border: "1px solid #ccc", padding: 16, borderRadius: 8 }}>
              <h2 style={{ fontSize: "18px", marginBottom: 8 }}>{c.name}</h2>
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={c.history.map((p, i) => ({ name: `J${i + 1}`, prix: p }))}>
                  <XAxis dataKey="name" />
                  <YAxis domain={[Math.min(...c.history) * 0.95, Math.max(...c.history) * 1.05]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="prix" stroke="#8884d8" strokeWidth={2} dot />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
