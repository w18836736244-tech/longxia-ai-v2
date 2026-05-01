"use client";
import { useState } from "react";

export default function Page() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  async function send() {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: msg }),
    });

    const data = await res.json();

    setChat([
      ...chat,
      { role: "user", text: msg },
      { role: "ai", text: data.reply },
    ]);

    setMsg("");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>龙虾AI</h2>

      <div>
        {chat.map((c, i) => (
          <p key={i}>
            <b>{c.role}：</b>{c.text}
          </p>
        ))}
      </div>

      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="说点什么..."
      />
      <button onClick={send}>发送</button>
    </div>
  );
}
