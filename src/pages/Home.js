import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { code: "0455", name: "Economics" },
  { code: "0471", name: "English" },
  { code: "0610", name: "Biology" },
  { code: "0580", name: "Mathematics" },
];

export default function Home({ user }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Hello, {user.name}</h1>
      <p>Select a subject to view notes:</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {subjects.map((s) => (
          <Link
            key={s.code}
            to={`/notes/${s.code}`}
            style={{
              padding: "10px 20px",
              backgroundColor: s.code === "0455" ? "#007bff" : "#999",
              color: "white",
              textDecoration: "none",
              borderRadius: 5,
              maxWidth: 300,
            }}
          >
            {s.name} {s.code !== "0455" && "(Coming Soon)"}
          </Link>
        ))}
      </div>
    </div>
  );
}
