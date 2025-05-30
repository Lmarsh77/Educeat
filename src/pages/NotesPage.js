import React from "react";
import { useParams } from "react-router-dom";

import economicsContent from "../data/economicsNotes";

const content = {
  "0455": economicsContent,
};

export default function NotesPage() {
  const { subjectCode } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h1>Subject Code: {subjectCode}</h1>
      {content[subjectCode] || <p>Notes coming soon!</p>}
    </div>
  );
}
