"use client";
import { useEffect, useState } from "react";

export default function Notes() {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setText(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", text);
  }, [text]);

  return (
    <div className="notes">
      <h3>Notes</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}