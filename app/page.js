"use client";
import { useState } from "react";

export default function Page() {
  const [msg, setMsg] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>龙虾AI</h2>
      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button>发送</button>
    </div>
  );
}
